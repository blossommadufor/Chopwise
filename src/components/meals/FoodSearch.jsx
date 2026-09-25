import { useState, useMemo } from "react";
import { Search, Plus, Sparkles, Eye } from "lucide-react";
import { FOOD_DATABASE, FOOD_CATEGORIES } from "../../data/foodDatabase";
import { useWellness } from "../../context/WellnessContext";
import PortionGuideModal from "./PortionGuideModal";

export default function FoodSearch({ onOpenComboBuilder, onOpenAiScanner, onOpenCustomModal }) {
  const { addMeal } = useWellness();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMealType, setSelectedMealType] = useState("Lunch");
  const [portionMultiplier, setPortionMultiplier] = useState(1);
  const [isPortionGuideOpen, setIsPortionGuideOpen] = useState(false);

  // Filter foods by query and category
  const filteredFoods = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return FOOD_DATABASE.filter((food) => {
      const matchesCategory =
        selectedCategory === "All" || food.category === selectedCategory;
      if (!matchesCategory) return false;
      if (!q) return true;

      const matchesName = food.name.toLowerCase().includes(q);
      const matchesAlias = food.aliases?.some((a) => a.toLowerCase().includes(q));
      return matchesName || matchesAlias;
    });
  }, [searchQuery, selectedCategory]);

  const handleQuickAdd = (food) => {
    const adjustedCalories = Math.round(food.calories * portionMultiplier);
    const adjustedProtein = Math.round(food.protein * portionMultiplier);
    const adjustedCarbs = Math.round(food.carbs * portionMultiplier);
    const adjustedFat = Math.round(food.fat * portionMultiplier);

    const servingLabel =
      portionMultiplier === 1
        ? food.serving
        : `${portionMultiplier}x ${food.serving}`;

    addMeal({
      name: food.name,
      mealType: selectedMealType,
      calories: adjustedCalories,
      protein: adjustedProtein,
      carbs: adjustedCarbs,
      fat: adjustedFat,
      serving: servingLabel,
    });
  };

  const getVisualPortionCue = (category) => {
    switch (category) {
      case "Swallows":
        return "✊ 1 Fist Wrap";
      case "Soups & Stews":
        return "🥣 1 Soup Bowl";
      case "Proteins":
        return "✋ 1 Palm Cut";
      case "Rice & Grains":
        return "🍽️ 1 Full Plate";
      case "Street Food & Snacks":
        return "🤏 Portion Pack";
      case "Breakfast":
        return "🥣 Morning Bowl";
      case "Drinks":
        return "🥤 1 Glass/Bottle";
      case "Combos":
        return "🍱 Complete Set";
      default:
        return "🍽️ Standard Serving";
    }
  };

  return (
    <div className="bg-[#FFFDF9] dark:bg-[#141C2E] rounded-3xl p-6 sm:p-7 border border-[#EBE3D3] dark:border-[#232E47] shadow-sm space-y-5 transition-colors">
      {/* Top Banner with Quick Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#EBE3D3]/60 dark:border-slate-800">
        <div>
          <h2 className="text-lg font-black text-[#18233C] dark:text-white">Nigerian Food Directory</h2>
          <p className="text-xs text-[#6B6557] dark:text-slate-400">160+ African dishes with visual serving guides</p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {/* Visual Portion Guide Modal Trigger */}
          <button
            onClick={() => setIsPortionGuideOpen(true)}
            className="flex items-center gap-1.5 px-3 py-2 bg-[#F8F4EA] dark:bg-slate-800 hover:bg-[#EFE7D5] dark:hover:bg-slate-700 text-[#18233C] dark:text-amber-300 border border-[#E0D5BE] dark:border-slate-700 rounded-xl text-xs font-bold transition-all"
          >
            <Eye className="w-3.5 h-3.5 text-[#C84523] dark:text-amber-400" />
            <span>Portion Guide</span>
          </button>

          <button
            onClick={onOpenComboBuilder}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-[#C84523] hover:bg-[#B33919] text-white rounded-xl text-xs font-bold shadow-sm shadow-[#C84523]/25 active:scale-98 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Swallow Combo</span>
          </button>

          <button
            onClick={onOpenAiScanner}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-[#18233C] dark:bg-slate-800 hover:bg-[#233152] dark:hover:bg-slate-700 text-white rounded-xl text-xs font-bold shadow-sm active:scale-98 transition-all"
          >
            <span>📸 Scan Plate</span>
          </button>

          <button
            onClick={onOpenCustomModal}
            className="flex items-center gap-1.5 px-3 py-2 border border-[#EBE3D3] dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-bold active:scale-98 transition-all"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Custom</span>
          </button>
        </div>
      </div>

      {/* Search Input & Portion Config */}
      <div className="flex flex-col sm:flex-row gap-3 items-center">
        {/* Search Bar */}
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search eba, egusi, jollof, suya, indomie, amala..."
            className="w-full pl-10 pr-4 py-2.5 bg-[#F8F4EA]/60 dark:bg-slate-800/80 border border-[#EBE3D3] dark:border-slate-700 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C84523]/30 text-[#18233C] dark:text-white transition-all placeholder:text-slate-400"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
            >
              Clear
            </button>
          )}
        </div>

        {/* Meal Type Selector & Multiplier */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <select
            value={selectedMealType}
            onChange={(e) => setSelectedMealType(e.target.value)}
            className="flex-1 sm:flex-none px-3 py-2.5 bg-[#F8F4EA]/60 dark:bg-slate-800/80 border border-[#EBE3D3] dark:border-slate-700 rounded-2xl text-xs font-bold text-[#18233C] dark:text-white focus:outline-none"
          >
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snacks">Snacks</option>
          </select>

          {/* Portion Size Toggle */}
          <div className="flex items-center bg-[#F8F4EA] dark:bg-slate-800 rounded-2xl p-1 text-xs font-bold text-slate-600 dark:text-slate-300">
            {[0.5, 1, 1.5, 2].map((p) => (
              <button
                key={p}
                onClick={() => setPortionMultiplier(p)}
                className={`px-2 py-1 rounded-xl transition-all ${
                  portionMultiplier === p
                    ? "bg-[#FFFDF9] dark:bg-[#141C2E] text-[#C84523] dark:text-[#E25B37] shadow-xs font-black"
                    : "hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {p}x
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        {FOOD_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? "bg-[#C84523] text-white shadow-xs"
                : "bg-[#F8F4EA] dark:bg-slate-800 text-[#6B6557] dark:text-slate-300 hover:bg-[#EFE7D5] dark:hover:bg-slate-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[460px] overflow-y-auto pr-1">
        {filteredFoods.length === 0 ? (
          <div className="col-span-full py-12 text-center text-slate-400">
            <p className="text-sm font-semibold">No Nigerian meal found for "{searchQuery}"</p>
            <p className="text-xs mt-1">Try another spelling or use the custom meal adder.</p>
          </div>
        ) : (
          filteredFoods.map((food) => {
            const calculatedKcal = Math.round(food.calories * portionMultiplier);
            const calculatedProtein = Math.round(food.protein * portionMultiplier);
            const calculatedCarbs = Math.round(food.carbs * portionMultiplier);
            const calculatedFat = Math.round(food.fat * portionMultiplier);

            return (
              <div
                key={food.id}
                className="group p-3.5 rounded-2xl border border-[#EBE3D3]/80 dark:border-[#232E47] hover:border-[#C84523]/40 hover:bg-[#F8F4EA]/40 dark:hover:bg-slate-800/40 bg-white dark:bg-[#162035] transition-all flex items-center justify-between shadow-2xs"
              >
                <div className="flex-1 min-w-0 pr-3">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <h4 className="font-bold text-sm text-[#18233C] dark:text-white truncate">{food.name}</h4>
                    <span className="editorial-badge text-[9px] font-black px-1.5 py-0.5 rounded bg-amber-50 dark:bg-amber-950/60 text-[#9E650C] dark:text-amber-300 border border-amber-200/50 dark:border-amber-900/50">
                      {getVisualPortionCue(food.category)}
                    </span>
                  </div>

                  <p className="text-xs text-[#6B6557] dark:text-slate-400 truncate mt-0.5 font-medium">
                    {portionMultiplier === 1 ? food.serving : `${portionMultiplier}x ${food.serving}`}
                  </p>

                  <div className="flex items-center gap-2.5 text-[11px] text-slate-600 dark:text-slate-400 mt-1.5 font-mono">
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold">{calculatedProtein}g P</span>
                    <span>•</span>
                    <span className="text-[#9E650C] dark:text-amber-400 font-bold">{calculatedCarbs}g C</span>
                    <span>•</span>
                    <span className="text-[#C84523] dark:text-rose-400 font-bold">{calculatedFat}g F</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="font-black text-sm text-[#18233C] dark:text-white font-mono">
                    {calculatedKcal} <span className="text-xs font-semibold text-slate-400">kcal</span>
                  </span>

                  <button
                    onClick={() => handleQuickAdd(food)}
                    className="w-8 h-8 rounded-full bg-[#18233C] group-hover:bg-[#C84523] text-white flex items-center justify-center font-bold text-base transition-colors shadow-xs"
                    title={`Add ${food.name} to ${selectedMealType}`}
                  >
                    <Plus className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Embedded Portion Guide Modal */}
      <PortionGuideModal
        isOpen={isPortionGuideOpen}
        onClose={() => setIsPortionGuideOpen(false)}
      />
    </div>
  );
}
