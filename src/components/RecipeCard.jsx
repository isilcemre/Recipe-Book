import { Link } from "react-router-dom";
import { DEFAULT_IMAGE } from "../interfaces/Recipe";

const difficultyEmoji = (difficulty) => {
  switch (difficulty) {
    case "Kolay":
      return "🟢";
    case "Orta":
      return "🟡";
    case "Zor":
      return "🔴";
    default:
      return "📶";
  }
};

export default function RecipeCard({ recipe, onToggleFavorite, onDelete }) {
  return (
    <div className="col-sm-6 col-lg-4 col-xl-3">
      <div className="card recipe-card h-100">
        <div className="recipe-card-img-wrap">
          <Link to={`/tarif/${recipe.id}`}>
            <img
              src={recipe.image || DEFAULT_IMAGE}
              className="card-img-top recipe-card-img"
              alt={recipe.name}
              onError={(e) => {
                e.target.src = DEFAULT_IMAGE;
              }}
            />
          </Link>
          <button
            className="favorite-btn"
            onClick={() => onToggleFavorite(recipe.id)}
            aria-label="Favorilere ekle"
            title={recipe.favorite ? "Favorilerden çıkar" : "Favorilere ekle"}
          >
            {recipe.favorite ? "❤️" : "🤍"}
          </button>
        </div>
        <div className="card-body d-flex flex-column">
          <span className="badge category-badge mb-2 align-self-start">
            {recipe.category}
          </span>
          <Link to={`/tarif/${recipe.id}`} className="recipe-title-link">
            <h3 className="recipe-card-title">{recipe.name}</h3>
          </Link>
          <div className="recipe-meta mt-auto">
            <span>⏱ {recipe.duration} dk</span>
            <span>{difficultyEmoji(recipe.difficulty)} {recipe.difficulty}</span>
          </div>
          <div className="d-flex gap-2 mt-3">
            <Link
              to={`/tarif-duzenle/${recipe.id}`}
              className="btn btn-sm btn-outline-secondary flex-fill"
            >
              Düzenle
            </Link>
            <button
              className="btn btn-sm btn-outline-danger flex-fill"
              onClick={() => onDelete(recipe)}
            >
              Sil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
