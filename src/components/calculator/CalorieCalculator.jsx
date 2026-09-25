import { useState } from "react";
import { Calculator, Check, Footprints } from "lucide-react";
import { useWellness } from "../../context/WellnessContext";

export default function CalorieCalculator() {
  const { userProfile, updateDailyTarget, updateStepGoal, saveUserProfile } = useWellness();

  const [gender, setGender] = useState(userProfile.gender || "female");
  const [age, setAge] = useState(userProfile.age || 26);
  const [weightKg, setWeightKg] = useState(userProfile.weight || 68);
  const [heightInches, setHeightInches] = useState(userProfile.heightInches || 65); // 65 in = 5'5"
  const [activity, setActivity] = useState(userProfile.activity || "moderate");
  const [goal, setGoal] = useState(userProfile.goal || "weight_loss");

  // Activity multipliers for TDEE
  const activityFactors = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
  };

  // Convert height in inches to cm for the formula: 1 inch = 2.54 cm
  const heightCm = heightInches * 2.54;

  // Mifflin-St Jeor formula
  const bmr =
    gender === "male"
      ? 10 * weightKg + 6.25 * heightCm - 5 * age + 5
      : 10 * weightKg + 6.25 * heightCm - 5 * age - 161;

  const tdee = Math.round(bmr * (activityFactors[activity] || 1.375));

  let goalDelta = 0;
  if (goal === "weight_loss") goalDelta = -500;
  if (goal === "mild_loss") goalDelta = -250;
  if (goal === "gain_muscle") goalDelta = 350;

  const calculatedDailyTarget = Math.max(1200, Math.round(tdee + goalDelta));

  // Recommended Daily Steps calculation
  let recommendedSteps = 10000;
  if (activity === "sedentary") {
    recommendedSteps = goal === "weight_loss" ? 8000 : 6500;
  } else if (activity === "light") {
    recommendedSteps = goal === "weight_loss" ? 10000 : 8500;
  } else if (activity === "moderate") {
    recommendedSteps = goal === "weight_loss" ? 12000 : 10000;
  } else if (activity === "active") {
    recommendedSteps = goal === "weight_loss" ? 14000 : 12500;
  }

  // Target Macros
  const proteinGrams = Math.round((calculatedDailyTarget * 0.25) / 4);
  const carbsGrams = Math.round((calculatedDailyTarget * 0.5) / 4);
  const fatGrams = Math.round((calculatedDailyTarget * 0.25) / 9);

  const handleApplyAll = () => {
    saveUserProfile({
      gender,
      age: Number(age),
      weight: Number(weightKg),
      heightInches: Number(heightInches),
      activity,
      goal,
      calculatedTdee: tdee,
      calculatedTarget: calculatedDailyTarget,
      recommendedDailySteps: recommendedSteps,
    });
    updateDailyTarget(calculatedDailyTarget);
    updateStepGoal(recommendedSteps);
  };

  const feet = Math.floor(heightInches / 12);
  const remainingInches = heightInches % 12;

  return (
    <div className="bg-[#FFFDF9] dark:bg-[#141C2E] rounded-3xl p-6 sm:p-8 border border-[#EBE3D3] dark:border-[#232E47] shadow-sm space-y-6 transition-colors">
      <div className="flex items-center gap-3 pb-4 border-b border-[#EBE3D3]/60 dark:border-slate-800">
        <div className="w-10 h-10 rounded-2xl bg-[#C84523]/10 dark:bg-[#E25B37]/20 text-[#C84523] dark:text-[#E25B37] flex items-center justify-center font-bold">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-lg font-black text-[#18233C] dark:text-white">
            Calorie, Macro & Step Target Engine
          </h2>
          <p className="text-xs text-[#6B6557] dark:text-slate-400">
            Personalized energy & activity recommendations tailored to your goals
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Inputs */}
        <div className="space-y-4">
          {/* Gender */}
          <div>
            <label className="block text-xs font-bold text-[#18233C] dark:text-slate-300 uppercase tracking-wider mb-2">
              Gender
            </label>
            <div className="grid grid-cols-2 gap-2">
              {["female", "male"].map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setGender(g)}
                  className={`py-2.5 px-4 rounded-xl border text-xs font-bold capitalize transition-all ${
                    gender === g
                      ? "border-[#C84523] bg-[#C84523]/10 dark:bg-[#E25B37]/20 text-[#C84523] dark:text-amber-300 font-black ring-2 ring-[#C84523]/20"
                      : "border-[#EBE3D3] dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-slate-400"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          {/* Age, Weight (kg), Height (inches) */}
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#18233C] dark:text-slate-300 uppercase tracking-wider mb-1.5">
                Age
              </label>
              <input
                type="number"
                min="14"
                max="100"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full px-3 py-2.5 bg-[#F8F4EA]/60 dark:bg-slate-800 border border-[#EBE3D3] dark:border-slate-700 rounded-xl text-sm font-bold text-[#18233C] dark:text-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#18233C] dark:text-slate-300 uppercase tracking-wider mb-1.5">
                Weight (kg)
              </label>
              <input
                type="number"
                min="30"
                max="250"
                value={weightKg}
                onChange={(e) => setWeightKg(Number(e.target.value))}
                className="w-full px-3 py-2.5 bg-[#F8F4EA]/60 dark:bg-slate-800 border border-[#EBE3D3] dark:border-slate-700 rounded-xl text-sm font-bold text-[#18233C] dark:text-white focus:outline-none"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold text-[#18233C] dark:text-slate-300 uppercase tracking-wider">
                  Height (in)
                </label>
                <span className="text-[10px] text-slate-400 font-bold">
                  {feet}'{remainingInches}"
                </span>
              </div>
              <input
                type="number"
                min="48"
                max="90"
                value={heightInches}
                onChange={(e) => setHeightInches(Number(e.target.value))}
                placeholder="65 in"
                className="w-full px-3 py-2.5 bg-[#F8F4EA]/60 dark:bg-slate-800 border border-[#EBE3D3] dark:border-slate-700 rounded-xl text-sm font-bold text-[#18233C] dark:text-white focus:outline-none"
              />
            </div>
          </div>

          {/* Activity Level */}
          <div>
            <label className="block text-xs font-bold text-[#18233C] dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Current Lifestyle & Activity
            </label>
            <select
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-[#F8F4EA]/60 dark:bg-slate-800 border border-[#EBE3D3] dark:border-slate-700 rounded-xl text-xs font-bold text-[#18233C] dark:text-white focus:outline-none"
            >
              <option value="sedentary">Sedentary (Desk job, minimal walking)</option>
              <option value="light">Lightly Active (1-3 workout sessions / some walking)</option>
              <option value="moderate">Moderately Active (Gym/sports 3-5 days/week)</option>
              <option value="active">Very Active (Daily training / manual active work)</option>
            </select>
          </div>

          {/* Fitness Goal */}
          <div>
            <label className="block text-xs font-bold text-[#18233C] dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Target Nutrition Goal
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: "weight_loss", label: "Fat Loss (-500 kcal)" },
                { id: "mild_loss", label: "Mild Deficit (-250 kcal)" },
                { id: "maintain", label: "Maintenance (0 kcal)" },
                { id: "gain_muscle", label: "Muscle Gain (+350 kcal)" },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setGoal(item.id)}
                  className={`py-2 px-3 rounded-xl border text-xs text-left transition-all ${
                    goal === item.id
                      ? "border-[#C84523] bg-[#C84523]/10 dark:bg-[#E25B37]/20 text-[#C84523] dark:text-amber-300 font-black ring-2 ring-[#C84523]/20"
                      : "border-[#EBE3D3] dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-slate-400"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Output Recommendations Card */}
        <div className="bg-[#18233C] text-white rounded-3xl p-6 sm:p-7 border border-[#273350] shadow-xl flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="editorial-badge text-xs uppercase font-bold text-amber-300 tracking-wider">
                Personalized Blueprint
              </span>
              <span className="text-xs text-slate-400">BMR: {Math.round(bmr)} kcal</span>
            </div>

            {/* Calorie Box */}
            <div className="text-center py-4 bg-white/5 rounded-2xl border border-white/10 mb-4">
              <p className="editorial-badge text-[11px] text-slate-400 uppercase font-bold">
                Daily Calorie Target
              </p>
              <div className="text-4xl sm:text-5xl font-black text-white mt-1 font-mono">
                {calculatedDailyTarget}{" "}
                <span className="text-base font-bold text-[#E25B37]">kcal/day</span>
              </div>
            </div>

            {/* Recommended Steps Feature */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                  <Footprints className="w-5 h-5" />
                </div>
                <div>
                  <span className="editorial-badge text-[10px] text-amber-300 uppercase font-black">
                    Recommended Daily Steps
                  </span>
                  <div className="text-2xl font-black text-white font-mono">
                    {recommendedSteps.toLocaleString()} <span className="text-xs text-amber-300 font-bold">steps</span>
                  </div>
                </div>
              </div>

              <span className="text-xs text-slate-300 max-w-[120px] text-right font-medium">
                Optimized for {goal.replace("_", " ")}
              </span>
            </div>

            {/* Target Macro Splits */}
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                <span className="text-[11px] text-slate-400 block font-medium">Protein (25%)</span>
                <span className="text-base font-bold text-indigo-300 font-mono">{proteinGrams}g</span>
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                <span className="text-[11px] text-slate-400 block font-medium">Carbs (50%)</span>
                <span className="text-base font-bold text-amber-300 font-mono">{carbsGrams}g</span>
              </div>
              <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                <span className="text-[11px] text-slate-400 block font-medium">Fats (25%)</span>
                <span className="text-base font-bold text-emerald-300 font-mono">{fatGrams}g</span>
              </div>
            </div>
          </div>

          {/* Sync Button */}
          <button
            onClick={handleApplyAll}
            className="w-full py-3.5 bg-[#C84523] hover:bg-[#B33919] text-white font-black rounded-2xl text-sm shadow-lg shadow-[#C84523]/30 active:scale-98 transition-all flex items-center justify-center gap-2"
          >
            <Check className="w-4 h-4 stroke-[3]" />
            <span>Apply Calories & Step Goal to App</span>
          </button>
        </div>
      </div>
    </div>
  );
}
