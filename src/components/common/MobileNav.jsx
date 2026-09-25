import { NavLink } from "react-router-dom";
import { LayoutDashboard, Plus, Calculator } from "lucide-react";

export default function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#141C2E]/95 dark:bg-[#0B111E]/95 backdrop-blur-lg border-t border-[#232E47] px-6 py-2 flex items-center justify-around shadow-2xl safe-area-pb">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `flex flex-col items-center gap-1 py-1 px-4 text-[11px] font-bold transition-colors ${
            isActive ? "text-[#E25B37] font-black" : "text-slate-400 hover:text-slate-200"
          }`
        }
      >
        <LayoutDashboard className="w-5 h-5" />
        <span>Dashboard</span>
      </NavLink>

      {/* Center Highlighted Log Button */}
      <NavLink
        to="/log-meals"
        className="flex flex-col items-center -mt-6 group"
      >
        <div className="w-13 h-13 rounded-full bg-[#C84523] text-white flex items-center justify-center shadow-lg shadow-[#C84523]/40 border-4 border-[#141C2E] dark:border-[#0B111E] group-active:scale-95 transition-transform">
          <Plus className="w-6 h-6 stroke-[3]" />
        </div>
        <span className="editorial-badge text-[10px] font-black text-amber-300 mt-0.5">Log Meal</span>
      </NavLink>

      <NavLink
        to="/calculator"
        className={({ isActive }) =>
          `flex flex-col items-center gap-1 py-1 px-4 text-[11px] font-bold transition-colors ${
            isActive ? "text-[#E25B37] font-black" : "text-slate-400 hover:text-slate-200"
          }`
        }
      >
        <Calculator className="w-5 h-5" />
        <span>Targets</span>
      </NavLink>
    </nav>
  );
}
