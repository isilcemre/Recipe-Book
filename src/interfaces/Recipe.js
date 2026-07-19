// Recipe "interface" (JS ile - JSDoc tip tanımı olarak kullanılıyor)
/**
 * @typedef {Object} Recipe
 * @property {string} id
 * @property {string} name
 * @property {string} image
 * @property {string} category
 * @property {number} duration - dakika
 * @property {string} difficulty - "Kolay" | "Orta" | "Zor"
 * @property {number} servings - porsiyon
 * @property {string[]} ingredients
 * @property {string} instructions
 * @property {boolean} favorite
 * @property {number} createdAt
 */

export const CATEGORIES = [
  "Ana Yemek",
  "Çorba",
  "Salata",
  "Tatlı",
  "Kahvaltı",
  "Aperatif",
  "İçecek",
];

export const DIFFICULTIES = ["Kolay", "Orta", "Zor"];

export const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=600&q=80&auto=format&fit=crop";

export function createEmptyRecipe() {
  return {
    id: "",
    name: "",
    image: "",
    category: CATEGORIES[0],
    duration: 30,
    difficulty: DIFFICULTIES[0],
    servings: 2,
    ingredients: [],
    instructions: "",
    favorite: false,
    createdAt: Date.now(),
  };
}

export function generateId() {
  return `recipe_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}
