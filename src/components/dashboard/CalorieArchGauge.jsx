import { Flame } from "lucide-react";
import { useWellness } from "../../context/WellnessContext";

export default function CalorieArchGauge() {
  const { dailyTarget, stats, theme } = useWellness();
  const { consumedCalories, remainingCalories, percentage, isOver } = stats;

  const totalBoxes = 18;
  const activeBoxesCount = Math.min(totalBoxes, Math.round((percentage / 100) * totalBoxes));

  // Gauge SVG Dimensions
  const svgWidth = 440;
  const svgHeight = 240;
  const cx = 220;
  const cy = 210;
  const innerRadius = 160;
  const outerRadius = 195;

  const boxes = Array.from({ length: totalBoxes }).map((_, index) => {
    const angleStep = 180 / totalBoxes;
    const startAngle = 180 - index * angleStep - 0.7;
    const endAngle = 180 - (index + 1) * angleStep + 0.7;

    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;

    const x1 = cx + innerRadius * Math.cos(startRad);
    const y1 = cy - innerRadius * Math.sin(startRad);
    const x2 = cx + innerRadius * Math.cos(endRad);
    const y2 = cy - innerRadius * Math.sin(endRad);

    const x3 = cx + outerRadius * Math.cos(endRad);
    const y3 = cy - outerRadius * Math.sin(endRad);
    const x4 = cx + outerRadius * Math.cos(startRad);
    const y4 = cy - outerRadius * Math.sin(startRad);

    const pathData = `M ${x1} ${y1} L ${x2} ${y2} L ${x3} ${y3} L ${x4} ${y4} Z`;
    const isActive = index < activeBoxesCount;

    return { pathData, isActive };
  });

  // Dynamic Afro-Editorial Color Dial
  const isDark = theme === "dark";
  const inactiveColor = isDark ? "#232E47" : "#EFE8D8";
  const activeColor = isOver
    ? isDark ? "#EF4444" : "#DC2626"
    : percentage > 85
    ? isDark ? "#F59E0B" : "#D99020"
    : isDark ? "#E25B37" : "#C84523";

  return (
    <div className="bg-[#FFFDF9] dark:bg-[#141C2E] rounded-3xl p-6 sm:p-8 border border-[#EBE3D3] dark:border-[#232E47] shadow-sm flex flex-col items-center relative overflow-hidden transition-colors">
      {/* Background warm radial highlight */}
      <div
        className="absolute -top-24 w-72 h-72 rounded-full opacity-10 pointer-events-none blur-3xl transition-colors duration-500"
        style={{ backgroundColor: activeColor }}
      />

      <div className="w-full flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-[#C84523]/10 dark:bg-[#E25B37]/20 text-[#C84523] dark:text-[#E25B37] flex items-center justify-center font-bold">
            <Flame className="w-4 h-4 fill-current" />
          </div>
          <div>
            <h2 className="text-base font-extrabold text-[#18233C] dark:text-white">Daily Calorie Target</h2>
            <p className="text-xs text-[#6B6557] dark:text-slate-400 font-medium">Live energy balance dial</p>
          </div>
        </div>

        <span
          className={`editorial-badge text-[11px] font-black px-3 py-1 rounded-full border ${
            isOver
              ? "bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-900"
              : "bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-900"
          }`}
        >
          {percentage}% Consumed
        </span>
      </div>

      {/* SVG Arc Gauge */}
      <div className="relative w-full max-w-md flex justify-center items-center select-none pt-2">
        <svg
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          className="w-full h-auto max-h-[220px]"
        >
          {boxes.map((box, i) => (
            <path
              key={i}
              d={box.pathData}
              fill={box.isActive ? activeColor : inactiveColor}
              className="transition-colors duration-300 ease-in-out"
            />
          ))}
        </svg>

        {/* Counter in Arc Center */}
        <div className="absolute top-24 sm:top-28 left-0 right-0 flex flex-col items-center text-center">
          <div className="flex items-baseline justify-center tracking-tight">
            <span className="text-4xl sm:text-5xl font-black text-[#18233C] dark:text-white font-mono">
              {consumedCalories.toLocaleString()}
            </span>
            <span className="text-[#8C8372] dark:text-slate-500 text-lg sm:text-xl font-bold ml-1.5 font-mono">
              / {dailyTarget.toLocaleString()}
            </span>
          </div>

          <p className="editorial-badge text-[11px] font-bold text-[#8C8372] dark:text-slate-400 mt-1">
            kcal eaten today
          </p>

          <div className="mt-2 text-xs font-bold px-3 py-1 rounded-xl bg-[#F8F4EA] dark:bg-[#1E2B4A]/60 border border-[#EAE1D0] dark:border-[#2C3B5E] text-[#18233C] dark:text-slate-200 shadow-2xs">
            {isOver ? (
              <span className="text-rose-600 dark:text-rose-400 font-extrabold">
                +{(consumedCalories - dailyTarget).toLocaleString()} kcal over budget
              </span>
            ) : (
              <span>
                Remaining: <strong className="text-[#C84523] dark:text-[#E25B37]">{remainingCalories.toLocaleString()} kcal</strong>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
