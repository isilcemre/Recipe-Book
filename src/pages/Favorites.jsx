import { useState } from "react";
import RecipeCard from "../components/RecipeCard";
import ConfirmModal from "../components/ConfirmModal";

export default function Favorites({ recipes, onToggleFavorite, onDelete }) {
  const [toDelete, setToDelete] = useState(null);
  const favorites = recipes.filter((r) => r.favorite);

  return (
    <div>
      <h1 className="page-title mb-4">❤️ Favori Tariflerim</h1>

      {favorites.length === 0 ? (
        <div className="empty-state">
          <p className="mb-0">
            Henüz favori tarifin yok. Beğendiğin tariflerin üzerindeki kalbe
            tıklayarak buraya ekleyebilirsin.
          </p>
        </div>
      ) : (
        <div className="row g-4">
          {favorites.map((recipe) => (
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
