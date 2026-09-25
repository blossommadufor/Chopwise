import { Droplet, Plus, RotateCcw } from "lucide-react";
import { useWellness } from "../../context/WellnessContext";

export default function WaterTrackerCard() {
  const { waterGlasses, waterGoal, addWaterGlass, resetWater } = useWellness();

  const mlConsumed = waterGlasses * 250;
  const mlGoal = waterGoal * 250;
  const pct = Math.min(100, Math.round((waterGlasses / waterGoal) * 100));

  return (
    <div className="bg-[#FFFDF9] dark:bg-[#141C2E] rounded-3xl p-6 border border-[#EBE3D3] dark:border-[#232E47] shadow-sm flex flex-col justify-between transition-colors">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold">
              <Droplet className="w-4 h-4 fill-current" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-[#18233C] dark:text-white">Hydration Tracker</h3>
              <p className="text-xs text-[#6B6557] dark:text-slate-400">250ml per glass</p>
            </div>
          </div>
          <span className="editorial-badge text-[10px] font-bold text-sky-800 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-900 px-2.5 py-1 rounded-full">
            {pct}% Reached
          </span>
        </div>

        {/* Counter Display */}
        <div className="flex items-baseline gap-2 my-2">
          <span className="text-3xl font-black text-[#18233C] dark:text-white font-mono">{waterGlasses}</span>
          <span className="text-[#8C8372] dark:text-slate-400 font-bold text-sm">/ {waterGoal} glasses</span>
          <span className="text-xs text-sky-600 dark:text-sky-400 font-bold ml-auto font-mono">
            ({mlConsumed.toLocaleString()} / {mlGoal.toLocaleString()} ml)
          </span>
        </div>

        {/* Visual Glass Drops */}
        <div className="grid grid-cols-8 gap-1.5 py-3">
          {Array.from({ length: Math.max(waterGoal, waterGlasses) }).map((_, i) => (
            <div
              key={i}
              className={`h-7 rounded-lg flex items-center justify-center transition-all ${
                i < waterGlasses
                  ? "bg-sky-500 text-white shadow-xs shadow-sky-500/20 scale-105"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-300 dark:text-slate-600"
              }`}
            >
              <Droplet className="w-3.5 h-3.5 fill-current" />
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 pt-2 border-t border-[#EBE3D3]/60 dark:border-slate-800">
        <button
          onClick={() => addWaterGlass(1)}
          className="flex-1 py-2 px-3 bg-sky-50 dark:bg-sky-950/50 hover:bg-sky-100 dark:hover:bg-sky-900/50 text-sky-800 dark:text-sky-300 active:scale-98 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>+1 Glass</span>
        </button>

        <button
          onClick={() => addWaterGlass(2)}
          className="py-2 px-3 bg-sky-600 hover:bg-sky-700 text-white active:scale-98 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1 shadow-xs shadow-sky-500/20"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>+500ml</span>
        </button>

        <button
          onClick={resetWater}
          title="Reset tracker"
          className="p-2 border border-[#EBE3D3] dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 rounded-xl transition-all"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
