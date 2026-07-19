import { useParams, useNavigate, Link } from "react-router-dom";
import RecipeForm from "../components/RecipeForm";

export default function EditRecipe({ getRecipeById, onUpdate }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = getRecipeById(id);

  if (!recipe) {
    return (
      <div className="empty-state">
        <p>Tarif bulunamadı.</p>
        <Link to="/" className="btn btn-brand">
          Tariflere Dön
        </Link>
      </div>
    );
  }

  const handleSubmit = (formData) => {
    onUpdate(id, formData);
    navigate(`/tarif/${id}`);
  };

  return (
    <div>
      <h1 className="page-title mb-4">Tarifi Düzenle</h1>
      <RecipeForm
        initialData={recipe}
        onSubmit={handleSubmit}
        submitLabel="Değişiklikleri Kaydet"
      />
    </div>
  );
}
