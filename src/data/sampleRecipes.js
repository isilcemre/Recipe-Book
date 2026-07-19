const sampleRecipes = [
  {
    id: "recipe_seed_1",
    name: "Klasik Makarna",
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=700&q=80&auto=format&fit=crop",
    category: "Ana Yemek",
    duration: 25,
    difficulty: "Kolay",
    servings: 2,
    ingredients: ["Makarna", "Domates", "Kaşar", "Tereyağı", "Tuz"],
    instructions:
      "Makarnayı kaynar suda haşlayın. Ayrı bir tavada tereyağını eritip doğranmış domatesleri ekleyip birkaç dakika soteleyin. Süzülmüş makarnayı sosla karıştırın, üzerine kaşar rendeleyip servis edin.",
    favorite: true,
    createdAt: Date.now() - 100000,
  },
  {
    id: "recipe_seed_2",
    name: "Tavuklu Sebzeli Sote",
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=700&q=80&auto=format&fit=crop",
    category: "Ana Yemek",
    duration: 35,
    difficulty: "Orta",
    servings: 3,
    ingredients: ["Tavuk", "Soğan", "Biber", "Domates", "Zeytinyağı", "Tuz"],
    instructions:
      "Tavukları küp küp doğrayıp zeytinyağında mühürleyin. Soğan ve biberleri ekleyip birkaç dakika soteleyin. Domatesleri ilave edip kısık ateşte 15 dakika pişirin.",
    favorite: false,
    createdAt: Date.now() - 90000,
  },
  {
    id: "recipe_seed_3",
    name: "Mercimek Çorbası",
    image:
      "https://www.mynet.com/kolay-mercimek-corbasi-tarifi-kolay-mercimek-corbasi-nasil-yapilir-1251013-myyemek",
    category: "Çorba",
    duration: 40,
    difficulty: "Kolay",
    servings: 4,
    ingredients: ["Kırmızı mercimek", "Soğan", "Havuç", "Tereyağı", "Un", "Tuz"],
    instructions:
      "Soğan ve havucu tereyağında kavurun. Mercimek ve suyu ekleyip mercimekler yumuşayana kadar pişirin. Blenderdan geçirip un ile açılmış tereyağını ilave ederek servis edin.",
    favorite: true,
    createdAt: Date.now() - 80000,
  },
  {
    id: "recipe_seed_4",
    name: "Çikolatalı Sufle",
    image:
      "https://cookidoo.com.tr/recipes/recipe/tr-TR/r933313",
    category: "Tatlı",
    duration: 20,
    difficulty: "Orta",
    servings: 2,
    ingredients: ["Çikolata", "Yumurta", "Şeker", "Un", "Tereyağı"],
    instructions:
      "Çikolata ve tereyağını benmari usulü eritin. Yumurta ve şekeri çırpıp çikolatalı karışıma ekleyin, un ile harmanlayın. Kalıplara dökülen karışımı önceden ısıtılmış fırında 10-12 dakika pişirin.",
    favorite: false,
    createdAt: Date.now() - 70000,
  },
  {
    id: "recipe_seed_5",
    name: "Menemen",
    image:
      "https://www.lezzet.com.tr/yemek-tarifleri/pratik-yemekler/pratik-yemek-tarifleri/kislik-pratik-menemen-tarifi",
    category: "Kahvaltı",
    duration: 15,
    difficulty: "Kolay",
    servings: 2,
    ingredients: ["Yumurta", "Domates", "Biber", "Zeytinyağı", "Tuz"],
    instructions:
      "Biberleri zeytinyağında soteleyin, domatesleri ekleyip suyunu çekene kadar pişirin. Yumurtaları kırıp karıştırarak veya bütün olarak pişirip servis edin.",
    favorite: false,
    createdAt: Date.now() - 60000,
  },
];

export default sampleRecipes;
