import { useState } from "react";
import { Activity, Droplets, HeartPulse } from "lucide-react";
import { useWellness } from "../../context/WellnessContext";

export default function BodyMetrics() {
  const { userProfile } = useWellness();
  const weightKg = userProfile.weight || 68;
  const heightInches = userProfile.heightInches || 65; // e.g. 5'5"
  const gender = userProfile.gender || "female";

  // Tape measurements in INCHES
  const [waistInches, setWaistInches] = useState(29); // approx 74cm
  const [neckInches, setNeckInches] = useState(13.5); // approx 34cm
  const [hipsInches, setHipsInches] = useState(38.5); // approx 98cm

  // US Navy Body Fat estimation formula using INCHES
  let estimatedBodyFat;
  try {
    if (gender === "male") {
      const diff = Math.max(0.5, waistInches - neckInches);
      estimatedBodyFat = Math.round(
        86.010 * Math.log10(diff) - 70.041 * Math.log10(heightInches) + 36.76
      );
    } else {
      const diff = Math.max(0.5, waistInches + hipsInches - neckInches);
      estimatedBodyFat = Math.round(
        163.205 * Math.log10(diff) - 97.684 * Math.log10(heightInches) - 78.387
      );
    }
  } catch {
    estimatedBodyFat = 24;
  }

  const validBodyFat = Math.max(6, Math.min(55, estimatedBodyFat || 24));
  const dailyWaterTargetMl = Math.round(weightKg * 35);
  const dailyWaterGlasses = Math.round(dailyWaterTargetMl / 250);

  return (
    <div className="bg-[#FFFDF9] dark:bg-[#141C2E] rounded-3xl p-6 sm:p-8 border border-[#EBE3D3] dark:border-[#232E47] shadow-sm space-y-6 transition-colors">
      <div className="flex items-center gap-3 pb-4 border-b border-[#EBE3D3]/60 dark:border-slate-800">
        <div className="w-10 h-10 rounded-2xl bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold">
          <Activity className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-lg font-black text-[#18233C] dark:text-white">
            Body Composition & Tape Metrics
          </h2>
          <p className="text-xs text-[#6B6557] dark:text-slate-400">
            US Navy tape circumference method measured in <strong>inches (in)</strong>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Measurement Inputs in Inches */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-[#18233C] dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Waist Circumference (inches)
            </label>
            <div className="relative">
              <input
                type="number"
                step="0.5"
                min="18"
                max="75"
                value={waistInches}
                onChange={(e) => setWaistInches(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 bg-[#F8F4EA]/60 dark:bg-slate-800 border border-[#EBE3D3] dark:border-slate-700 rounded-xl text-sm font-bold text-[#18233C] dark:text-white focus:outline-none"
              />
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 font-bold uppercase">
                in
              </span>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">Measure across the navel relaxed</p>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#18233C] dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Neck Circumference (inches)
            </label>
            <div className="relative">
              <input
                type="number"
                step="0.5"
                min="9"
                max="30"
                value={neckInches}
                onChange={(e) => setNeckInches(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 bg-[#F8F4EA]/60 dark:bg-slate-800 border border-[#EBE3D3] dark:border-slate-700 rounded-xl text-sm font-bold text-[#18233C] dark:text-white focus:outline-none"
              />
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 font-bold uppercase">
                in
              </span>
            </div>
            <p className="text-[11px] text-slate-400 mt-1">Measure just below the Adam’s apple</p>
          </div>

          {gender === "female" && (
            <div>
              <label className="block text-xs font-bold text-[#18233C] dark:text-slate-300 uppercase tracking-wider mb-1.5">
                Hips Circumference (inches)
              </label>
              <div className="relative">
                <input
                  type="number"
                  step="0.5"
                  min="20"
                  max="85"
                  value={hipsInches}
                  onChange={(e) => setHipsInches(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 bg-[#F8F4EA]/60 dark:bg-slate-800 border border-[#EBE3D3] dark:border-slate-700 rounded-xl text-sm font-bold text-[#18233C] dark:text-white focus:outline-none"
                />
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 font-bold uppercase">
                  in
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">Measure around the widest point of the buttocks</p>
            </div>
          )}
        </div>

        {/* Results Card */}
        <div className="space-y-4">
          {/* Estimated Body Fat */}
          <div className="p-5 rounded-2xl bg-[#FFFDF9] dark:bg-slate-800/80 border border-emerald-200 dark:border-emerald-800/50 flex items-center justify-between shadow-2xs">
            <div>
              <span className="editorial-badge text-[10px] font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                Calculated Body Fat
              </span>
              <p className="text-4xl font-black text-emerald-950 dark:text-emerald-200 mt-1 font-mono">
                {validBodyFat}%
              </p>
              <p className="text-xs text-emerald-700 dark:text-emerald-400 mt-1 font-medium">
                {validBodyFat < 20 ? "Athletic / Lean" : validBodyFat <= 26 ? "Healthy / Fitness Range" : "Moderate Body Fat"}
              </p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <HeartPulse className="w-6 h-6" />
            </div>
          </div>

          {/* Daily Hydration Calculation */}
          <div className="p-5 rounded-2xl bg-[#FFFDF9] dark:bg-slate-800/80 border border-sky-200 dark:border-sky-800/50 flex items-center justify-between shadow-2xs">
            <div>
              <span className="editorial-badge text-[10px] font-black uppercase tracking-wider text-sky-800 dark:text-sky-300">
                Recommended Daily Water
              </span>
              <p className="text-3xl font-black text-sky-950 dark:text-sky-200 mt-1 font-mono">
                {dailyWaterTargetMl.toLocaleString()}{" "}
                <span className="text-sm font-bold text-sky-600 dark:text-sky-400">ml/day</span>
              </p>
              <p className="text-xs text-sky-700 dark:text-sky-400 mt-1 font-medium">
                ~{dailyWaterGlasses} glasses (250ml each) for optimal metabolic hydration
              </p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-sky-500/15 text-sky-600 dark:text-sky-400 flex items-center justify-center">
              <Droplets className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
