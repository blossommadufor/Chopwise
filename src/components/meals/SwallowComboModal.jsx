import { useState } from "react";
import { X, Sparkles, Check } from "lucide-react";
import { useWellness } from "../../context/WellnessContext";

export default function SwallowComboModal({ isOpen, onClose }) {
  const { addMeal } = useWellness();

  // Presets
  const swallows = [
    { name: "Pounded Yam", calories: 330, protein: 4, carbs: 75, fat: 0 },
    { name: "Eba (Garri)", calories: 310, protein: 3, carbs: 72, fat: 0 },
    { name: "Amala (Dudu)", calories: 300, protein: 3, carbs: 70, fat: 0 },
    { name: "Semovita", calories: 285, protein: 5, carbs: 66, fat: 1 },
    { name: "Fufu (Akpu)", calories: 270, protein: 2, carbs: 64, fat: 0 },
    { name: "Plantain Fufu (Unripe)", calories: 240, protein: 3, carbs: 56, fat: 0 },
  ];

  const soups = [
    { name: "Egusi Soup", calories: 410, protein: 18, carbs: 12, fat: 32 },
    { name: "Ogbono Soup", calories: 380, protein: 16, carbs: 9, fat: 28 },
    { name: "Efo Riro (Spinach)", calories: 280, protein: 20, carbs: 8, fat: 22 },
    { name: "Afang Soup", calories: 330, protein: 20, carbs: 5, fat: 26 },
    { name: "Banga Soup (Ofe Akwu)", calories: 370, protein: 14, carbs: 10, fat: 32 },
    { name: "Okra Soup (Ila)", calories: 220, protein: 15, carbs: 10, fat: 14 },
    { name: "Abula (Ewedu & Gbegiri)", calories: 310, protein: 18, carbs: 24, fat: 12 },
  ];

  const proteins = [
    { name: "Assorted Beef & Shaki", calories: 180, protein: 24, carbs: 1, fat: 8 },
    { name: "Grilled Chicken", calories: 260, protein: 35, carbs: 0, fat: 12 },
    { name: "Fried Titus Fish", calories: 290, protein: 26, carbs: 2, fat: 18 },
    { name: "Fried Chicken", calories: 370, protein: 29, carbs: 6, fat: 25 },
    { name: "Ponmo (Cow skin)", calories: 110, protein: 18, carbs: 0, fat: 3 },
    { name: "No Protein (Soup only)", calories: 0, protein: 0, carbs: 0, fat: 0 },
  ];

  const oilStyles = [
    { label: "Fitfam / Light Oil", calDelta: -70, fatDelta: -8, note: "Reduced palm oil" },
    { label: "Standard Home-Cooked", calDelta: 0, fatDelta: 0, note: "Average prep" },
    { label: "Party / Owanbe Style", calDelta: 130, fatDelta: 14, note: "Rich palm/veg oil" },
  ];

  const [selectedSwallow, setSelectedSwallow] = useState(swallows[0]);
  const [swallowWraps, setSwallowWraps] = useState(1);
  const [selectedSoup, setSelectedSoup] = useState(soups[0]);
  const [selectedProtein, setSelectedProtein] = useState(proteins[0]);
  const [selectedOilStyle, setSelectedOilStyle] = useState(oilStyles[1]);
  const [mealType, setMealType] = useState("Dinner");

  if (!isOpen) return null;

  // Total calculation
  const totalCalories = Math.max(
    100,
    Math.round(
      selectedSwallow.calories * swallowWraps +
        selectedSoup.calories +
        selectedProtein.calories +
        selectedOilStyle.calDelta
    )
  );

  const totalProtein = Math.round(
    selectedSwallow.protein * swallowWraps +
      selectedSoup.protein +
      selectedProtein.protein
  );

  const totalCarbs = Math.round(
    selectedSwallow.carbs * swallowWraps +
      selectedSoup.carbs +
      selectedProtein.carbs
  );

  const totalFat = Math.max(
    2,
    Math.round(
      selectedSwallow.fat * swallowWraps +
        selectedSoup.fat +
        selectedProtein.fat +
        selectedOilStyle.fatDelta
    )
  );

  const handleLogCombo = () => {
    const comboTitle = `${swallowWraps} wrap ${selectedSwallow.name} + ${selectedSoup.name} (${selectedProtein.name !== "No Protein (Soup only)" ? selectedProtein.name : "Plain"})`;

    addMeal({
      name: comboTitle,
      mealType,
      calories: totalCalories,
      protein: totalProtein,
      carbs: totalCarbs,
      fat: totalFat,
      serving: `${swallowWraps} wrap + 1 bowl soup (${selectedOilStyle.label})`,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0B111E]/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#FFFDF9] dark:bg-[#141C2E] rounded-3xl w-full max-w-2xl border border-[#EBE3D3] dark:border-[#232E47] shadow-2xl overflow-hidden my-6 animate-in fade-in zoom-in-95">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#18233C] via-[#1E2B4A] to-[#271B16] text-white p-6 flex items-center justify-between border-b border-[#232E47]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-amber-300">
              <Sparkles className="w-5 h-5 fill-amber-300" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg text-white">1-Tap Swallow Combo Builder</h3>
              <p className="text-xs text-amber-200/80">Swallow + Soup + Protein + Oil Level</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Step 1: Select Swallow */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <label className="text-xs font-bold uppercase tracking-wider text-[#18233C] dark:text-slate-200">
                1. Pick Swallow ({swallowWraps} wrap{swallowWraps > 1 ? "s" : ""})
              </label>
              <div className="flex gap-1 bg-[#F8F4EA] dark:bg-[#0E1524] p-1 rounded-xl text-xs font-bold border border-[#EBE3D3] dark:border-[#232E47]">
                {[1, 1.5, 2].map((w) => (
                  <button
                    key={w}
                    type="button"
                    onClick={() => setSwallowWraps(w)}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      swallowWraps === w
                        ? "bg-[#C84523] text-white shadow-xs font-black"
                        : "text-[#6B6557] dark:text-slate-400 hover:text-[#18233C] dark:hover:text-white"
                    }`}
                  >
                    {w} wrap{w > 1 ? "s" : ""}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {swallows.map((sw) => (
                <button
                  key={sw.name}
                  type="button"
                  onClick={() => setSelectedSwallow(sw)}
                  className={`p-3 rounded-2xl border text-left text-xs transition-all ${
                    selectedSwallow.name === sw.name
                      ? "border-[#C84523] bg-[#C84523]/10 dark:bg-[#C84523]/25 font-bold text-[#C84523] dark:text-amber-400 ring-2 ring-[#C84523]/30"
                      : "border-[#EBE3D3] dark:border-[#232E47] bg-[#FAF7F0]/60 dark:bg-[#0E1524]/60 hover:border-[#D99020] text-[#18233C] dark:text-slate-200"
                  }`}
                >
                  <p className="font-bold">{sw.name}</p>
                  <p className="text-[11px] text-[#8C8372] dark:text-slate-400 mt-0.5">{sw.calories * swallowWraps} kcal</p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Select Soup */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#18233C] dark:text-slate-200 mb-2.5">
              2. Pick Soup (1 Bowl)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {soups.map((sp) => (
                <button
                  key={sp.name}
                  type="button"
                  onClick={() => setSelectedSoup(sp)}
                  className={`p-3 rounded-2xl border text-left text-xs transition-all ${
                    selectedSoup.name === sp.name
                      ? "border-[#C84523] bg-[#C84523]/10 dark:bg-[#C84523]/25 font-bold text-[#C84523] dark:text-amber-400 ring-2 ring-[#C84523]/30"
                      : "border-[#EBE3D3] dark:border-[#232E47] bg-[#FAF7F0]/60 dark:bg-[#0E1524]/60 hover:border-[#D99020] text-[#18233C] dark:text-slate-200"
                  }`}
                >
                  <p className="font-bold">{sp.name}</p>
                  <p className="text-[11px] text-[#8C8372] dark:text-slate-400 mt-0.5">{sp.calories} kcal</p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Select Protein */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#18233C] dark:text-slate-200 mb-2.5">
              3. Pick Protein / Meat
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {proteins.map((pr) => (
                <button
                  key={pr.name}
                  type="button"
                  onClick={() => setSelectedProtein(pr)}
                  className={`p-3 rounded-2xl border text-left text-xs transition-all ${
                    selectedProtein.name === pr.name
                      ? "border-[#C84523] bg-[#C84523]/10 dark:bg-[#C84523]/25 font-bold text-[#C84523] dark:text-amber-400 ring-2 ring-[#C84523]/30"
                      : "border-[#EBE3D3] dark:border-[#232E47] bg-[#FAF7F0]/60 dark:bg-[#0E1524]/60 hover:border-[#D99020] text-[#18233C] dark:text-slate-200"
                  }`}
                >
                  <p className="font-bold truncate">{pr.name}</p>
                  <p className="text-[11px] text-[#8C8372] dark:text-slate-400 mt-0.5">
                    {pr.calories > 0 ? `+${pr.calories} kcal (${pr.protein}g P)` : "None"}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 4: Palm Oil / Cooking Style Slider */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#18233C] dark:text-slate-200 mb-2.5">
              4. Oil & Preparation Style
            </label>
            <div className="grid grid-cols-3 gap-2">
              {oilStyles.map((style) => (
                <button
                  key={style.label}
                  type="button"
                  onClick={() => setSelectedOilStyle(style)}
                  className={`p-3 rounded-2xl border text-center text-xs transition-all ${
                    selectedOilStyle.label === style.label
                      ? "border-[#D99020] bg-amber-500/15 dark:bg-amber-500/25 font-bold text-[#B07212] dark:text-amber-300 ring-2 ring-amber-500/30"
                      : "border-[#EBE3D3] dark:border-[#232E47] bg-[#FAF7F0]/60 dark:bg-[#0E1524]/60 hover:border-[#D99020] text-[#18233C] dark:text-slate-200"
                  }`}
                >
                  <p className="font-bold">{style.label.split(" ")[0]}</p>
                  <p className="text-[10px] text-[#8C8372] dark:text-slate-400 mt-0.5">{style.note}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Live Macro Summary & Confirm Footer */}
        <div className="bg-[#FAF7F0] dark:bg-[#0B111E] border-t border-[#EBE3D3] dark:border-[#232E47] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-[#18233C] dark:text-white font-mono">{totalCalories}</span>
              <span className="text-xs uppercase tracking-wider text-[#8C8372] dark:text-slate-400 font-bold">Total Kcal</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-[#6B6557] dark:text-slate-300 mt-1 font-semibold">
              <span className="text-indigo-600 dark:text-indigo-400">{totalProtein}g Protein</span>
              <span>•</span>
              <span className="text-amber-600 dark:text-amber-400">{totalCarbs}g Carbs</span>
              <span>•</span>
              <span className="text-emerald-600 dark:text-emerald-400">{totalFat}g Fat</span>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <select
              value={mealType}
              onChange={(e) => setMealType(e.target.value)}
              className="px-3 py-2.5 bg-[#FFFDF9] dark:bg-[#141C2E] border border-[#EBE3D3] dark:border-[#232E47] rounded-xl text-xs font-bold text-[#18233C] dark:text-white"
            >
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Breakfast">Breakfast</option>
            </select>

            <button
              onClick={handleLogCombo}
              className="flex-1 sm:flex-none px-6 py-2.5 bg-[#C84523] hover:bg-[#B33B1D] text-white rounded-xl text-sm font-bold shadow-md shadow-[#C84523]/30 active:scale-98 transition-all flex items-center justify-center gap-2"
            >
              <Check className="w-4 h-4 stroke-[3]" />
              <span>Log Meal Combo</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

