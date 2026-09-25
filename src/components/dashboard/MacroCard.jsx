import { Dumbbell, Wheat, Droplet } from "lucide-react";
import { useWellness } from "../../context/WellnessContext";

export default function MacroCard() {
  const { stats } = useWellness();
  const {
    consumedProtein,
    consumedCarbs,
    consumedFat,
    targetProteinGrams,
    targetCarbsGrams,
    targetFatGrams,
  } = stats;

  const macros = [
    {
      name: "Protein",
      consumed: consumedProtein,
      target: targetProteinGrams,
      unit: "g",
      color: "bg-[#18233C] dark:bg-indigo-500",
      lightColor: "bg-indigo-50/60 dark:bg-indigo-950/40",
      textColor: "text-[#18233C] dark:text-indigo-300",
      borderColor: "border-indigo-100 dark:border-indigo-900/40",
      icon: Dumbbell,
      tag: "Muscle & Repair",
    },
    {
      name: "Carbohydrates",
      consumed: consumedCarbs,
      target: targetCarbsGrams,
      unit: "g",
      color: "bg-[#D99020] dark:bg-amber-500",
      lightColor: "bg-amber-50/60 dark:bg-amber-950/40",
      textColor: "text-[#9E650C] dark:text-amber-300",
      borderColor: "border-amber-100 dark:border-amber-900/40",
      icon: Wheat,
      tag: "Swallow & Grains Energy",
    },
    {
      name: "Fats & Oils",
      consumed: consumedFat,
      target: targetFatGrams,
      unit: "g",
      color: "bg-[#C84523] dark:bg-[#E25B37]",
      lightColor: "bg-rose-50/60 dark:bg-rose-950/40",
      textColor: "text-[#C84523] dark:text-rose-300",
      borderColor: "border-rose-100 dark:border-rose-900/40",
      icon: Droplet,
      tag: "Palm Oil & Stew Balance",
    },
  ];

  return (
    <div className="bg-[#FFFDF9] dark:bg-[#141C2E] rounded-3xl p-6 sm:p-7 border border-[#EBE3D3] dark:border-[#232E47] shadow-sm flex flex-col justify-between transition-colors">
      <div className="mb-4">
        <h3 className="text-base font-extrabold text-[#18233C] dark:text-white">Macronutrient Journal</h3>
        <p className="text-xs text-[#6B6557] dark:text-slate-400 font-medium">Daily target distribution</p>
      </div>

      <div className="space-y-4">
        {macros.map((m) => {
          const Icon = m.icon;
          const pct = Math.min(100, Math.round((m.consumed / m.target) * 100));

          return (
            <div
              key={m.name}
              className={`p-3.5 rounded-2xl border ${m.borderColor} ${m.lightColor} transition-all`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded-lg ${m.lightColor} ${m.textColor}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-[#18233C] dark:text-white">{m.name}</span>
                    <span className="hidden sm:inline-block text-[10px] text-slate-400 dark:text-slate-500 ml-2">
                      ({m.tag})
                    </span>
                  </div>
                </div>

                <div className="text-xs font-semibold text-[#18233C] dark:text-white font-mono">
                  <strong className={m.textColor}>{m.consumed}</strong> / {m.target} {m.unit}
                  <span className="text-[#8C8372] dark:text-slate-400 font-normal ml-1">({pct}%)</span>
                </div>
              </div>

              <div className="w-full h-2.5 bg-slate-200/60 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${m.color} transition-all duration-500`}
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-[11px] text-[#8C8372] dark:text-slate-400 text-center mt-4">
        💡 High palm oil in soups counts towards daily fats. Track combos to monitor oil balance.
      </p>
    </div>
  );
}
