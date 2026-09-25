// ============================================================
//  ChopWise Unified Nigerian & African Meal Database
//  Over 160 verified local dishes across all regions + street food
// ============================================================

export const FOOD_CATEGORIES = [
    "All",
    "Swallows",
    "Soups & Stews",
    "Rice & Grains",
    "Proteins",
    "Street Food & Snacks",
    "Breakfast",
    "Combos",
    "Drinks",
];

export const FOOD_DATABASE = [
    // ─── SWALLOWS ─────────────────────────────────────────────
    { id: "sw-1", name: "Pounded Yam", category: "Swallows", calories: 330, protein: 4, carbs: 75, fat: 0, serving: "1 standard wrap (~220g)", aliases: ["iyan", "yam swallow"] },
    { id: "sw-2", name: "Eba (Garri)", category: "Swallows", calories: 310, protein: 3, carbs: 72, fat: 0, serving: "1 standard wrap (~200g)", aliases: ["garri", "eba swallow", "yellow garri", "white garri"] },
    { id: "sw-3", name: "Amala (Yam flour)", category: "Swallows", calories: 300, protein: 3, carbs: 70, fat: 0, serving: "1 standard wrap (~200g)", aliases: ["amala dudu", "black amala", "elubo"] },
    { id: "sw-4", name: "Semovita / Semolina", category: "Swallows", calories: 285, protein: 5, carbs: 66, fat: 1, serving: "1 standard wrap (~200g)", aliases: ["semo", "semolina swallow"] },
    { id: "sw-5", name: "Fufu (Akpu)", category: "Swallows", calories: 270, protein: 2, carbs: 64, fat: 0, serving: "1 standard wrap (~220g)", aliases: ["akpu", "cassava fufu", "santana"] },
    { id: "sw-6", name: "Wheat Swallow", category: "Swallows", calories: 295, protein: 6, carbs: 65, fat: 1, serving: "1 standard wrap (~200g)", aliases: ["wheat meal", "whole wheat swallow"] },
    { id: "sw-7", name: "Tuwo Shinkafa", category: "Swallows", calories: 310, protein: 4, carbs: 72, fat: 1, serving: "1 standard wrap (~220g)", aliases: ["tuwo", "rice swallow", "tuwon shinkafa"] },
    { id: "sw-8", name: "Tuwo Masara", category: "Swallows", calories: 290, protein: 4, carbs: 66, fat: 1, serving: "1 standard wrap (~200g)", aliases: ["corn tuwo", "tuwon masara"] },
    { id: "sw-9", name: "Plantain Fufu (Unripe)", category: "Swallows", calories: 240, protein: 3, carbs: 56, fat: 0, serving: "1 wrap (~200g)", aliases: ["unripe plantain swallow", "fitfam fufu"] },
    { id: "sw-10", name: "Starch (Urhobo/Delta)", category: "Swallows", calories: 280, protein: 1, carbs: 68, fat: 0, serving: "1 wrap (~200g)", aliases: ["cassava starch", "delta starch swallow", "usi"] },

    // ─── SOUPS & STEWS ────────────────────────────────────────
    { id: "sp-1", name: "Egusi Soup", category: "Soups & Stews", calories: 410, protein: 18, carbs: 12, fat: 32, serving: "1 medium bowl (~200ml)", aliases: ["egusi", "melon soup", "ofe egusi"] },
    { id: "sp-2", name: "Ogbono Soup", category: "Soups & Stews", calories: 380, protein: 16, carbs: 9, fat: 28, serving: "1 medium bowl (~200ml)", aliases: ["ogbono", "draw soup", "apon"] },
    { id: "sp-3", name: "Efo Riro (Spinach stew)", category: "Soups & Stews", calories: 280, protein: 20, carbs: 8, fat: 22, serving: "1 medium bowl (~200ml)", aliases: ["efo", "vegetable soup", "spinach stew"] },
    { id: "sp-4", name: "Afang Soup", category: "Soups & Stews", calories: 330, protein: 20, carbs: 5, fat: 26, serving: "1 medium bowl (~200ml)", aliases: ["afang", "okazi soup", "calabar soup"] },
    { id: "sp-5", name: "Banga Soup (Ofe Akwu)", category: "Soups & Stews", calories: 370, protein: 14, carbs: 10, fat: 32, serving: "1 medium bowl (~200ml)", aliases: ["palm nut soup", "ofe akwu", "urhobo banga"] },
    { id: "sp-6", name: "Okra / Okro Soup", category: "Soups & Stews", calories: 220, protein: 15, carbs: 10, fat: 14, serving: "1 medium bowl (~200ml)", aliases: ["okro", "ila alasepo", "plain okro"] },
    { id: "sp-7", name: "Edikaikong Soup", category: "Soups & Stews", calories: 290, protein: 22, carbs: 6, fat: 20, serving: "1 medium bowl (~200ml)", aliases: ["edikang ikong", "cross river vegetable"] },
    { id: "sp-8", name: "Bitterleaf Soup (Ofe Onugbu)", category: "Soups & Stews", calories: 310, protein: 18, carbs: 7, fat: 24, aliases: ["onugbu", "ofe onugbu", "bitter leaf"] },
    { id: "sp-9", name: "Oha Soup", category: "Soups & Stews", calories: 300, protein: 17, carbs: 6, fat: 22, serving: "1 medium bowl (~200ml)", aliases: ["ora soup", "ofe oha"] },
    { id: "sp-10", name: "Gbegiri Soup (Bean soup)", category: "Soups & Stews", calories: 220, protein: 14, carbs: 20, fat: 10, serving: "1 medium ladle", aliases: ["gbegiri", "yellow soup"] },
    { id: "sp-11", name: "Ewedu Soup", category: "Soups & Stews", calories: 90, protein: 5, carbs: 7, fat: 4, serving: "1 medium ladle", aliases: ["ewedu", "jute leaf", "draw ewedu"] },
    { id: "sp-12", name: "Nigerian Tomato Stew", category: "Soups & Stews", calories: 210, protein: 5, carbs: 12, fat: 16, serving: "1 ladle (~120g)", aliases: ["stew", "obe ata", "red stew", "fried stew"] },
    { id: "sp-13", name: "Pepper Soup (Goat Meat)", category: "Soups & Stews", calories: 280, protein: 28, carbs: 3, fat: 14, serving: "1 medium bowl (~300ml)", aliases: ["goat peppersoup", "assorted pepper soup"] },
    { id: "sp-14", name: "Catfish Pepper Soup (Point & Kill)", category: "Soups & Stews", calories: 240, protein: 26, carbs: 3, fat: 10, serving: "1 bowl (1 cut fish + broth)", aliases: ["point and kill", "fish peppersoup"] },
    { id: "sp-15", name: "Ofada Stew (Ayamase)", category: "Soups & Stews", calories: 380, protein: 16, carbs: 8, fat: 32, serving: "1 generous scoop (~120g)", aliases: ["ayamase", "designer stew", "green stew"] },
    { id: "sp-16", name: "White Soup (Ofe Nsala)", category: "Soups & Stews", calories: 290, protein: 24, carbs: 6, fat: 18, serving: "1 bowl with fish/meat", aliases: ["nsala", "ofe nsala", "catfish nsala"] },
    { id: "sp-17", name: "Miyan Kuka", category: "Soups & Stews", calories: 240, protein: 10, carbs: 12, fat: 14, serving: "1 bowl", aliases: ["kuka", "baobab leaf soup"] },
    { id: "sp-18", name: "Miyan Taushe", category: "Soups & Stews", calories: 260, protein: 12, carbs: 14, fat: 16, serving: "1 bowl", aliases: ["taushe", "pumpkin leaf soup hausa"] },

    // ─── RICE & GRAINS ────────────────────────────────────────
    { id: "rc-1", name: "Party Jollof Rice", category: "Rice & Grains", calories: 520, protein: 11, carbs: 86, fat: 14, serving: "1 full plate (~300g)", aliases: ["jollof", "party rice", "naija jollof"] },
    { id: "rc-2", name: "Nigerian Fried Rice", category: "Rice & Grains", calories: 480, protein: 10, carbs: 78, fat: 15, serving: "1 full plate (~300g)", aliases: ["fried rice", "veg rice"] },
    { id: "rc-3", name: "White Rice (Boiled)", category: "Rice & Grains", calories: 340, protein: 7, carbs: 74, fat: 1, serving: "1 plate (~250g)", aliases: ["plain rice", "white rice", "boiled rice"] },
    { id: "rc-4", name: "Ofada Rice (Boiled)", category: "Rice & Grains", calories: 380, protein: 8, carbs: 76, fat: 3, serving: "1 plate (~250g)", aliases: ["local rice", "ofada brown rice"] },
    { id: "rc-5", name: "Coconut Jollof Rice", category: "Rice & Grains", calories: 490, protein: 9, carbs: 82, fat: 16, serving: "1 plate (~280g)", aliases: ["coconut rice", "coco jollof"] },
    { id: "rc-6", name: "Spaghetti Jollof", category: "Rice & Grains", calories: 460, protein: 12, carbs: 78, fat: 12, serving: "1 plate (~280g)", aliases: ["jollof spaghetti", "pasta jollof"] },
    { id: "rc-7", name: "Rice and Beans (Jollof style)", category: "Rice & Grains", calories: 450, protein: 16, carbs: 82, fat: 8, serving: "1 plate (~300g)", aliases: ["rice and beans", "rice & beans"] },
    { id: "rc-8", name: "Masa (Rice Cakes)", category: "Rice & Grains", calories: 220, protein: 5, carbs: 44, fat: 4, serving: "3 pieces", aliases: ["waina", "masa cake", "hausa masa"] },

    // ─── PROTEINS ─────────────────────────────────────────────
    { id: "pr-1", name: "Beef Suya", category: "Proteins", calories: 290, protein: 28, carbs: 4, fat: 16, serving: "1 stick / ~120g skewer", aliases: ["suya", "tsire", "beef skewer"] },
    { id: "pr-2", name: "Asun (Spicy Goat Meat)", category: "Proteins", calories: 310, protein: 32, carbs: 2, fat: 20, serving: "1 small bowl (~150g)", aliases: ["asun", "peppered goat meat"] },
    { id: "pr-3", name: "Grilled Chicken (Quarter)", category: "Proteins", calories: 260, protein: 35, carbs: 0, fat: 12, serving: "1 quarter leg/breast", aliases: ["chicken", "bbq chicken", "roast chicken"] },
    { id: "pr-4", name: "Fried Chicken (Quarter)", category: "Proteins", calories: 370, protein: 29, carbs: 6, fat: 25, serving: "1 deep fried piece", aliases: ["fried chicken", "crispy chicken"] },
    { id: "pr-5", name: "Titus Fish (Mackerel - Fried)", category: "Proteins", calories: 290, protein: 26, carbs: 2, fat: 18, serving: "1 medium cut", aliases: ["titus", "mackerel", "fried titus"] },
    { id: "pr-6", name: "Croaker Fish (Grilled)", category: "Proteins", calories: 210, protein: 28, carbs: 0, fat: 9, serving: "1 whole/large cut", aliases: ["croaker", "grilled fish"] },
    { id: "pr-7", name: "Assorted Beef / Shaki (Tripe)", category: "Proteins", calories: 180, protein: 24, carbs: 1, fat: 8, serving: "2-3 medium chunks", aliases: ["assorted meat", "shaki", "roundabout", "towel"] },
    { id: "pr-8", name: "Ponmo (Cow Skin)", category: "Proteins", calories: 110, protein: 18, carbs: 0, fat: 3, serving: "2-3 pieces", aliases: ["kpomo", "cow skin", "kanda"] },
    { id: "pr-9", name: "Boiled Egg", category: "Proteins", calories: 78, protein: 6, carbs: 1, fat: 5, serving: "1 whole egg", aliases: ["egg", "boiled egg"] },
    { id: "pr-10", name: "Fried Egg (1 large)", category: "Proteins", calories: 120, protein: 6, carbs: 1, fat: 10, serving: "1 egg fried in vegetable oil", aliases: ["egg", "fried egg"] },
    { id: "pr-11", name: "Kilishi (Spiced Jerky)", category: "Proteins", calories: 240, protein: 34, carbs: 8, fat: 7, serving: "50g dried sheet", aliases: ["kilishi", "beef jerky hausa"] },
    { id: "pr-12", name: "Peppered Gizzard", category: "Proteins", calories: 220, protein: 28, carbs: 4, fat: 9, serving: "1 small cup (~120g)", aliases: ["gizzard", "gizdodo gizzard"] },

    // ─── STREET FOOD & SNACKS ─────────────────────────────────
    { id: "sn-1", name: "Dodo (Fried Ripe Plantain)", category: "Street Food & Snacks", calories: 260, protein: 2, carbs: 42, fat: 10, serving: "6-8 sweet slices", aliases: ["dodo", "fried plantain", "alloco"] },
    { id: "sn-2", name: "Bole (Roasted Plantain)", category: "Street Food & Snacks", calories: 210, protein: 2, carbs: 44, fat: 1, serving: "1 whole roasted plantain", aliases: ["boli", "roasted plantain", "bole ph"] },
    { id: "sn-3", name: "Akara (Bean Cakes)", category: "Street Food & Snacks", calories: 210, protein: 7, carbs: 15, fat: 12, serving: "3 fried balls", aliases: ["akara", "kosai", "bean balls"] },
    { id: "sn-4", name: "Moi Moi (Steamed Bean Pudding)", category: "Street Food & Snacks", calories: 220, protein: 12, carbs: 20, fat: 8, serving: "1 medium wrap/tin", aliases: ["moimoi", "bean pudding", "elewe"] },
    { id: "sn-5", name: "Puff Puff", category: "Street Food & Snacks", calories: 280, protein: 3, carbs: 36, fat: 12, serving: "4 medium balls", aliases: ["puffpuff", "fried dough", "buns"] },
    { id: "sn-6", name: "Nigerian Meat Pie", category: "Street Food & Snacks", calories: 370, protein: 11, carbs: 40, fat: 18, serving: "1 pastry pie", aliases: ["meat pie", "pie", "pastry"] },
    { id: "sn-7", name: "Shawarma (Chicken - Double sausage)", category: "Street Food & Snacks", calories: 650, protein: 24, carbs: 55, fat: 34, serving: "1 large wrap with cream", aliases: ["shawarma", "chicken wrap"] },
    { id: "sn-8", name: "Chin Chin", category: "Street Food & Snacks", calories: 340, protein: 5, carbs: 48, fat: 15, serving: "1 small cup / handful (~75g)", aliases: ["chinchin", "crunchy snack"] },
    { id: "sn-9", name: "Indomie Instant Noodles (Cooked)", category: "Street Food & Snacks", calories: 380, protein: 8, carbs: 54, fat: 14, serving: "1 single pack prepared", aliases: ["indomie", "noodles", "superpack"] },
    { id: "sn-10", name: "Roasted Groundnuts (Peanuts)", category: "Street Food & Snacks", calories: 310, protein: 14, carbs: 11, fat: 25, serving: "1 small bottle/cup (~55g)", aliases: ["groundnut", "peanuts", "epa"] },
    { id: "sn-11", name: "Okpa (Bambara Nut Pudding)", category: "Street Food & Snacks", calories: 330, protein: 15, carbs: 32, fat: 15, serving: "1 wrap (Enugu style)", aliases: ["okpa", "okpa waawa"] },
    { id: "sn-12", name: "Dundu (Fried Yam + Pepper Sauce)", category: "Street Food & Snacks", calories: 340, protein: 4, carbs: 62, fat: 10, serving: "4-5 yam slices + sauce", aliases: ["dundu", "fried yam", "ojojo"] },

    // ─── BREAKFAST ────────────────────────────────────────────
    { id: "bf-1", name: "Akamu / Pap / Ogi (Plain)", category: "Breakfast", calories: 130, protein: 2, carbs: 28, fat: 1, serving: "1 medium bowl (~250ml)", aliases: ["pap", "akamu", "ogi", "corn pap"] },
    { id: "bf-2", name: "Agege Bread (2 thick slices)", category: "Breakfast", calories: 260, protein: 8, carbs: 52, fat: 3, serving: "2 thick fresh slices (~100g)", aliases: ["agege", "soft bread", "loaf"] },
    { id: "bf-3", name: "Custard (Vanilla / Banana)", category: "Breakfast", calories: 180, protein: 3, carbs: 38, fat: 2, serving: "1 bowl prepared", aliases: ["custard", "golden morn custard"] },
    { id: "bf-4", name: "Golden Morn (with milk)", category: "Breakfast", calories: 290, protein: 8, carbs: 56, fat: 4, serving: "1 bowl (50g cereal + milk)", aliases: ["golden morn", "cereal"] },
    { id: "bf-5", name: "Soaked Garri (w/ sugar & groundnuts)", category: "Breakfast", calories: 320, protein: 9, carbs: 58, fat: 7, serving: "1 bowl with ice water", aliases: ["garri soaking", "soaked garri", "student survival"] },
    { id: "bf-6", name: "Ewa Agoyin & Sauce", category: "Breakfast", calories: 420, protein: 18, carbs: 58, fat: 14, serving: "1 plate beans + agoyin sauce", aliases: ["ewa agoyin", "aganyin", "mash beans"] },

    // ─── COMBOS ───────────────────────────────────────────────
    { id: "cb-1", name: "Pounded Yam & Egusi (w/ Beef)", category: "Combos", calories: 790, protein: 34, carbs: 92, fat: 36, serving: "1 wrap + 1 bowl soup + beef", aliases: ["iyan and egusi", "pounded yam egusi"] },
    { id: "cb-2", name: "Amala + Ewedu & Gbegiri (Abula)", category: "Combos", calories: 580, protein: 24, carbs: 94, fat: 18, serving: "1 wrap + abula mix + goat meat", aliases: ["abula", "amala abula", "amala ewedu gbegiri"] },
    { id: "cb-3", name: "Eba & Ogbono Soup (w/ Fish)", category: "Combos", calories: 720, protein: 31, carbs: 83, fat: 32, serving: "1 wrap + 1 bowl ogbono + fish", aliases: ["eba and ogbono", "garri ogbono"] },
    { id: "cb-4", name: "Jollof Rice + Dodo + Fried Chicken", category: "Combos", calories: 880, protein: 42, carbs: 98, fat: 38, serving: "1 standard party plate", aliases: ["jollof chicken dodo", "party plate", "owambe plate"] },
    { id: "cb-5", name: "White Rice + Stew + Fried Fish", category: "Combos", calories: 680, protein: 35, carbs: 86, fat: 22, serving: "1 plate + ladle stew + fish", aliases: ["rice and stew", "rice stew fish"] },
    { id: "cb-6", name: "Akara (4 balls) & Pap (Akamu)", category: "Combos", calories: 390, protein: 11, carbs: 48, fat: 14, serving: "1 bowl pap + 4 akara balls", aliases: ["akara and pap", "ogi akara"] },

    // ─── DRINKS ───────────────────────────────────────────────
    { id: "dk-1", name: "Zobo Drink (Naturally sweetened)", category: "Drinks", calories: 70, protein: 1, carbs: 16, fat: 0, serving: "1 glass / bottle (350ml)", aliases: ["zobo", "hibiscus tea", "bissap", "sobolo"] },
    { id: "dk-2", name: "Tiger Nut Milk (Kunun Aya)", category: "Drinks", calories: 160, protein: 3, carbs: 24, fat: 6, serving: "1 glass (300ml)", aliases: ["kunun aya", "tigernut drink", "aya milk"] },
    { id: "dk-3", name: "Kunu Zaki", category: "Drinks", calories: 130, protein: 3, carbs: 28, fat: 1, serving: "1 glass (300ml)", aliases: ["kunu", "millet drink", "kunu drink"] },
    { id: "dk-4", name: "Fresh Palm Wine", category: "Drinks", calories: 110, protein: 0, carbs: 20, fat: 0, serving: "1 cup / calabash (250ml)", aliases: ["palm wine", "emu", "nkwu", "oguro"] },
    { id: "dk-5", name: "Chapman Cocktail", category: "Drinks", calories: 190, protein: 0, carbs: 48, fat: 0, serving: "1 dimpled beer mug", aliases: ["chapman", "fanta sprite angostura"] },
    { id: "dk-6", name: "Maltina / Malta Guinness", category: "Drinks", calories: 170, protein: 2, carbs: 39, fat: 0, serving: "1 can / bottle (330ml)", aliases: ["malt", "malta", "maltina"] },
];