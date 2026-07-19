import { useNavigate } from "react-router-dom";
import RecipeForm from "../components/RecipeForm";

export default function AddRecipe({ onAdd }) {
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    const created = onAdd(formData);
    navigate(`/tarif/${created.id}`);
  };

  return (
    <div>
      <h1 className="page-title mb-4">Yeni Tarif Ekle</h1>
      <RecipeForm onSubmit={handleSubmit} submitLabel="Tarifi Kaydet" />
    </div>
  );
}
