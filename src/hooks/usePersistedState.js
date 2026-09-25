import { useState, useEffect, useRef } from "react";

// Persists state to localStorage under `key`, debounced to avoid
// writing on every keystroke/tick.
export function usePersistedState(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored !== null ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const saveTimer = useRef(null);

  useEffect(() => {
    clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch {
        // storage unavailable (e.g. private browsing) — fail silently
      }
    }, 300);
    return () => clearTimeout(saveTimer.current);
  }, [key, value]);

  return [value, setValue];
}
