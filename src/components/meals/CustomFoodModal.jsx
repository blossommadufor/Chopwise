import { useState } from "react";
import { X, Check } from "lucide-react";
import { useWellness } from "../../context/WellnessContext";

export default function CustomFoodModal({ isOpen, onClose }) {
  const { addMeal } = useWellness();

  const [name, setName] = useState("");
  const [mealType, setMealType] = useState("Lunch");
  const [serving, setServing] = useState("1 serving");
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [carbs, setCarbs] = useState("");
  const [fat, setFat] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !calories) return;

    addMeal({
      name: name.trim(),
      mealType,
      serving: serving.trim() || "1 serving",
      calories: Number(calories) || 0,
      protein: Number(protein) || 0,
      carbs: Number(carbs) || 0,
      fat: Number(fat) || 0,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0B111E]/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#FFFDF9] dark:bg-[#141C2E] rounded-3xl w-full max-w-md border border-[#EBE3D3] dark:border-[#232E47] shadow-2xl overflow-hidden my-6 animate-in fade-in zoom-in-95">
        <div className="bg-gradient-to-r from-[#18233C] via-[#1E2B4A] to-[#271B16] text-white p-5 flex items-center justify-between border-b border-[#232E47]">
          <h3 className="font-extrabold text-base text-white">Add Custom Food</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-[#18233C] dark:text-slate-200 uppercase tracking-wider mb-1.5">
              Food / Dish Name *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Asun Rice, Custom Ofe Owerri"
              className="w-full px-3.5 py-2.5 bg-[#FAF7F0] dark:bg-[#0E1524] border border-[#EBE3D3] dark:border-[#232E47] text-[#18233C] dark:text-white rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C84523]/30"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#18233C] dark:text-slate-200 uppercase tracking-wider mb-1.5">
                Meal Category
              </label>
              <select
                value={mealType}
                onChange={(e) => setMealType(e.target.value)}
                className="w-full px-3 py-2.5 bg-[#FAF7F0] dark:bg-[#0E1524] border border-[#EBE3D3] dark:border-[#232E47] rounded-xl text-xs font-bold text-[#18233C] dark:text-white"
              >
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Snacks">Snacks</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#18233C] dark:text-slate-200 uppercase tracking-wider mb-1.5">
                Serving Size
              </label>
              <input
                type="text"
                value={serving}
                onChange={(e) => setServing(e.target.value)}
                placeholder="e.g. 1 plate, 2 pieces"
                className="w-full px-3.5 py-2.5 bg-[#FAF7F0] dark:bg-[#0E1524] border border-[#EBE3D3] dark:border-[#232E47] text-[#18233C] dark:text-white rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C84523]/30"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#18233C] dark:text-slate-200 uppercase tracking-wider mb-1.5">
                Calories (kcal) *
              </label>
              <input
                type="number"
                required
                min="0"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                placeholder="e.g. 450"
                className="w-full px-3.5 py-2.5 bg-[#FAF7F0] dark:bg-[#0E1524] border border-[#EBE3D3] dark:border-[#232E47] text-[#18233C] dark:text-white rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C84523]/30 font-bold"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#18233C] dark:text-slate-200 uppercase tracking-wider mb-1.5">
                Protein (g)
              </label>
              <input
                type="number"
                min="0"
                value={protein}
                onChange={(e) => setProtein(e.target.value)}
                placeholder="e.g. 25"
                className="w-full px-3.5 py-2.5 bg-[#FAF7F0] dark:bg-[#0E1524] border border-[#EBE3D3] dark:border-[#232E47] text-[#18233C] dark:text-white rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C84523]/30"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#18233C] dark:text-slate-200 uppercase tracking-wider mb-1.5">
                Carbs (g)
              </label>
              <input
                type="number"
                min="0"
                value={carbs}
                onChange={(e) => setCarbs(e.target.value)}
                placeholder="e.g. 60"
                className="w-full px-3.5 py-2.5 bg-[#FAF7F0] dark:bg-[#0E1524] border border-[#EBE3D3] dark:border-[#232E47] text-[#18233C] dark:text-white rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C84523]/30"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#18233C] dark:text-slate-200 uppercase tracking-wider mb-1.5">
                Fat (g)
              </label>
              <input
                type="number"
                min="0"
                value={fat}
                onChange={(e) => setFat(e.target.value)}
                placeholder="e.g. 14"
                className="w-full px-3.5 py-2.5 bg-[#FAF7F0] dark:bg-[#0E1524] border border-[#EBE3D3] dark:border-[#232E47] text-[#18233C] dark:text-white rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C84523]/30"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 bg-[#C84523] hover:bg-[#B33B1D] text-white rounded-xl text-sm font-bold shadow-md shadow-[#C84523]/30 flex items-center justify-center gap-2 active:scale-98 transition-all"
            >
              <Check className="w-4 h-4 stroke-[3]" />
              <span>Add Custom Meal</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

