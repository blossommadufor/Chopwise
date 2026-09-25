export default function App() {
  const dashboardCards = [
    {
      title: "Calories Left",
      value: "420",
      subtitle: "1,580 / 2,000 kcal",
      icon: "🔥",
    },
    {
      title: "Protein Goal",
      value: "72g",
      subtitle: "18g remaining",
      icon: "💪",
    },
    {
      title: "Water Intake",
      value: "2.1L",
      subtitle: "Daily hydration progress",
      icon: "💧",
    },
    {
      title: "Current Streak",
      value: "9 Days",
      subtitle: "You’re consistent 🔥",
      icon: "⚡",
    },
  ];

  const foods = [
    {
      name: "Party Jollof Rice",
      calories: "520 kcal",
      serving: "1 Plate",
      tag: "Popular",
    },
    {
      name: "Egusi + Pounded Yam",
      calories: "740 kcal",
      serving: "1 Bowl + 2 wraps",
      tag: "Swallow",
    },
    {
      name: "Akara & Pap",
      calories: "390 kcal",
      serving: "4 balls",
      tag: "Breakfast",
    },
    {
      name: "Chicken Suya",
      calories: "310 kcal",
      serving: "1 Stick",
      tag: "Street Food",
    },
  ];

  const features = [
    {
      title: "Localized Portions",
      description:
        "Track food using familiar Nigerian measurements like wraps, bowls, sachets, spoons, and plates.",
    },
    {
      title: "Fast Meal Logging",
      description:
        "Reduce friction with recent meals, favorites, quick-add logging, and smart suggestions.",
    },
    {
      title: "Habit Building",
      description:
        "Daily streaks, progress celebrations, and lightweight reminders designed to encourage consistency.",
    },
    {
      title: "African Food Intelligence",
      description:
        "A nutrition system built around Nigerian meals instead of forcing Western food assumptions.",
    },
  ];

  const roadmap = [
    "AI food image recognition",
    "Voice meal logging",
    "Barcode scanning",
    "Restaurant calorie partnerships",
    "AI nutrition coach",
    "Budget meal planning",
    "Gym integrations",
    "Community recipes",
  ];

  const databaseSchema = `{
  id: uuid,
  name: string,
  category: string,
  region: string,
  serving_type: string,
  calories: number,
  protein: number,
  carbs: number,
  fat: number,
  preparation_style: string,
  verified: boolean,
  image_url: string,
  aliases: [],
  created_at: timestamp
}`;

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="px-6 md:px-16 py-10 md:py-16 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/20 px-4 py-2 rounded-full text-orange-300 text-sm">
              🇳🇬 Built for Nigerian & African meals
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              ChopWise
            </h1>

            <p className="text-2xl md:text-3xl font-semibold text-orange-300 leading-snug">
              The easiest calorie tracker for Nigerian and African meals.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              ChopWise removes the frustration of calorie tracking for African
              users by supporting local meals, familiar serving sizes, and a
              modern mobile-first experience that feels lightweight, fast, and
              emotionally rewarding.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button className="bg-orange-500 hover:bg-orange-400 transition-all duration-300 px-6 py-4 rounded-2xl font-semibold text-lg shadow-2xl shadow-orange-500/20">
                Start Tracking
              </button>

              <button className="border border-gray-700 hover:border-gray-500 transition-all duration-300 px-6 py-4 rounded-2xl font-semibold text-lg bg-white/5 backdrop-blur-sm">
                Explore Features
              </button>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4">
                <p className="text-3xl font-bold">1 Tap</p>
                <p className="text-gray-400 text-sm">Fast food logging</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4">
                <p className="text-3xl font-bold">1000+</p>
                <p className="text-gray-400 text-sm">African food entries</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4">
                <p className="text-3xl font-bold">Gen Z</p>
                <p className="text-gray-400 text-sm">Friendly UX design</p>
              </div>
            </div>
          </div>

          {/* APP PREVIEW */}
          <div className="relative">
            <div className="absolute inset-0 bg-orange-500 blur-3xl opacity-20 rounded-full"></div>

            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-gray-400 text-sm">Good evening 👋</p>
                  <h2 className="text-2xl font-bold">Ada</h2>
                </div>

                <div className="bg-orange-500 text-black font-bold w-12 h-12 rounded-2xl flex items-center justify-center">
                  CW
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {dashboardCards.map((card, index) => (
                  <div
                    key={index}
                    className="bg-[#111827] border border-white/5 rounded-3xl p-5"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl">{card.icon}</span>
                      <div className="w-10 h-10 rounded-full border-4 border-orange-400"></div>
                    </div>

                    <h3 className="text-gray-400 text-sm">{card.title}</h3>
                    <p className="text-2xl font-bold mt-2">{card.value}</p>
                    <p className="text-gray-500 text-xs mt-1">
                      {card.subtitle}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-[#111827] rounded-3xl p-5 border border-white/5">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-xl font-bold">Today’s Meals</h3>
                  <button className="text-orange-300 text-sm">
                    Quick Add +
                  </button>
                </div>

                <div className="space-y-4">
                  {foods.map((food, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-white/5 rounded-2xl p-4"
                    >
                      <div>
                        <h4 className="font-semibold">{food.name}</h4>
                        <p className="text-gray-400 text-sm">
                          {food.serving}
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="font-bold">{food.calories}</p>
                        <span className="text-xs bg-orange-500/20 text-orange-300 px-2 py-1 rounded-full">
                          {food.tag}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT STRATEGY */}
      <section className="px-6 md:px-16 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-orange-300 font-semibold uppercase tracking-widest mb-3">
              Product Strategy
            </p>

            <h2 className="text-4xl md:text-5xl font-black mb-6 max-w-4xl leading-tight">
              Designed around African eating habits instead of forcing Western
              nutrition systems.
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">
              ChopWise wins because it feels culturally intelligent. Existing
              calorie apps fail Nigerian users by ignoring local foods,
              unrealistic portions, and regional eating behaviors. ChopWise
              focuses on reducing friction, increasing familiarity, and making
              healthy tracking feel emotionally rewarding.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-[28px] p-7 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-orange-500/20 rounded-2xl mb-6 flex items-center justify-center text-2xl">
                  ✨
                </div>

                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>

                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USER EXPERIENCE */}
      <section className="px-6 md:px-16 py-20 bg-[#111827]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-orange-300 font-semibold uppercase tracking-widest mb-3">
              User Experience Recommendations
            </p>

            <h2 className="text-4xl font-black mb-8 leading-tight">
              Every interaction should feel fast, motivating, and emotionally
              lightweight.
            </h2>

            <div className="space-y-6">
              <div className="bg-white/5 rounded-3xl p-6 border border-white/10">
                <h3 className="text-2xl font-bold mb-3">
                  Minimize Cognitive Load
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Users should never feel overwhelmed with nutrition data.
                  Prioritize simple progress indicators, quick actions, and clean
                  navigation instead of complicated analytics.
                </p>
              </div>

              <div className="bg-white/5 rounded-3xl p-6 border border-white/10">
                <h3 className="text-2xl font-bold mb-3">
                  Reduce Meal Logging Friction
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Logging meals should take seconds. Add recent meals, favorite
                  foods, smart search suggestions, and repeat-meal shortcuts.
                </p>
              </div>

              <div className="bg-white/5 rounded-3xl p-6 border border-white/10">
                <h3 className="text-2xl font-bold mb-3">
                  Build Positive Emotional Feedback
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Use supportive notifications, streak animations, celebratory
                  states, and visual rewards to improve consistency and
                  retention.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/10 rounded-[40px] p-8">
            <h3 className="text-3xl font-black mb-8">Ideal User Flow</h3>

            <div className="space-y-5">
              {[
                "Quick onboarding with personalized calorie goals",
                "Choose goals: lose, gain, or maintain weight",
                "Search Nigerian meals instantly",
                "Log meals with familiar serving sizes",
                "Track hydration and daily streaks",
                "Review lightweight daily insights",
                "Get encouraging reminders and progress updates",
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start bg-white/5 rounded-2xl p-5"
                >
                  <div className="min-w-[48px] h-12 rounded-2xl bg-orange-500 flex items-center justify-center text-black font-black">
                    {index + 1}
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg">Step {index + 1}</h4>
                    <p className="text-gray-400 mt-1">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DATABASE ARCHITECTURE */}
      <section className="px-6 md:px-16 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-orange-300 font-semibold uppercase tracking-widest mb-3">
              Database Architecture
            </p>

            <h2 className="text-4xl font-black mb-6 leading-tight">
              Build a structured nutrition database optimized for Nigerian food
              systems.
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              The database is the competitive advantage of ChopWise. Accurate
              African meal support improves trust, retention, and long-term user
              loyalty.
            </p>

            <div className="space-y-5">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                <h3 className="text-xl font-bold mb-2">
                  Food Categories
                </h3>
                <p className="text-gray-400">
                  Rice meals, swallows, soups, snacks, drinks, breakfast foods,
                  street foods, proteins, and local beverages.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                <h3 className="text-xl font-bold mb-2">
                  Localized Portions
                </h3>
                <p className="text-gray-400">
                  Support measurements like wraps, plates, bowls, spoons,
                  sachets, cubes, and bottles.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                <h3 className="text-xl font-bold mb-2">
                  Smart Food Search
                </h3>
                <p className="text-gray-400">
                  Support aliases and slang variations like “Amala”, “Semo”,
                  “Party Rice”, and “Peppered Chicken”.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#111827] rounded-[36px] border border-white/10 p-8 overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-black">Food Schema</h3>
              <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm">
                Verified Structure
              </span>
            </div>

            <pre className="bg-black/40 p-6 rounded-3xl overflow-auto text-green-300 text-sm leading-relaxed whitespace-pre-wrap">
              {databaseSchema}
            </pre>
          </div>
        </div>
      </section>

      {/* RETENTION */}
      <section className="px-6 md:px-16 py-20 bg-[#111827]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 max-w-4xl">
            <p className="text-orange-300 font-semibold uppercase tracking-widest mb-3">
              Retention Systems
            </p>

            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Make users feel proud of consistency instead of guilty about food.
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              ChopWise should feel like a supportive companion. Notifications,
              streaks, and feedback systems should motivate users without toxic
              diet culture or shame-based messaging.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                title: "Daily Streaks",
                text: "Encourage consistency with rewarding animations and streak milestones.",
              },
              {
                title: "Weekly Recaps",
                text: "Show calories tracked, water intake, and healthy habits completed.",
              },
              {
                title: "Gentle Reminders",
                text: "Use supportive language like ‘Don’t forget your water 💧’.",
              },
              {
                title: "Milestone Celebrations",
                text: "Celebrate progress with badges, confetti states, and positive reinforcement.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-[30px] border border-white/10 p-7"
              >
                <div className="w-14 h-14 rounded-2xl bg-orange-500/20 mb-6 flex items-center justify-center text-2xl">
                  🚀
                </div>

                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="px-6 md:px-16 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div className="bg-white/5 border border-white/10 rounded-[36px] p-8">
            <p className="text-orange-300 font-semibold uppercase tracking-widest mb-3">
              Technical Recommendations
            </p>

            <h2 className="text-4xl font-black mb-8">
              Scalable modern architecture.
            </h2>

            <div className="space-y-5">
              {[
                "React.js + Tailwind CSS for fast UI iteration",
                "Supabase for authentication, PostgreSQL, and real-time features",
                "Modular food database architecture for future scaling",
                "Cloud storage for food images and user-generated meals",
                "Analytics layer for retention and behavioral insights",
                "AI-ready infrastructure for image recognition later",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-black/20 rounded-2xl p-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-500 text-black font-black flex items-center justify-center">
                    ✓
                  </div>
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/10 rounded-[36px] p-8">
            <p className="text-orange-300 font-semibold uppercase tracking-widest mb-3">
              Future Expansion Opportunities
            </p>

            <h2 className="text-4xl font-black mb-8 leading-tight">
              Long-term ecosystem vision.
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {roadmap.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5"
                >
                  <div className="text-2xl mb-3">🌍</div>
                  <h3 className="font-semibold text-lg">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MONETIZATION */}
      <section className="px-6 md:px-16 py-20 bg-[#111827]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mb-12">
            <p className="text-orange-300 font-semibold uppercase tracking-widest mb-3">
              Monetization Ideas
            </p>

            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              Monetize through value, personalization, and convenience.
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              The best monetization strategy for ChopWise is premium
              convenience, not restricting core functionality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              "Premium AI nutrition coach",
              "Advanced analytics and macro breakdowns",
              "Restaurant calorie partnerships",
              "Personalized meal plans",
              "Fitness and wearable integrations",
              "Verified nutritionist marketplace",
              "Healthy food partnerships",
              "Diaspora-focused premium plans",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-6"
              >
                <div className="w-12 h-12 rounded-2xl bg-orange-500/20 flex items-center justify-center mb-5 text-xl">
                  💡
                </div>
                <p className="text-lg font-medium text-gray-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPETITIVE ADVANTAGE */}
      <section className="px-6 md:px-16 py-24">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-orange-300 font-semibold uppercase tracking-widest mb-4">
            Competitive Advantage
          </p>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">
            ChopWise wins by understanding African food culture deeply.
          </h2>

          <p className="text-gray-400 text-xl leading-relaxed mb-12">
            Most calorie apps are designed for Western food systems first.
            ChopWise becomes indispensable because it feels native to Nigerian
            lifestyles, portions, meal habits, and cultural food experiences.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                title: "Localization",
                text: "Real Nigerian meals and serving sizes.",
              },
              {
                title: "Speed",
                text: "Fast logging with minimal taps and friction.",
              },
              {
                title: "Emotional Design",
                text: "Supportive, rewarding, and non-judgmental UX.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-[32px] p-8"
              >
                <div className="text-4xl mb-5">⭐</div>
                <h3 className="text-2xl font-black mb-3">{item.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
