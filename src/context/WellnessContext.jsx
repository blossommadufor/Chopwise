import { createContext, useContext, useMemo, useState, useEffect } from "react";
import { usePersistedState } from "../hooks/usePersistedState";

const WellnessContext = createContext(null);

const DEFAULT_MEALS = [
  {
    id: "demo-1",
    name: "Party Jollof Rice",
    mealType: "Lunch",
    calories: 520,
    protein: 11,
    carbs: 86,
    fat: 14,
    serving: "1 full plate (~300g)",
    timestamp: 1716000000000,
  },
  {
    id: "demo-2",
    name: "Grilled Chicken (Quarter)",
    mealType: "Lunch",
    calories: 260,
    protein: 35,
    carbs: 0,
    fat: 12,
    serving: "1 quarter leg",
    timestamp: 1716000000000,
  },
];

export function WellnessProvider({ children }) {
  // --- Theme State (Light / Dark) ---
  const [theme, setTheme] = usePersistedState("chopwise_theme_v1", "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // --- Persistent Health & Nutrition States ---
  const [meals, setMeals] = usePersistedState("chopwise_meals_v1", DEFAULT_MEALS);
  const [dailyTarget, setDailyTarget] = usePersistedState("chopwise_target_v1", 2000);
  const [waterGlasses, setWaterGlasses] = usePersistedState("chopwise_water_v1", 4);
  const waterGoal = 8; // 8 x 250ml = 2000ml

  const [steps, setSteps] = usePersistedState("chopwise_steps_v1", 3420);
  const [stepGoal, setStepGoal] = usePersistedState("chopwise_step_goal_v1", 10000);

  const [streak, setStreak] = usePersistedState("chopwise_streak_v1", 4);

  const [userProfile, setUserProfile] = usePersistedState("chopwise_profile_v1", {
    age: 26,
    gender: "female",
    weight: 68, // kg
    heightInches: 65, // inches (approx 5ft 5in / 165cm)
    activity: "moderate",
    goal: "weight_loss",
    calculatedTdee: 2050,
    recommendedDailySteps: 10000,
  });

  // --- Temporary Toast State ---
  const [toast, setToast] = useState({ show: false, message: "", type: "success" });

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message, type: "success" });
    }, 3200);
  };

  // --- Actions ---
  const addMeal = (mealData) => {
    const newMeal = {
      id: `${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      name: mealData.name,
      mealType: mealData.mealType || "Lunch",
      calories: Number(mealData.calories) || 0,
      protein: Number(mealData.protein) || 0,
      carbs: Number(mealData.carbs) || 0,
      fat: Number(mealData.fat) || 0,
      serving: mealData.serving || "1 serving",
      timestamp: Date.now(),
    };

    setMeals((prev) => [newMeal, ...prev]);
    showToast(`Added "${newMeal.name}" (${newMeal.calories} kcal)`);
  };

  const removeMeal = (mealId) => {
    setMeals((prev) => prev.filter((m) => m.id !== mealId));
    showToast("Meal removed from your log", "info");
  };

  const clearTodayMeals = () => {
    setMeals([]);
    showToast("Today's meal log cleared", "info");
  };

  const updateDailyTarget = (kcal) => {
    const val = Math.max(800, Math.min(6000, Number(kcal)));
    setDailyTarget(val);
    showToast(`Daily target set to ${val} kcal`);
  };

  const updateStepGoal = (targetSteps) => {
    const val = Math.max(2000, Math.min(35000, Number(targetSteps)));
    setStepGoal(val);
    showToast(`Daily step target set to ${val.toLocaleString()} steps 👣`);
  };

  const addWaterGlass = (count = 1) => {
    setWaterGlasses((prev) => Math.min(24, prev + count));
    showToast(`+${count} glass of water logged! 💧`);
  };

  const removeWaterGlass = () => {
    setWaterGlasses((prev) => Math.max(0, prev - 1));
  };

  const resetWater = () => {
    setWaterGlasses(0);
    showToast("Water tracker reset for today");
  };

  const addManualSteps = (amount = 500) => {
    setSteps((prev) => prev + amount);
    showToast(`Added +${amount.toLocaleString()} steps! 👣`);
  };

  const saveUserProfile = (profile) => {
    setUserProfile(profile);
    if (profile.calculatedTarget) {
      setDailyTarget(profile.calculatedTarget);
    }
    if (profile.recommendedDailySteps) {
      setStepGoal(profile.recommendedDailySteps);
    }
    showToast("Profile & fitness goals updated!");
  };

  // --- Computed Stats ---
  const stats = useMemo(() => {
    const consumedCalories = meals.reduce((sum, m) => sum + (Number(m.calories) || 0), 0);
    const consumedProtein = meals.reduce((sum, m) => sum + (Number(m.protein) || 0), 0);
    const consumedCarbs = meals.reduce((sum, m) => sum + (Number(m.carbs) || 0), 0);
    const consumedFat = meals.reduce((sum, m) => sum + (Number(m.fat) || 0), 0);

    const remainingCalories = Math.max(0, dailyTarget - consumedCalories);
    const percentage = Math.min(150, Math.round((consumedCalories / dailyTarget) * 100));

    // Target macros (25% protein, 50% carbs, 25% fat)
    const targetProteinGrams = Math.round((dailyTarget * 0.25) / 4);
    const targetCarbsGrams = Math.round((dailyTarget * 0.5) / 4);
    const targetFatGrams = Math.round((dailyTarget * 0.25) / 9);

    return {
      consumedCalories,
      consumedProtein,
      consumedCarbs,
      consumedFat,
      remainingCalories,
      percentage,
      isOver: consumedCalories > dailyTarget,
      targetProteinGrams,
      targetCarbsGrams,
      targetFatGrams,
    };
  }, [meals, dailyTarget]);

  return (
    <WellnessContext.Provider
      value={{
        theme,
        toggleTheme,
        meals,
        dailyTarget,
        waterGlasses,
        waterGoal,
        steps,
        stepGoal,
        streak,
        setStreak,
        userProfile,
        toast,
        stats,
        // Actions
        addMeal,
        removeMeal,
        clearTodayMeals,
        updateDailyTarget,
        updateStepGoal,
        addWaterGlass,
        removeWaterGlass,
        resetWater,
        addManualSteps,
        setSteps,
        saveUserProfile,
        showToast,
      }}
    >
      {children}
    </WellnessContext.Provider>
  );
}

export function useWellness() {
  const context = useContext(WellnessContext);
  if (!context) {
    throw new Error("useWellness must be used within a WellnessProvider");
  }
  return context;
}
