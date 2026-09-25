import CalorieCalculator from "../components/calculator/CalorieCalculator";
import BodyMetrics from "../components/calculator/BodyMetrics";

export default function CalculatorPage() {
  return (
    <div className="space-y-8">
      <CalorieCalculator />
      <BodyMetrics />
    </div>
  );
}

