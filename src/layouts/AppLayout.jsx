import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";
import Header from "../components/common/Header";
import MobileNav from "../components/common/MobileNav";
import Toast from "../components/common/Toast";

export default function AppLayout() {
  return (
    <div className="min-h-screen flex bg-[#F8F4EA] dark:bg-[#0B111E] text-[#18233C] dark:text-[#F8F4EA] font-sans antialiased adire-pattern transition-colors">
      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 pb-20 md:pb-8">
        <Header />

        <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 md:p-8">
          <Outlet />
        </main>

        <Toast />
      </div>

      {/* Mobile Bottom Navigation */}
      <MobileNav />
    </div>
  );
}
