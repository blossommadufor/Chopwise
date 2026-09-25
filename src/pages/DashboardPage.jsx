import { Link } from "react-router-dom";
import { PlusCircle } from "lucide-react";
import DashboardScannerCard from "../components/dashboard/DashboardScannerCard";
import CalorieArchGauge from "../components/dashboard/CalorieArchGauge";
import MacroCard from "../components/dashboard/MacroCard";
import WaterTrackerCard from "../components/dashboard/WaterTrackerCard";
import StepTrackerCard from "../components/dashboard/StepTrackerCard";
import MealLogList from "../components/meals/MealLogList";

export default function DashboardPage() {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* 1. TOP SECTION: Snap or Upload Plate Food Scanner */}
      <DashboardScannerCard />

      {/* 2. SECOND SECTION: Daily Calorie Target Arc & Macro Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        <CalorieArchGauge />
        <MacroCard />
      </div>

      {/* 3. THIRD SECTION: Hydration & Active Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <WaterTrackerCard />
        <StepTrackerCard />
      </div>

      {/* 4. FOURTH SECTION: Today's Logged Meals */}
      <div className="pt-2">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-black text-[#18233C] dark:text-white">Today's Meals Journal</h2>
            <p className="text-xs text-[#6B6557] dark:text-slate-400 font-medium">Logged dishes, macros, and timestamps</p>
          </div>
          <Link
            to="/log-meals"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#C84523] hover:bg-[#B33919] text-white rounded-xl text-xs font-bold shadow-sm shadow-[#C84523]/20 transition-all active:scale-98"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Search & Add Food</span>
          </Link>
        </div>

        <MealLogList />
      </div>
    </div>
  );
}
