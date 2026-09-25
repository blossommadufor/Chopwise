import { useState } from "react";
import FoodSearch from "../components/meals/FoodSearch";
import MealLogList from "../components/meals/MealLogList";
import SwallowComboModal from "../components/meals/SwallowComboModal";
import AiFoodScanner from "../components/meals/AiFoodScanner";
import CustomFoodModal from "../components/meals/CustomFoodModal";

export default function MealLoggerPage() {
  const [isComboOpen, setIsComboOpen] = useState(false);
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [isCustomOpen, setIsCustomOpen] = useState(false);

  return (
    <div className="space-y-8">
      {/* Food Search & Quick Modals */}
      <FoodSearch
        onOpenComboBuilder={() => setIsComboOpen(true)}
        onOpenAiScanner={() => setIsAiOpen(true)}
        onOpenCustomModal={() => setIsCustomOpen(true)}
      />

      {/* Today's Log List */}
      <MealLogList />

      {/* Modals */}
      <SwallowComboModal
        isOpen={isComboOpen}
        onClose={() => setIsComboOpen(false)}
      />

      <AiFoodScanner
        isOpen={isAiOpen}
        onClose={() => setIsAiOpen(false)}
      />

      <CustomFoodModal
        isOpen={isCustomOpen}
        onClose={() => setIsCustomOpen(false)}
      />
    </div>
  );
}

