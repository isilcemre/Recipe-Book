import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { DEFAULT_IMAGE } from "../interfaces/Recipe";
import ConfirmModal from "../components/ConfirmModal";

export default function RecipeDetail({
  getRecipeById,
  onToggleFavorite,
  onDelete,
}) {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = getRecipeById(id);
  const [showConfirm, setShowConfirm] = useState(false);

  if (!recipe) {
    return (
      <div className="empty-state">
        <p>Bu tarif bulunamadı ya da silinmiş olabilir.</p>
        <Link to="/" className="btn btn-brand">
          Tariflere Dön
        </Link>
      </div>
    );
  }

  const handleDelete = () => {
    onDelete(recipe.id);
    navigate("/");
  };

  return (
    <div className="recipe-detail">
      <Link to="/" className="back-link mb-3 d-inline-block">
        ← Tariflere dön
      </Link>

      <div className="row g-4">
        <div className="col-md-6">
          <img
            src={recipe.image || DEFAULT_IMAGE}
            alt={recipe.name}
            className="detail-img"
            onError={(e) => (e.target.src = DEFAULT_IMAGE)}
          />
        </div>
        <div className="col-md-6">
          <span className="badge category-badge mb-2">{recipe.category}</span>
          <h1 className="detail-title">
            {recipe.name}{" "}
            <button
              className="favorite-btn-inline"
              onClick={() => onToggleFavorite(recipe.id)}
            >
              {recipe.favorite ? "❤️" : "🤍"}
            </button>
          </h1>

          <div className="detail-meta">
            <div>
              <span className="meta-label">Süre</span>
              <span className="meta-value">⏱ {recipe.duration} dk</span>
            </div>
            <div>
              <span className="meta-label">Zorluk</span>
              <span className="meta-value">📶 {recipe.difficulty}</span>
            </div>
            <div>
              <span className="meta-label">Porsiyon</span>
              <span className="meta-value">🍽 {recipe.servings} kişilik</span>
            </div>
          </div>

          <h5 className="mt-4 mb-2">Malzemeler</h5>
          <ul className="ingredient-list">
            {recipe.ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>

          <div className="d-flex gap-2 mt-4">
            <Link
              to={`/tarif-duzenle/${recipe.id}`}
              className="btn btn-outline-secondary"
            >
              Düzenle
            </Link>
            <button
              className="btn btn-outline-danger"
              onClick={() => setShowConfirm(true)}
            >
              Sil
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h5 className="mb-2">Hazırlanışı</h5>
        <p className="instructions-text">{recipe.instructions}</p>
      </div>

      <ConfirmModal
        show={showConfirm}
        message={`"${recipe.name}" tarifini silmek istediğine emin misin?`}
        onCancel={() => setShowConfirm(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
}
