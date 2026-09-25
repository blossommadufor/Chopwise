import { Footprints, Play, Pause, Plus } from "lucide-react";
import { useWellness } from "../../context/WellnessContext";
import { useStepTracker } from "../../hooks/useStepTracker";

export default function StepTrackerCard() {
  const { steps, stepGoal, addManualSteps, setSteps } = useWellness();

  // Accelerometer motion sensor hook with live walking detection
  const { tracking, status, isWalking, toggle } = useStepTracker(() => {
    setSteps((prev) => prev + 1);
  });

  const pct = Math.min(100, Math.round((steps / stepGoal) * 100));
  const estimatedCaloriesBurned = Math.round(steps * 0.04);

  return (
    <div className="bg-[#FFFDF9] dark:bg-[#141C2E] rounded-3xl p-6 border border-[#EBE3D3] dark:border-[#232E47] shadow-sm flex flex-col justify-between transition-colors">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold transition-all ${
                isWalking
                  ? "bg-emerald-500 text-white animate-bounce shadow-md shadow-emerald-500/40"
                  : "bg-amber-50 dark:bg-amber-950/40 text-[#D99020] dark:text-amber-400"
              }`}
            >
              <Footprints className="w-4 h-4 fill-current" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-extrabold text-[#18233C] dark:text-white">Active Steps</h3>
                {isWalking && (
                  <span className="editorial-badge text-[9px] bg-emerald-500 text-white font-black px-1.5 py-0.5 rounded animate-pulse">
                    Walking
                  </span>
                )}
              </div>
              <p className="text-xs text-[#6B6557] dark:text-slate-400 truncate max-w-[200px]">{status}</p>
            </div>
          </div>

          <span className="editorial-badge text-[10px] font-bold text-amber-900 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 px-2.5 py-1 rounded-full">
            ~{estimatedCaloriesBurned} kcal burned
          </span>
        </div>

        {/* Counter Display */}
        <div className="flex items-baseline gap-2 my-2">
          <span className="text-3xl font-black text-[#18233C] dark:text-white font-mono">{steps.toLocaleString()}</span>
          <span className="text-[#8C8372] dark:text-slate-400 font-bold text-sm">/ {stepGoal.toLocaleString()} steps</span>
          <span className="text-xs text-[#D99020] dark:text-amber-400 font-bold ml-auto font-mono">{pct}% Goal</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden my-3">
          <div
            className="h-full bg-gradient-to-r from-[#D99020] to-[#E59E27] dark:from-amber-500 dark:to-amber-400 rounded-full transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 pt-2 border-t border-[#EBE3D3]/60 dark:border-slate-800">
        <button
          onClick={toggle}
          className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
            tracking
              ? "bg-rose-600 hover:bg-rose-700 text-white shadow-xs"
              : "bg-[#18233C] hover:bg-[#233152] dark:bg-slate-800 dark:hover:bg-slate-700 text-white shadow-xs"
          }`}
        >
          {tracking ? (
            <>
              <Pause className="w-3.5 h-3.5" />
              <span>Pause Sensor</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Auto Track Motion</span>
            </>
          )}
        </button>

        <button
          onClick={() => addManualSteps(500)}
          className="py-2 px-3 border border-[#EBE3D3] dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-[#18233C] dark:text-slate-200 active:scale-98 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>+500</span>
        </button>

        <button
          onClick={() => addManualSteps(1000)}
          className="py-2 px-3 border border-[#EBE3D3] dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-[#18233C] dark:text-slate-200 active:scale-98 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>+1k</span>
        </button>
      </div>
    </div>
  );
}
