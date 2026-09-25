import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { WellnessProvider } from "./context/WellnessContext";
import AppLayout from "./layouts/AppLayout";
import DashboardPage from "./pages/DashboardPage";
import MealLoggerPage from "./pages/MealLoggerPage";
import CalculatorPage from "./pages/CalculatorPage";

export default function App() {
  return (
    <WellnessProvider>
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="dashboard" element={<Navigate to="/" replace />} />
            <Route path="log-meals" element={<MealLoggerPage />} />
            <Route path="calculator" element={<CalculatorPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Router>
    </WellnessProvider>
  );
}
