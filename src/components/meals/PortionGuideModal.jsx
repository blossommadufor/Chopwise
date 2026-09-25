import { useState } from "react";
import { X, Eye, Info } from "lucide-react";

export default function PortionGuideModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("all");

  if (!isOpen) return null;

  const portionGuides = [
    {
      category: "swallows",
      title: "1 Standard Swallow Wrap (~200-220g)",
      visualCue: "✊ Size of a Clenched Adult Fist",
      exampleDishes: "Pounded Yam (330 kcal), Eba (310 kcal), Amala (300 kcal), Semo (285 kcal)",
      macroProfile: "High Carbs (65-75g) • Minimal Fat (0-1g) • Low Protein (3-5g)",
      visualNote: "A standard party or canteen wrap fits snugly inside a clenched fist. If the wrap overflows your hand completely, count it as 1.5x or 2x wraps.",
      badge: "Swallow Baseline",
      accent: "border-amber-500/30 bg-amber-50/50 dark:bg-amber-950/20 text-amber-900 dark:text-amber-200",
    },
    {
      category: "soups",
      title: "1 Medium Soup Bowl (~200ml / 2 Ladles)",
      visualCue: "🥣 Two Hands Cupped Together",
      exampleDishes: "Egusi (410 kcal), Ogbono (380 kcal), Efo Riro (280 kcal), Afang (330 kcal)",
      macroProfile: "High Fat (22-32g) • Moderate Protein (16-20g) • Low Carbs (8-12g)",
      visualNote: "Look at the surface of the soup: A light golden sheen is standard (~20-25g fat). A visible puddle of red palm oil indicates Owanbe/Party preparation (+130 kcal).",
      badge: "Soup & Oil Gauge",
      accent: "border-rose-500/30 bg-rose-50/50 dark:bg-rose-950/20 text-rose-900 dark:text-rose-200",
    },
    {
      category: "proteins",
      title: "1 Standard Protein Serving (~100-130g)",
      visualCue: "✋ Size of Your Open Palm (Fingers Excluded)",
      exampleDishes: "Grilled Chicken Quarter (260 kcal), Fried Titus (290 kcal), Suya Skewer (290 kcal)",
      macroProfile: "High Protein (25-35g) • Moderate Fat (10-18g) • Zero Carbs (0g)",
      visualNote: "One open palm equals a chicken thigh, a fish cutlet, or 3-4 chunks of assorted meat/shaki. Fried coatings add 80-110 kcal of vegetable oil.",
      badge: "Protein Standard",
      accent: "border-indigo-500/30 bg-indigo-50/50 dark:bg-indigo-950/20 text-indigo-900 dark:text-indigo-200",
    },
    {
      category: "grains",
      title: "1 Full Plate of Rice (~300g)",
      visualCue: "🍽️ Two Standard Serving Spoons (Dome Mound)",
      exampleDishes: "Party Jollof (520 kcal), Nigerian Fried Rice (480 kcal), White Rice (340 kcal)",
      macroProfile: "High Carbs (75-86g) • Moderate Fat (12-16g) • Low Protein (8-12g)",
      visualNote: "A standard flat dinner plate with a mound about 2 inches high. If piled high to the brim, track as 1.5x plate (~750 kcal).",
      badge: "Rice Standard",
      accent: "border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-950/20 text-emerald-900 dark:text-emerald-200",
    },
    {
      category: "snacks",
      title: "Snacks & Sides Quick Guide",
      visualCue: "🤏 1 Handful / Slices",
      exampleDishes: "Dodo (6 slices = 260 kcal), Akara (3 balls = 210 kcal), Puff Puff (4 balls = 280 kcal)",
      macroProfile: "Carb & Oil dense from frying • Best tracked by piece count",
      visualNote: "Fried plantain (Dodo) absorbs oil quickly: 5-6 medium diagonal slices equal 1 serving (~260 kcal).",
      badge: "Snacks Gauge",
      accent: "border-amber-600/30 bg-amber-50/50 dark:bg-amber-950/20 text-amber-950 dark:text-amber-100",
    },
  ];

  const filtered = activeTab === "all" ? portionGuides : portionGuides.filter((g) => g.category === activeTab);

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#FFFDF9] dark:bg-[#141C2E] rounded-3xl w-full max-w-3xl border border-[#EBE3D3] dark:border-[#232E47] shadow-2xl overflow-hidden my-6 animate-in fade-in zoom-in-95">
        {/* Header */}
        <div className="bg-[#18233C] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-lg">Visual Portion Size Guide</h3>
                <span className="editorial-badge text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">
                  Naija Hand Metric
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                Know exactly what 1 wrap, 1 bowl, or 1 plate looks like before logging
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Filters */}
        <div className="p-6 border-b border-[#EBE3D3] dark:border-[#232E47] flex items-center gap-2 overflow-x-auto scrollbar-none">
          {[
            { id: "all", label: "All Guides" },
            { id: "swallows", label: "Swallows & Wraps" },
            { id: "soups", label: "Soups & Oils" },
            { id: "proteins", label: "Proteins & Meats" },
            { id: "grains", label: "Rice & Grains" },
            { id: "snacks", label: "Snacks & Sides" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? "bg-[#C84523] text-white shadow-sm"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Portion Cards Grid */}
        <div className="p-6 space-y-4 max-h-[65vh] overflow-y-auto">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl border ${item.accent} transition-all space-y-3`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <span className="editorial-badge text-[10px] font-black tracking-wider uppercase opacity-70">
                    {item.badge}
                  </span>
                  <h4 className="text-base font-black mt-0.5">{item.title}</h4>
                </div>
                <div className="px-3 py-1 rounded-xl bg-white/80 dark:bg-black/40 border border-current/20 text-xs font-black shrink-0">
                  {item.visualCue}
                </div>
              </div>

              <p className="text-xs opacity-90 leading-relaxed font-medium">
                {item.visualNote}
              </p>

              <div className="pt-2 border-t border-current/15 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div className="font-semibold opacity-85">
                  <span className="font-bold">Examples:</span> {item.exampleDishes}
                </div>
                <div className="font-mono text-[11px] font-bold opacity-75 shrink-0">
                  {item.macroProfile}
                </div>
              </div>
            </div>
          ))}

          {/* Golden Rule Tip */}
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-200 text-xs flex items-start gap-2.5">
            <Info className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Quick Rule of Thumb:</strong> When in doubt at a party or restaurant, start with 1 standard portion (1 wrap + 1 bowl soup + 1 protein). If your plate is visibly overflowing, toggle the <strong>1.5x</strong> or <strong>2x</strong> portion multiplier in the search bar.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F8F4EA] dark:bg-[#0D1322] border-t border-[#EBE3D3] dark:border-[#232E47] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#18233C] hover:bg-[#233152] text-white rounded-xl text-xs font-bold transition-all"
          >
            Got it, Back to Logging
          </button>
        </div>
      </div>
    </div>
  );
}
