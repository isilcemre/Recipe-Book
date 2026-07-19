import { useMemo, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import CategoryFilter from "../components/CategoryFilter";
import RandomRecipeButton from "../components/RandomRecipeButton";
import ConfirmModal from "../components/ConfirmModal";

export default function Home({
  recipes,
  searchTerm,
  onToggleFavorite,
  onDelete,
  getRandomRecipe,
}) {
  const [category, setCategory] = useState("Tümü");
  const [toDelete, setToDelete] = useState(null);

  const filtered = useMemo(() => {
    return recipes.filter((r) => {
      const matchesSearch = r.name
        .toLocaleLowerCase("tr")
        .includes(searchTerm.toLocaleLowerCase("tr"));
      const matchesCategory = category === "Tümü" || r.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [recipes, searchTerm, category]);

  return (
    <div>
      <div className="hero-banner mb-4">
        <div>
          <h1 className="hero-title">Bugün ne pişirsen?</h1>
          <p className="hero-subtitle">
            {recipes.length} tarif kayıtlı. Karar veremiyorsan zarı at, ya da
            elindeki malzemelere göre tarif bul.
          </p>
        </div>
        <RandomRecipeButton onPick={getRandomRecipe} />
      </div>

      <CategoryFilter selected={category} onSelect={setCategory} />

      {filtered.length === 0 ? (
        <div className="empty-state">
          <p className="mb-0">
            Aradığın kriterlere uyan bir tarif bulunamadı. Belki yeni bir
            tarif eklemenin zamanı gelmiştir!
          </p>
        </div>
      ) : (
        <div className="row g-4 mt-1">
          {filtered.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onToggleFavorite={onToggleFavorite}
              onDelete={setToDelete}
            />
          ))}
        </div>
      )}

      <ConfirmModal
        show={!!toDelete}
        message={
          toDelete
            ? `"${toDelete.name}" tarifini silmek istediğine emin misin?`
            : ""
        }
        onCancel={() => setToDelete(null)}
        onConfirm={() => {
          onDelete(toDelete.id);
          setToDelete(null);
        }}
      />
    </div>
  );
}
