import { useRef, useState, useCallback, useEffect } from "react";

// Step detection parameters tuned for pocket/hand walking
const STEP_MIN_INTERVAL_MS = 280; // Max ~3.5 steps/sec
const PEAK_THRESHOLD = 1.35; // Acceleration spike above dynamic gravity baseline

export function useStepTracker(onStep) {
    const [tracking, setTracking] = useState(false);
    const [status, setStatus] = useState("Tap to start live pedometer");
    const [isWalking, setIsWalking] = useState(false);

    const baselineMag = useRef(9.8);
    const lastStepTime = useRef(0);
    const lastAboveThreshold = useRef(false);
    const walkingTimeout = useRef(null);
    const wakeLockRef = useRef(null);

    const handleMotion = useCallback(
        (e) => {
            // Use acceleration without gravity if available, or fall back to including gravity
            const acc = (e.acceleration && e.acceleration.x != null) ?
                e.acceleration :
                e.accelerationIncludingGravity;

            if (!acc || acc.x === null || acc.y === null || acc.z === null) return;

            const rawMag = Math.sqrt(
                (acc.x || 0) ** 2 + (acc.y || 0) ** 2 + (acc.z || 0) ** 2
            );

            // Low-pass filter to track dynamic gravity/orientation baseline (~9.8 m/s²)
            baselineMag.current = baselineMag.current * 0.9 + rawMag * 0.1;
            const deviation = Math.abs(rawMag - baselineMag.current);

            const now = Date.now();
            const timeSinceLast = now - lastStepTime.current;

            // Peak detection with hysteresis & debounce
            if (deviation > PEAK_THRESHOLD) {
                if (!lastAboveThreshold.current && timeSinceLast > STEP_MIN_INTERVAL_MS) {
                    lastStepTime.current = now;
                    lastAboveThreshold.current = true;
                    onStep();

                    // Visual walking pulse
                    setIsWalking(true);
                    clearTimeout(walkingTimeout.current);
                    walkingTimeout.current = setTimeout(() => {
                        setIsWalking(false);
                    }, 1200);
                }
            } else if (deviation < PEAK_THRESHOLD * 0.5) {
                lastAboveThreshold.current = false;
            }
        }, [onStep]
    );

    const requestWakeLock = async() => {
        try {
            if ("wakeLock" in navigator) {
                wakeLockRef.current = await navigator.wakeLock.request("screen");
            }
        } catch {
            // Screen lock permission denied or unsupported
        }
    };

    const releaseWakeLock = () => {
        if (wakeLockRef.current) {
            wakeLockRef.current.release().catch(() => {});
            wakeLockRef.current = null;
        }
    };

    const start = useCallback(() => {
        const needsPermission =
            typeof DeviceMotionEvent !== "undefined" &&
            typeof DeviceMotionEvent.requestPermission === "function";

        if (needsPermission) {
            DeviceMotionEvent.requestPermission()
                .then((res) => {
                    if (res === "granted") {
                        window.addEventListener("devicemotion", handleMotion);
                        setTracking(true);
                        setStatus("Active — walk with phone in hand or pocket");
                        requestWakeLock();
                    } else {
                        setStatus("Sensor permission denied");
                    }
                })
                .catch(() => setStatus("Motion sensor unavailable"));
        } else if ("DeviceMotionEvent" in window) {
            window.addEventListener("devicemotion", handleMotion);
            setTracking(true);
            setStatus("Active — walk with phone in hand or pocket");
            requestWakeLock();
        } else {
            setStatus("No motion sensor on this device (use +500)");
        }
    }, [handleMotion]);

    const stop = useCallback(() => {
        window.removeEventListener("devicemotion", handleMotion);
        setTracking(false);
        setIsWalking(false);
        setStatus("Sensor paused");
        releaseWakeLock();
    }, [handleMotion]);

    const toggle = useCallback(() => {
        tracking ? stop() : start();
    }, [tracking, start, stop]);

    useEffect(() => {
        return () => {
            window.removeEventListener("devicemotion", handleMotion);
            releaseWakeLock();
        };
    }, [handleMotion]);

    return { tracking, status, isWalking, toggle };
}