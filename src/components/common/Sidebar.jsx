import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  UtensilsCrossed, 
  Calculator, 
  Flame, 
  PlusCircle,
  Sun,
  Moon
} from "lucide-react";
import { useWellness } from "../../context/WellnessContext";

export default function Sidebar() {
  const { streak, stats, dailyTarget, theme, toggleTheme } = useWellness();

  const navLinks = [
    { to: "/", label: "Dashboard", icon: LayoutDashboard, end: true },
    { to: "/log-meals", label: "Log Meals", icon: UtensilsCrossed },
    { to: "/calculator", label: "Targets & Calculator", icon: Calculator },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 bg-[#141C2E] border-r border-[#232E47] text-slate-200 h-screen sticky top-0 shrink-0 select-none z-30 transition-colors">
      {/* Brand Header */}
      <div className="p-6 border-b border-[#232E47]">
        <NavLink to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#C84523] to-[#E59E27] flex items-center justify-center text-white font-black shadow-lg shadow-[#C84523]/25 group-hover:scale-105 transition-transform">
            <UtensilsCrossed className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-black text-xl text-white tracking-tight">ChopWise</span>
              <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                NG
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium">African Nutrition Tracker</p>
          </div>
        </NavLink>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 p-4 space-y-1.5">
        <p className="editorial-badge text-[10px] font-black uppercase text-slate-400 px-3.5 py-2">
          Workspace
        </p>

        {navLinks.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `flex items-center gap-3.5 px-3.5 py-2.5 rounded-2xl font-bold text-sm transition-all duration-200 ${
                  isActive
                    ? "bg-[#C84523] text-white shadow-md shadow-[#C84523]/30"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`
              }
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span>{item.label}</span>
            </NavLink>
          );
        })}

        <div className="pt-6">
          <NavLink
            to="/log-meals"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#C84523]/15 hover:bg-[#C84523]/25 text-[#E25B37] hover:text-white border border-[#C84523]/30 rounded-2xl text-xs font-bold transition-all shadow-sm"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Quick Food Search</span>
          </NavLink>
        </div>
      </nav>

      {/* Mini Streak & Target Progress Card */}
      <div className="p-4 border-t border-[#232E47] bg-black/20 space-y-3">
        <div className="bg-[#18233C]/80 border border-[#273350] rounded-2xl p-3.5 space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-amber-400 text-xs font-black">
              <Flame className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>{streak}-Day Streak</span>
            </div>
            <span className="editorial-badge text-[9px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded-full">
              Active
            </span>
          </div>

          <div>
            <div className="flex justify-between text-xs text-slate-300 mb-1 font-mono font-medium">
              <span>Calories</span>
              <span className="font-bold text-white">
                {stats.consumedCalories} / {dailyTarget}
              </span>
            </div>
            <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  stats.isOver ? "bg-rose-500" : "bg-[#C84523]"
                }`}
                style={{ width: `${Math.min(100, stats.percentage)}%` }}
              />
            </div>
          </div>
        </div>

        {/* Theme Toggle in Sidebar */}
        <button
          onClick={toggleTheme}
          className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-slate-300 font-bold transition-colors"
        >
          <span>Appearance:</span>
          <span className="flex items-center gap-1.5 text-amber-300 capitalize">
            {theme === "dark" ? <Moon className="w-3.5 h-3.5 fill-current" /> : <Sun className="w-3.5 h-3.5 fill-current" />}
            {theme} Mode
          </span>
        </button>
      </div>
    </aside>
  );
}
