import { Link } from "react-router-dom";
import { Flame, Plus, UtensilsCrossed, Sun, Moon } from "lucide-react";
import { useWellness } from "../../context/WellnessContext";

export default function Header() {
  const { streak, stats, theme, toggleTheme } = useWellness();

  const todayStr = new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
  }).format(new Date());

  return (
    <header className="bg-[#FFFDF9]/90 dark:bg-[#141C2E]/90 backdrop-blur-md border-b border-[#EBE3D3] dark:border-[#232E47] sticky top-0 z-20 px-4 md:px-8 py-3.5 flex items-center justify-between transition-colors">
      {/* Left info: Branding on Mobile, Greeting on Desktop */}
      <div className="flex items-center gap-3">
        {/* Mobile Brand Logo */}
        <Link to="/" className="md:hidden flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-[#C84523] flex items-center justify-center text-white shadow-sm">
            <UtensilsCrossed className="w-4 h-4" />
          </div>
          <span className="font-black text-lg text-[#18233C] dark:text-white tracking-tight">ChopWise</span>
        </Link>

        {/* Desktop Greeting */}
        <div className="hidden md:block">
          <h1 className="text-xl font-black text-[#18233C] dark:text-white flex items-center gap-2">
            ChopWise Dashboard <span className="text-[#C84523] dark:text-[#E25B37]">🥗</span>
          </h1>
          <p className="text-xs text-[#6B6557] dark:text-slate-400 font-medium">
            {todayStr} • Mindful African Nutrition & Wellness
          </p>
        </div>
      </div>

      {/* Right side stats & actions */}
      <div className="flex items-center gap-3 md:gap-4">
        {/* Theme Toggle Button (Light/Dark) */}
        <button
          onClick={toggleTheme}
          title={`Switch to ${theme === "dark" ? "Light" : "Dark"} mode`}
          className="p-2 rounded-xl bg-[#F8F4EA] dark:bg-slate-800 text-[#18233C] dark:text-amber-300 border border-[#E0D5BE] dark:border-slate-700 hover:scale-105 active:scale-95 transition-all"
        >
          {theme === "dark" ? (
            <Sun className="w-4 h-4 text-amber-400 fill-amber-400" />
          ) : (
            <Moon className="w-4 h-4 text-[#18233C] fill-[#18233C]" />
          )}
        </button>

        {/* Streak Counter */}
        <div className="flex items-center gap-1.5 bg-amber-50 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-900 px-3 py-1.5 rounded-full text-[#9E650C] dark:text-amber-300 text-xs font-black shadow-2xs">
          <Flame className="w-4 h-4 fill-[#D99020] text-[#D99020]" />
          <span>{streak} Day Streak</span>
        </div>

        {/* Calorie Quick Badge */}
        <div className="hidden sm:flex items-center gap-2 bg-[#F8F4EA] dark:bg-slate-800/80 border border-[#EBE3D3] dark:border-slate-700 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#18233C] dark:text-slate-200 font-mono">
          <span className="w-2 h-2 rounded-full bg-[#C84523] dark:bg-[#E25B37] animate-pulse" />
          <span>
            {stats.remainingCalories > 0
              ? `${stats.remainingCalories.toLocaleString()} kcal left`
              : "Goal reached! 🎉"}
          </span>
        </div>

        {/* Quick Log CTA Button */}
        <Link
          to="/log-meals"
          className="hidden sm:inline-flex items-center gap-1.5 bg-[#C84523] hover:bg-[#B33919] active:scale-98 text-white px-3.5 py-1.5 rounded-xl text-xs font-bold shadow-sm shadow-[#C84523]/25 transition-all"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Food</span>
        </Link>
      </div>
    </header>
  );
}
