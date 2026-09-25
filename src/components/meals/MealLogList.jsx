import { Trash2, Clock, Utensils } from "lucide-react";
import { useWellness } from "../../context/WellnessContext";

export default function MealLogList() {
  const { meals, removeMeal, clearTodayMeals } = useWellness();

  const categories = ["Breakfast", "Lunch", "Dinner", "Snacks"];

  const formatTime = (ts) => {
    if (!ts) return "";
    return new Date(ts).toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="bg-[#FFFDF9] dark:bg-[#141C2E] rounded-3xl p-6 sm:p-7 border border-[#EBE3D3] dark:border-[#232E47] shadow-sm space-y-6 transition-colors">
      <div className="flex items-center justify-between pb-4 border-b border-[#EBE3D3]/60 dark:border-slate-800">
        <div>
          <h3 className="text-lg font-black text-[#18233C] dark:text-white">Today's Meals Journal</h3>
          <p className="text-xs text-[#6B6557] dark:text-slate-400">
            {meals.length} item{meals.length === 1 ? "" : "s"} logged today
          </p>
        </div>

        {meals.length > 0 && (
          <button
            onClick={() => {
              if (window.confirm("Are you sure you want to clear today's meals?")) {
                clearTodayMeals();
              }
            }}
            className="editorial-badge text-[11px] font-bold text-rose-600 dark:text-rose-400 hover:underline"
          >
            Clear Log
          </button>
        )}
      </div>

      {meals.length === 0 ? (
        <div className="py-12 text-center text-slate-400">
          <Utensils className="w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto mb-2.5" />
          <p className="text-sm font-bold text-[#18233C] dark:text-slate-200">No meals logged yet today</p>
          <p className="text-xs text-[#6B6557] dark:text-slate-400 mt-1 max-w-xs mx-auto">
            Snap your plate, search the Nigerian food directory, or build a 1-tap Swallow combo!
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {categories.map((category) => {
            const categoryMeals = meals.filter((m) => m.mealType === category);
            if (categoryMeals.length === 0) return null;

            const categoryCalories = categoryMeals.reduce(
              (sum, m) => sum + (Number(m.calories) || 0),
              0
            );

            return (
              <div key={category} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C84523] dark:bg-[#E25B37]" />
                    <h4 className="font-extrabold text-sm text-[#18233C] dark:text-white">{category}</h4>
                  </div>
                  <span className="text-xs font-bold text-[#18233C] dark:text-slate-300 font-mono">
                    {categoryCalories} <span className="text-slate-400">kcal</span>
                  </span>
                </div>

                <div className="space-y-2">
                  {categoryMeals.map((meal) => (
                    <div
                      key={meal.id}
                      className="p-3.5 rounded-2xl bg-[#F8F4EA]/70 dark:bg-slate-800/60 hover:bg-[#F8F4EA] dark:hover:bg-slate-800 border border-[#EBE3D3]/80 dark:border-slate-700/80 transition-all flex items-center justify-between"
                    >
                      <div className="flex-1 min-w-0 pr-3">
                        <div className="flex items-center gap-2">
                          <h5 className="font-bold text-sm text-[#18233C] dark:text-white truncate">
                            {meal.name}
                          </h5>
                          {meal.timestamp && (
                            <span className="flex items-center gap-1 text-[11px] text-[#8C8372] dark:text-slate-400 font-mono">
                              <Clock className="w-3 h-3" />
                              {formatTime(meal.timestamp)}
                            </span>
                          )}
                        </div>

                        <p className="text-xs text-[#6B6557] dark:text-slate-400 mt-0.5 truncate">{meal.serving}</p>

                        <div className="flex items-center gap-2.5 text-[11px] text-slate-600 dark:text-slate-300 mt-1 font-mono">
                          <span className="text-indigo-600 dark:text-indigo-400 font-bold">{meal.protein}g P</span>
                          <span>•</span>
                          <span className="text-[#9E650C] dark:text-amber-400 font-bold">{meal.carbs}g C</span>
                          <span>•</span>
                          <span className="text-[#C84523] dark:text-rose-400 font-bold">{meal.fat}g F</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <span className="font-black text-sm text-[#18233C] dark:text-white font-mono">
                          {meal.calories}{" "}
                          <span className="text-xs text-slate-400 font-semibold">kcal</span>
                        </span>

                        <button
                          onClick={() => removeMeal(meal.id)}
                          className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-xl transition-all"
                          title="Remove meal"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
