import { useCallback, useMemo } from "react";
import useLocalStorage from "./useLocalStorage";
import sampleRecipes from "../data/sampleRecipes";
import { generateId } from "../interfaces/Recipe";

const STORAGE_KEY = "myRecipeBook.recipes";

export default function useRecipes() {
  const [recipes, setRecipes] = useLocalStorage(STORAGE_KEY, sampleRecipes);

  const addRecipe = useCallback(
    (recipeData) => {
      const newRecipe = {
        ...recipeData,
        id: generateId(),
        favorite: false,
        createdAt: Date.now(),
      };
      setRecipes((prev) => [newRecipe, ...prev]);
      return newRecipe;
    },
    [setRecipes]
  );

  const updateRecipe = useCallback(
    (id, updates) => {
      setRecipes((prev) =>
        prev.map((r) => (r.id === id ? { ...r, ...updates, id } : r))
      );
    },
    [setRecipes]
  );

  const deleteRecipe = useCallback(
    (id) => {
      setRecipes((prev) => prev.filter((r) => r.id !== id));
    },
    [setRecipes]
  );

  const toggleFavorite = useCallback(
    (id) => {
      setRecipes((prev) =>
        prev.map((r) => (r.id === id ? { ...r, favorite: !r.favorite } : r))
      );
    },
    [setRecipes]
  );

  const getRecipeById = useCallback(
    (id) => recipes.find((r) => r.id === id),
    [recipes]
  );

  const getRandomRecipe = useCallback(() => {
    if (recipes.length === 0) return null;
    const index = Math.floor(Math.random() * recipes.length);
    return recipes[index];
  }, [recipes]);

  // Kullanıcının seçtiği malzemelerle en çok eşleşen tarifleri sırala
  const findRecipesByIngredients = useCallback(
    (selectedIngredients) => {
      if (!selectedIngredients || selectedIngredients.length === 0) return [];
      const selectedLower = selectedIngredients.map((i) => i.toLowerCase());

      return recipes
        .map((recipe) => {
          const recipeIngredientsLower = recipe.ingredients.map((i) =>
            i.toLowerCase()
          );
          const matchCount = recipeIngredientsLower.filter((ing) =>
            selectedLower.includes(ing)
          ).length;
          const missing = recipe.ingredients.filter(
            (ing) => !selectedLower.includes(ing.toLowerCase())
          );
          return {
            recipe,
            matchCount,
            missingCount: missing.length,
            missing,
            matchPercent: Math.round(
              (matchCount / recipe.ingredients.length) * 100
            ),
          };
        })
        .filter((r) => r.matchCount > 0)
        .sort((a, b) => b.matchPercent - a.matchPercent || b.matchCount - a.matchCount);
    },
    [recipes]
  );

  const allIngredients = useMemo(() => {
    const set = new Set();
    recipes.forEach((r) => r.ingredients.forEach((i) => set.add(i)));
    return Array.from(set).sort((a, b) => a.localeCompare(b, "tr"));
  }, [recipes]);

  return {
    recipes,
    addRecipe,
    updateRecipe,
    deleteRecipe,
    toggleFavorite,
    getRecipeById,
    getRandomRecipe,
    findRecipesByIngredients,
    allIngredients,
  };
}
