// ============================================================
//  Nigerian Meal Calorie Database
//  Coverage: All 36 States + FCT (Abuja)
//  ~200 entries — calories per standard single serving
// ============================================================

const baseFoodDB = [

  // ────────────────────────────────────────────────────────────
  //  RICE & GRAINS  (National / Cross-regional)
  // ────────────────────────────────────────────────────────────
  { name: "jollof rice",            calories: 520, protein: 12, carbs: 86, fat: 12, aliases: ["jollof", "party rice", "tomato rice"] },
  { name: "fried rice",             calories: 480, protein: 10, carbs: 78, fat: 14, aliases: ["veg rice", "vegetable rice"] },
  { name: "white rice",             calories: 360, protein:  7, carbs: 78, fat:  1, aliases: ["plain rice", "boiled rice", "rice"] },
  { name: "ofada rice",             calories: 410, protein:  8, carbs: 82, fat:  6, aliases: ["local rice", "ofada"] },
  { name: "coconut rice",           calories: 460, protein:  8, carbs: 80, fat: 16, aliases: ["coconut jollof"] },
  { name: "tuwo shinkafa",          calories: 310, protein:  4, carbs: 72, fat:  1, aliases: ["tuwo", "tuwon shinkafa"] },
  { name: "tuwo masara",            calories: 290, protein:  4, carbs: 66, fat:  1, aliases: ["corn tuwo", "tuwon masara"] },
  { name: "masa",                   calories: 220, protein:  5, carbs: 44, fat:  4, aliases: ["waina", "rice cake", "masa cake"] },
  { name: "sinasir",                calories: 200, protein:  4, carbs: 42, fat:  3, aliases: ["sinasiri", "fermented rice cake"] },

  // ────────────────────────────────────────────────────────────
  //  SWALLOW  (National)
  // ────────────────────────────────────────────────────────────
  { name: "pounded yam",            calories: 330, protein:  4, carbs: 75, fat:  0, aliases: ["iyan", "pounded yam swallow"] },
  { name: "eba",                    calories: 310, protein:  3, carbs: 72, fat:  0, aliases: ["garri", "garri swallow"] },
  { name: "amala",                  calories: 300, protein:  3, carbs: 70, fat:  0, aliases: ["amala yam", "black swallow"] },
  { name: "amala abula",            calories: 310, protein:  4, carbs: 70, fat:  1, aliases: ["abula", "amala with soup"] },
  { name: "semovita",               calories: 285, protein:  5, carbs: 66, fat:  1, aliases: ["semo", "semolina swallow"] },
  { name: "fufu",                   calories: 270, protein:  2, carbs: 64, fat:  0, aliases: ["akpu", "cassava fufu"] },
  { name: "wheat swallow",          calories: 295, protein:  6, carbs: 65, fat:  1, aliases: ["wheat", "whole wheat swallow"] },
  { name: "plantain fufu",          calories: 290, protein:  2, carbs: 68, fat:  0, aliases: ["unripe plantain fufu"] },
  { name: "cocoyam fufu",           calories: 260, protein:  3, carbs: 58, fat:  0, aliases: ["ede fufu", "cocoyam swallow"] },
  { name: "starch",                 calories: 280, protein:  1, carbs: 68, fat:  0, aliases: ["cassava starch", "delta starch swallow"] },

  // ────────────────────────────────────────────────────────────
  //  SOUPS & STEWS
  // ────────────────────────────────────────────────────────────

  // — Widespread —
  { name: "egusi soup",             calories: 410, protein: 18, carbs: 12, fat: 32, aliases: ["egusi", "melon soup"] },
  { name: "ogbono soup",            calories: 380, protein: 16, carbs:  9, fat: 28, aliases: ["ogbono", "draw soup", "apon"] },
  { name: "okra soup",              calories: 260, protein: 15, carbs: 10, fat: 18, aliases: ["okro soup", "ila", "ila alasepo"] },
  { name: "banga soup",             calories: 370, protein: 14, carbs: 10, fat: 32, aliases: ["palm nut soup", "ofe akwu"] },
  { name: "pepper soup",            calories: 220, protein: 28, carbs:  3, fat: 10, aliases: ["goat pepper soup", "assorted pepper soup"] },
  { name: "catfish pepper soup",    calories: 210, protein: 26, carbs:  3, fat:  8, aliases: ["point and kill", "fish pepper soup", "catfish"] },
  { name: "tomato stew",            calories: 170, protein:  3, carbs: 10, fat: 14, aliases: ["stew", "tomato sauce", "obe ata"] },
  { name: "white soup",             calories: 300, protein: 18, carbs:  4, fat: 24, aliases: ["ofe owerri", "ofe onugbu white"] },

  // — South-West (Lagos, Ogun, Oyo, Osun, Ondo, Ekiti) —
  { name: "efo riro",               calories: 280, protein: 20, carbs:  8, fat: 22, aliases: ["efo", "spinach stew", "vegetable stew"] },
  { name: "gbegiri soup",           calories: 260, protein: 14, carbs: 20, fat: 14, aliases: ["gbegiri", "bean soup", "obe gbegiri"] },
  { name: "ewedu soup",             calories: 120, protein:  6, carbs:  8, fat:  6, aliases: ["ewedu", "jute leaf soup", "draw ewedu"] },
  { name: "abula",                  calories: 380, protein: 16, carbs: 22, fat: 24, aliases: ["abula soup combo", "gbegiri ewedu stew"] },
  { name: "obe ata din din",        calories: 190, protein:  4, carbs: 12, fat: 14, aliases: ["fried pepper stew", "ata din din"] },
  { name: "obe eja tutu",           calories: 230, protein: 22, carbs:  6, fat: 14, aliases: ["fresh fish stew", "eja tutu"] },
  { name: "obe eja osan",           calories: 220, protein: 20, carbs:  6, fat: 13, aliases: ["smoked fish stew", "eja osan"] },
  { name: "ila alasepo",            calories: 270, protein: 16, carbs: 12, fat: 18, aliases: ["okra with gbegiri", "ila alasepo stew"] },
  { name: "gbodo soup",             calories: 250, protein:  8, carbs: 36, fat: 10, aliases: ["dried plantain soup", "gbodo ekiti"] },
  { name: "ebiripo",                calories: 290, protein:  5, carbs: 56, fat:  6, aliases: ["cocoyam yam mix porridge", "ekiti ebiripo"] },
  { name: "ikokore",                calories: 370, protein: 12, carbs: 56, fat: 14, aliases: ["water yam porridge", "ijebu porridge", "water yam pottage"] },
  { name: "ojojo",                  calories: 270, protein:  3, carbs: 42, fat: 10, aliases: ["water yam fritters", "ojojo ondo"] },

  // — South-East (Anambra, Imo, Enugu, Ebonyi, Abia) —
  { name: "oha soup",               calories: 300, protein: 17, carbs:  6, fat: 22, aliases: ["ora soup", "ofe oha"] },
  { name: "bitterleaf soup",        calories: 310, protein: 18, carbs:  7, fat: 24, aliases: ["ofe onugbu", "onugbu soup"] },
  { name: "nsala soup",             calories: 290, protein: 20, carbs:  6, fat: 20, aliases: ["white soup nsala", "ofe nsala", "catfish nsala"] },
  { name: "ofe akwu igbo",          calories: 370, protein: 14, carbs: 10, fat: 32, aliases: ["palm fruit soup igbo", "banga igbo"] },
  { name: "ofe owerri",             calories: 310, protein: 19, carbs:  5, fat: 24, aliases: ["owerri soup", "imo soup"] },
  { name: "abacha",                 calories: 340, protein:  6, carbs: 52, fat: 14, aliases: ["african salad", "cassava salad", "tapioca salad"] },
  { name: "ugba",                   calories: 300, protein: 14, carbs: 16, fat: 20, aliases: ["ukpaka", "oil bean salad", "african oil bean"] },
  { name: "akidi",                  calories: 290, protein: 18, carbs: 38, fat:  6, aliases: ["black beans igbo", "akidi beans"] },
  { name: "ofe egusi nri",          calories: 420, protein: 18, carbs: 12, fat: 34, aliases: ["igbo egusi", "anambra egusi"] },

  // — South-South (Rivers, Cross River, Akwa Ibom, Delta, Edo, Bayelsa) —
  { name: "edikaikong",             calories: 290, protein: 22, carbs:  6, fat: 20, aliases: ["edikang ikong", "vegetable soup"] },
  { name: "afang soup",             calories: 330, protein: 20, carbs:  5, fat: 26, aliases: ["afang", "okazi soup"] },
  { name: "abak atama soup",        calories: 350, protein: 16, carbs: 10, fat: 28, aliases: ["atama soup", "akwa ibom palm soup"] },
  { name: "ekpang nkukwo",          calories: 380, protein: 14, carbs: 40, fat: 20, aliases: ["ekpang", "cocoyam porridge cross river"] },
  { name: "fisherman soup",         calories: 260, protein: 24, carbs:  6, fat: 16, aliases: ["rivers fisherman soup", "fresh fish soup"] },
  { name: "ofe onunu",              calories: 290, protein: 10, carbs: 38, fat: 14, aliases: ["onunu", "delta yam pudding"] },
  { name: "banga stew delta",       calories: 320, protein: 12, carbs:  8, fat: 28, aliases: ["urhobo banga stew", "delta banga"] },
  { name: "isiewu",                 calories: 340, protein: 28, carbs:  6, fat: 22, aliases: ["goat head peppersoup", "isi ewu"] },
  { name: "oghwo soup",             calories: 260, protein: 10, carbs: 18, fat: 18, aliases: ["urhobo oghwo", "delta oghwo"] },
  { name: "etinko soup",            calories: 270, protein: 16, carbs:  8, fat: 18, aliases: ["calabar soup", "cross river vegetable soup"] },
  { name: "editan soup",            calories: 280, protein: 18, carbs:  8, fat: 20, aliases: ["editan", "akwa ibom editan"] },

  // — North-West (Kano, Katsina, Sokoto, Kebbi, Zamfara, Jigawa, Kaduna) —
  { name: "miyan kuka",             calories: 240, protein: 10, carbs: 12, fat: 14, aliases: ["kuka soup", "baobab soup", "lemu"] },
  { name: "miyan taushe",           calories: 260, protein: 12, carbs: 14, fat: 16, aliases: ["pumpkin leaf soup", "taushe"] },
  { name: "miyan kubewa",           calories: 220, protein:  9, carbs: 16, fat: 12, aliases: ["okra hausa soup", "kubewa"] },
  { name: "miyan yakuwa",           calories: 200, protein:  8, carbs: 12, fat: 12, aliases: ["roselle leaf soup", "yakuwa"] },
  { name: "miyan zogale",           calories: 190, protein: 10, carbs: 10, fat: 12, aliases: ["moringa soup", "zogale"] },
  { name: "miyan karkashi",         calories: 210, protein:  9, carbs: 12, fat: 14, aliases: ["spinach hausa soup", "karkashi"] },
  { name: "miyan dorawa",           calories: 230, protein: 10, carbs: 14, fat: 14, aliases: ["locust bean soup", "dorawa"] },
  { name: "miyan shuwaka",          calories: 200, protein:  8, carbs: 11, fat: 12, aliases: ["amaranth soup", "shuwaka"] },
  { name: "miyan geda",             calories: 310, protein: 16, carbs: 18, fat: 20, aliases: ["groundnut soup", "peanut soup", "geda"] },
  { name: "miyan nama",             calories: 280, protein: 22, carbs:  8, fat: 18, aliases: ["meat soup hausa", "beef hausa soup"] },
  { name: "miyan baki",             calories: 250, protein: 12, carbs: 14, fat: 16, aliases: ["black soup north", "miyan baki hausa"] },

  // — North-East (Adamawa, Gombe, Bauchi, Taraba, Borno, Yobe) —
  { name: "dafa duka",              calories: 320, protein: 18, carbs: 20, fat: 18, aliases: ["all in one soup", "borno dafa duka"] },
  { name: "miyan wake",             calories: 250, protein: 14, carbs: 22, fat: 12, aliases: ["bean soup hausa", "wake soup"] },
  { name: "gwate porridge",         calories: 200, protein:  6, carbs: 38, fat:  4, aliases: ["gombe grain porridge", "gwate"] },
  { name: "borno fish stew",        calories: 240, protein: 24, carbs:  6, fat: 14, aliases: ["lake chad fish stew", "borno stew"] },

  // — North-Central / Middle Belt (Benue, Plateau, Nasarawa, Kogi, Niger, Kwara) —
  { name: "okoho soup",             calories: 270, protein: 14, carbs: 12, fat: 18, aliases: ["okoho", "igede soup", "benue okoho"] },
  { name: "otji soup",              calories: 260, protein: 12, carbs: 12, fat: 18, aliases: ["otji", "tiv soup"] },
  { name: "nzube soup",             calories: 250, protein: 12, carbs: 10, fat: 18, aliases: ["nzube", "idoma soup"] },
  { name: "omi obe",                calories: 180, protein:  8, carbs: 10, fat: 12, aliases: ["kwara vegetable soup", "omi obe kwara"] },
  { name: "adun soup",              calories: 300, protein: 14, carbs: 16, fat: 20, aliases: ["kogi soup", "lokoja adun"] },
  { name: "ogodo soup",             calories: 260, protein: 12, carbs: 12, fat: 18, aliases: ["nasarawa soup", "ogodo"] },
  { name: "tiv sesame soup",        calories: 280, protein: 14, carbs: 10, fat: 20, aliases: ["tiv soup benue", "sesame soup"] },

  // ────────────────────────────────────────────────────────────
  //  PROTEINS  (National + regional)
  // ────────────────────────────────────────────────────────────
  { name: "suya",                   calories: 290, protein: 25, carbs:  4, fat: 16, aliases: ["meat", "beef suya", "tsire"] },
  { name: "asun",                   calories: 300, protein: 30, carbs:  2, fat: 22, aliases: ["spicy goat meat", "asun meat"] },
  { name: "grilled chicken",        calories: 270, protein: 34, carbs:  0, fat: 12, aliases: ["chicken", "bbq chicken"] },
  { name: "fried chicken",          calories: 370, protein: 28, carbs:  8, fat: 24, aliases: ["fried chicken leg", "deep fried chicken"] },
  { name: "fried fish",             calories: 340, protein: 30, carbs:  4, fat: 16, aliases: ["fish", "eja din din"] },
  { name: "stockfish",              calories: 150, protein: 36, carbs:  0, fat:  2, aliases: ["okporoko", "dried fish"] },
  { name: "ponmo",                  calories: 110, protein: 18, carbs:  0, fat:  3, aliases: ["kpomo", "cowskin", "bokoto"] },
  { name: "boiled egg",             calories:  78, protein:  6, carbs:  1, fat:  5, aliases: ["egg", "boiled egg"] },
  { name: "fried egg",              calories: 110, protein:  6, carbs:  0, fat:  8, aliases: ["egg", "fried egg"] },
  { name: "kilishi",                calories: 320, protein: 40, carbs: 12, fat: 10, aliases: ["dried meat", "nigerian beef jerky", "hausa kilishi"] },
  { name: "balangu",                calories: 310, protein: 32, carbs:  4, fat: 18, aliases: ["roasted ram", "plateau grilled meat"] },
  { name: "nkwobi",                 calories: 380, protein: 26, carbs:  6, fat: 28, aliases: ["cowleg", "spicy cowfoot"] },
  { name: "isi ewu full",           calories: 340, protein: 28, carbs:  6, fat: 22, aliases: ["goat head full", "isiewu plate"] },
  { name: "smoked fish",            calories: 220, protein: 30, carbs:  0, fat: 10, aliases: ["panla", "eja gbigbe", "dried smoked fish"] },
  { name: "periwinkle",             calories:  80, protein: 14, carbs:  2, fat:  2, aliases: ["isam", "shellfish"] },
  { name: "snail",                  calories: 130, protein: 24, carbs:  2, fat:  3, aliases: ["igbin", "Congo meat", "escargot"] },
  { name: "bushmeat",               calories: 280, protein: 36, carbs:  0, fat: 14, aliases: ["game meat", "grasscutter", "agouti"] },
  { name: "roasted chicken",        calories: 290, protein: 32, carbs:  0, fat: 16, aliases: ["whole roasted chicken", "oven chicken"] },
  { name: "titus fish",             calories: 230, protein: 28, carbs:  0, fat: 12, aliases: ["mackerel", "titus", "atlantic mackerel"] },
  { name: "croaker fish",           calories: 200, protein: 26, carbs:  0, fat: 10, aliases: ["croaker", "eja kika"] },
  { name: "beef",                   calories: 250, protein: 26, carbs:  0, fat: 16, aliases: ["meat", "assorted beef"] },
  { name: "tripe",                  calories: 120, protein: 18, carbs:  1, fat:  4, aliases: ["shaki", "cow tripe", "towel"] },

  // ────────────────────────────────────────────────────────────
  //  SNACKS & STREET FOOD
  // ────────────────────────────────────────────────────────────
  { name: "shawarma",               calories: 650, protein: 20, carbs: 58, fat: 32, aliases: ["wrap", "chicken shawarma"] },
  { name: "indomie",                calories: 380, protein:  8, carbs: 56, fat: 14, aliases: ["noodles", "instant noodles"] },
  { name: "akara",                  calories: 220, protein:  7, carbs: 14, fat: 10, aliases: ["bean cakes", "bean fritters", "kosai"] },
  { name: "moi moi",                calories: 230, protein: 10, carbs: 18, fat:  8, aliases: ["bean pudding", "moimoi"] },
  { name: "puff puff",              calories: 250, protein:  3, carbs: 26, fat: 12, aliases: ["buns", "puffpuff"] },
  { name: "chin chin",              calories: 300, protein:  5, carbs: 44, fat: 14, aliases: ["chinchin", "fried dough"] },
  { name: "plantain fried",         calories: 250, protein:  2, carbs: 40, fat:  8, aliases: ["dodo", "fried plantain"] },
  { name: "boli",                   calories: 200, protein:  2, carbs: 36, fat:  1, aliases: ["roasted plantain", "bole"] },
  { name: "roasted corn",           calories: 130, protein:  3, carbs: 28, fat:  2, aliases: ["agbado", "boiled corn", "corn"] },
  { name: "meat pie",               calories: 370, protein: 10, carbs: 38, fat: 18, aliases: ["nigerian meat pie", "pie"] },
  { name: "sausage roll",           calories: 340, protein:  8, carbs: 36, fat: 18, aliases: ["sausage roll snack"] },
  { name: "spring roll",            calories: 200, protein:  6, carbs: 24, fat: 10, aliases: ["samosa"] },
  { name: "buns",                   calories: 280, protein:  4, carbs: 36, fat: 12, aliases: ["nigerian buns snack"] },
  { name: "aadun",                  calories: 290, protein:  4, carbs: 52, fat:  8, aliases: ["corn candy", "roasted corn snack", "adun oyo"] },
  { name: "kokoro",                 calories: 260, protein:  4, carbs: 48, fat:  6, aliases: ["corn snack", "kokoro corn oyo"] },
  { name: "donkwa",                 calories: 270, protein:  8, carbs: 36, fat: 12, aliases: ["groundnut cake kano", "peanut donkwa"] },
  { name: "kuli kuli",              calories: 320, protein: 14, carbs: 22, fat: 20, aliases: ["peanut snack", "kulikuli", "groundnut kuli kuli"] },
  { name: "gurasa",                 calories: 280, protein:  6, carbs: 52, fat:  6, aliases: ["hausa bread", "kano bread", "gurasa flatbread"] },
  { name: "dan wake",               calories: 240, protein: 10, carbs: 32, fat:  8, aliases: ["bean dumpling hausa", "dan wake snack"] },
  { name: "okpa",                   calories: 310, protein: 14, carbs: 28, fat: 16, aliases: ["bambara nut pudding", "okpa enugu"] },
  { name: "ojojo snack",            calories: 270, protein:  3, carbs: 42, fat: 10, aliases: ["water yam fritters ondo"] },
  { name: "abari",                  calories: 260, protein:  8, carbs: 38, fat:  8, aliases: ["corn bean pudding", "abari snack"] },
  { name: "fried groundnuts",       calories: 330, protein: 14, carbs: 12, fat: 26, aliases: ["groundnut", "peanuts", "roasted groundnut"] },
  { name: "roasted groundnuts",     calories: 300, protein: 14, carbs: 10, fat: 24, aliases: ["roasted peanuts", "dry groundnut"] },
  { name: "lahoh",                  calories: 210, protein:  5, carbs: 42, fat:  2, aliases: ["lahoh bread", "borno flatbread"] },
  { name: "tapioca",                calories: 190, protein:  1, carbs: 46, fat:  0, aliases: ["cassava pearls", "tapioca snack", "eba pellets"] },
  { name: "plantain chips",         calories: 280, protein:  2, carbs: 44, fat: 10, aliases: ["dried plantain", "plantain crisps"] },
  { name: "robo snack",             calories: 290, protein: 10, carbs: 28, fat: 16, aliases: ["fried groundnut cake", "robo"] },
  { name: "akidi snack",            calories: 200, protein: 12, carbs: 24, fat:  4, aliases: ["black bean snack", "boiled akidi"] },
  { name: "tiger nut",              calories: 120, protein:  2, carbs: 20, fat:  6, aliases: ["aya", "chufa", "hausa groundnut"] },

  // ────────────────────────────────────────────────────────────
  //  PORRIDGES & ONE-POT MEALS
  // ────────────────────────────────────────────────────────────
  { name: "yam porridge",           calories: 320, protein:  6, carbs: 62, fat:  8, aliases: ["yam pottage", "asaro", "elepo"] },
  { name: "beans porridge",         calories: 330, protein: 18, carbs: 48, fat:  8, aliases: ["ewa riro", "beans stew", "bean porridge"] },
  { name: "plantain porridge",      calories: 290, protein:  4, carbs: 54, fat:  8, aliases: ["plantain pottage"] },
  { name: "ewa agoyin",             calories: 360, protein: 16, carbs: 50, fat: 12, aliases: ["agoyin beans", "mushy beans agoyin", "ewa agoyin"] },
  { name: "bambara nut porridge",   calories: 320, protein: 16, carbs: 42, fat:  8, aliases: ["okpa porridge", "bambara beans"] },
  { name: "rice and beans",         calories: 440, protein: 16, carbs: 78, fat:  6, aliases: ["jollof beans rice", "rice beans mix"] },
  { name: "noodles and egg",        calories: 460, protein: 14, carbs: 56, fat: 18, aliases: ["indomie egg", "noodles with egg"] },
  { name: "tuwon hatsi",            calories: 300, protein:  4, carbs: 70, fat:  1, aliases: ["sorghum tuwo", "tuwon dawa"] },
  { name: "fura balls",             calories: 160, protein:  5, carbs: 32, fat:  2, aliases: ["millet ball", "fura millet"] },
  { name: "gbodo porridge",         calories: 280, protein:  4, carbs: 54, fat:  6, aliases: ["dried plantain porridge", "ekiti gbodo"] },
  { name: "akidi porridge",         calories: 290, protein: 18, carbs: 38, fat:  6, aliases: ["black beans porridge", "igbo akidi"] },
  { name: "corn porridge",          calories: 250, protein:  6, carbs: 50, fat:  4, aliases: ["corn pottage", "agbado porridge"] },
  { name: "groundnut porridge",     calories: 370, protein: 16, carbs: 30, fat: 22, aliases: ["peanut porridge", "geda porridge"] },

  // ────────────────────────────────────────────────────────────
  //  BREAKFAST
  // ────────────────────────────────────────────────────────────
  { name: "akamu",                  calories: 130, protein:  2, carbs: 28, fat:  1, aliases: ["pap", "ogi", "corn pap", "ogi baba"] },
  { name: "custard",                calories: 180, protein:  4, carbs: 34, fat:  4, aliases: ["golden morn custard", "custard powder"] },
  { name: "oatmeal",                calories: 160, protein:  5, carbs: 30, fat:  3, aliases: ["oats", "quaker oats"] },
  { name: "agege bread",            calories: 270, protein:  8, carbs: 50, fat:  4, aliases: ["bread", "soft bread", "agege"] },
  { name: "bread and egg",          calories: 380, protein: 14, carbs: 50, fat: 14, aliases: ["bread egg", "agege egg"] },
  { name: "akamu and akara",        calories: 350, protein:  9, carbs: 42, fat: 11, aliases: ["pap akara", "ogi akara"] },
  { name: "ogi baba",               calories: 140, protein:  2, carbs: 30, fat:  1, aliases: ["sorghum pap", "baba pap"] },
  { name: "koko",                   calories: 120, protein:  2, carbs: 26, fat:  1, aliases: ["hausa koko", "spiced millet porridge"] },
  { name: "nono",                   calories: 100, protein:  4, carbs: 10, fat:  4, aliases: ["sour milk hausa", "fermented milk"] },
  { name: "masa and miyan",         calories: 370, protein:  9, carbs: 62, fat: 12, aliases: ["masa with soup", "rice cake soup"] },

  // ────────────────────────────────────────────────────────────
  //  SIDES & EXTRAS
  // ────────────────────────────────────────────────────────────
  { name: "coleslaw",               calories: 140, protein:  2, carbs: 14, fat:  8, aliases: ["salad", "creamy coleslaw"] },
  { name: "fried yam",              calories: 310, protein:  4, carbs: 58, fat: 10, aliases: ["dundu", "yam chips"] },
  { name: "boiled yam",             calories: 210, protein:  3, carbs: 48, fat:  0, aliases: ["yam", "ji", "boiled ji"] },
  { name: "boiled plantain",        calories: 160, protein:  1, carbs: 38, fat:  0, aliases: ["boiled unripe plantain"] },
  { name: "roasted yam",            calories: 230, protein:  3, carbs: 52, fat:  2, aliases: ["baked yam", "oven yam"] },
  { name: "sweet potato",           calories: 190, protein:  2, carbs: 44, fat:  0, aliases: ["dundun odunkun", "sweet potato fried"] },
  { name: "boiled cocoyam",         calories: 180, protein:  3, carbs: 40, fat:  0, aliases: ["ede", "cocoyam boiled"] },
  { name: "garden egg sauce",       calories: 120, protein:  4, carbs: 14, fat:  6, aliases: ["garden egg salad", "eggplant sauce"] },
  { name: "ofada sauce",            calories: 280, protein:  8, carbs: 12, fat: 22, aliases: ["ayamase", "designer stew", "ofada stew"] },
  { name: "ugba salad",             calories: 300, protein: 14, carbs: 16, fat: 20, aliases: ["oil bean salad", "ukpaka"] },
  { name: "mashed potatoes",        calories: 180, protein:  4, carbs: 36, fat:  4, aliases: ["potatoes", "mashed potato"] },

  // ────────────────────────────────────────────────────────────
  //  FULL MEAL COMBOS
  // ────────────────────────────────────────────────────────────
  { name: "amala and ewedu",        calories: 420, protein:  9, carbs: 78, fat:  6, aliases: ["amala ewedu gbegiri", "amala ewedu"] },
  { name: "pounded yam and egusi",  calories: 740, protein: 22, carbs: 87, fat: 32, aliases: ["iyan egusi", "pounded yam egusi"] },
  { name: "eba and ogbono",         calories: 680, protein: 19, carbs: 81, fat: 28, aliases: ["garri ogbono", "eba ogbono"] },
  { name: "rice and stew",          calories: 530, protein: 10, carbs: 88, fat: 15, aliases: ["rice stew", "rice and tomato stew"] },
  { name: "rice and chicken",       calories: 630, protein: 38, carbs: 78, fat: 16, aliases: ["rice chicken", "white rice chicken"] },
  { name: "jollof rice and chicken",calories: 790, protein: 40, carbs: 86, fat: 28, aliases: ["jollof chicken", "party rice chicken"] },
  { name: "tuwo and miyan kuka",    calories: 550, protein: 14, carbs: 84, fat: 15, aliases: ["tuwo kuka", "tuwon miyan kuka"] },
  { name: "eba and egusi",          calories: 720, protein: 21, carbs: 84, fat: 32, aliases: ["garri egusi", "eba egusi"] },
  { name: "semo and efo riro",      calories: 565, protein: 25, carbs: 74, fat: 23, aliases: ["semovita efo", "semo efo"] },
  { name: "amala and gbegiri ewedu",calories: 560, protein: 20, carbs: 92, fat: 20, aliases: ["abula amala", "yoruba combo"] },
  { name: "fufu and oha soup",      calories: 570, protein: 19, carbs: 70, fat: 22, aliases: ["akpu oha", "fufu oha"] },
  { name: "starch and banga",       calories: 650, protein: 15, carbs: 76, fat: 32, aliases: ["delta starch banga", "starch banga"] },
  { name: "tuwo and miyan taushe",  calories: 570, protein: 16, carbs: 86, fat: 17, aliases: ["tuwon taushe", "pumpkin tuwo"] },

  // ────────────────────────────────────────────────────────────
  //  DRINKS & BEVERAGES
  // ────────────────────────────────────────────────────────────
  { name: "zobo",                   calories:  60, protein:  0, carbs: 14, fat:  0, aliases: ["zobo drink", "hibiscus drink", "sobolo"] },
  { name: "kunu",                   calories: 120, protein:  2, carbs: 26, fat:  1, aliases: ["kunu zaki", "millet drink"] },
  { name: "fura da nono",           calories: 180, protein:  6, carbs: 28, fat:  4, aliases: ["fura nono", "fura de nunu"] },
  { name: "tiger nut milk",         calories: 140, protein:  2, carbs: 26, fat:  6, aliases: ["tigernut drink", "kunun aya"] },
  { name: "palm wine",              calories: 100, protein:  0, carbs: 18, fat:  0, aliases: ["emu", "nkwu enu", "mmanya ocha"] },
  { name: "burukutu",               calories: 110, protein:  1, carbs: 20, fat:  0, aliases: ["sorghum beer", "local beer", "burkutu"] },
  { name: "kunu gyada",             calories: 160, protein:  4, carbs: 22, fat:  6, aliases: ["groundnut kunu", "gyada drink"] },
  { name: "tamarind drink",         calories:  70, protein:  0, carbs: 16, fat:  0, aliases: ["tsamiya drink", "tamarind juice"] },
  { name: "sobo drink",             calories:  55, protein:  0, carbs: 13, fat:  0, aliases: ["sobolo", "red drink", "bissap"] },
  { name: "coconut water",          calories:  45, protein:  0, carbs: 10, fat:  0, aliases: ["agbon water", "coconut drink"] },
  { name: "fresh orange juice",     calories:  90, protein:  1, carbs: 22, fat:  0, aliases: ["orange juice", "omi osan"] },
  { name: "watermelon juice",       calories:  80, protein:  1, carbs: 20, fat:  0, aliases: ["watermelon drink"] },
  { name: "ogi drink",              calories:  80, protein:  1, carbs: 18, fat:  0, aliases: ["watery pap", "light ogi drink"] },

];

export default baseFoodDB;