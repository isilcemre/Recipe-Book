import { useState } from "react";
import { CATEGORIES, DIFFICULTIES, createEmptyRecipe } from "../interfaces/Recipe";

export default function RecipeForm({ initialData, onSubmit, submitLabel }) {
  const [form, setForm] = useState(initialData || createEmptyRecipe());
  const [ingredientInput, setIngredientInput] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const addIngredient = (e) => {
    e.preventDefault();
    const trimmed = ingredientInput.trim();
    if (!trimmed) return;
    setForm((prev) => ({
      ...prev,
      ingredients: [...prev.ingredients, trimmed],
    }));
    setIngredientInput("");
  };

  const removeIngredient = (index) => {
    setForm((prev) => ({
      ...prev,
      ingredients: prev.ingredients.filter((_, i) => i !== index),
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Tarif adı zorunludur.";
    if (!form.instructions.trim())
      newErrors.instructions = "Yapılış adımları zorunludur.";
    if (form.ingredients.length === 0)
      newErrors.ingredients = "En az bir malzeme ekleyin.";
    if (!form.duration || form.duration <= 0)
      newErrors.duration = "Geçerli bir süre girin.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="recipe-form" noValidate>
      <div className="row g-3">
        <div className="col-md-8">
          <label className="form-label">Tarif Adı *</label>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Örn. Karnıyarık"
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        <div className="col-md-4">
          <label className="form-label">Kategori</label>
          <select
            className="form-select"
            value={form.category}
            onChange={(e) => handleChange("category", e.target.value)}
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>


        <div className="col-12">
          <label className="form-label">Fotoğraf (PNG/JPEG)</label>
          <input
            key={form.image || "empty"}
            type="file"
            accept="image/png, image/jpeg"
            className="form-control"
            onChange={(e) => {
              const file = e.target.files[0];
              if (!file) return;

              if (!["image/png", "image/jpeg"].includes(file.type)) {
                alert("Lütfen sadece PNG veya JPEG formatında bir dosya seçin.");
                e.target.value = "";
                return;
              }

              const reader = new FileReader();
              reader.onload = (event) => {
                handleChange("image", event.target.result); // base64 data URL
              };
              reader.readAsDataURL(file);
            }}
          />
          {form.image && (
            <div className="mt-2 d-flex align-items-start gap-2">
              <img
                src={form.image}
                alt="Önizleme"
                className="img-preview"
                onError={(e) => (e.target.style.display = "none")}
              />
              <button
                type="button"
                className="btn btn-outline-danger btn-sm"
                onClick={() => handleChange("image", "")}
              >
                Fotoğrafı Kaldır
              </button>
            </div>
          )}
        </div>

        <div className="col-md-4">
          <label className="form-label">Süre (dakika) *</label>
          <input
            type="number"
            min="1"
            className={`form-control ${errors.duration ? "is-invalid" : ""}`}
            value={form.duration}
            onChange={(e) => handleChange("duration", Number(e.target.value))}
          />
          {errors.duration && (
            <div className="invalid-feedback">{errors.duration}</div>
          )}
        </div>

        <div className="col-md-4">
          <label className="form-label">Zorluk</label>
          <select
            className="form-select"
            value={form.difficulty}
            onChange={(e) => handleChange("difficulty", e.target.value)}
          >
            {DIFFICULTIES.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-4">
          <label className="form-label">Porsiyon</label>
          <input
            type="number"
            min="1"
            className="form-control"
            value={form.servings}
            onChange={(e) => handleChange("servings", Number(e.target.value))}
          />
        </div>

        <div className="col-12">
          <label className="form-label">Malzemeler *</label>
          <div className="d-flex gap-2">
            <input
              type="text"
              className="form-control"
              value={ingredientInput}
              onChange={(e) => setIngredientInput(e.target.value)}
              placeholder="Malzeme yazıp Ekle'ye basın"
              onKeyDown={(e) => {
                if (e.key === "Enter") addIngredient(e);
              }}
            />
            <button className="btn btn-outline-secondary" onClick={addIngredient}>
              Ekle
            </button>
          </div>
          {errors.ingredients && (
            <div className="text-danger small mt-1">{errors.ingredients}</div>
          )}
          <div className="mt-2 d-flex flex-wrap gap-2">
            {form.ingredients.map((ing, i) => (
              <span key={i} className="badge ingredient-badge">
                {ing}
                <button
                  type="button"
                  className="badge-remove-btn"
                  onClick={() => removeIngredient(i)}
                  aria-label="Kaldır"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        <div className="col-12">
          <label className="form-label">Yapılışı *</label>
          <textarea
            className={`form-control ${errors.instructions ? "is-invalid" : ""}`}
            rows="5"
            value={form.instructions}
            onChange={(e) => handleChange("instructions", e.target.value)}
            placeholder="Adım adım hazırlanışını yazın..."
          ></textarea>
          {errors.instructions && (
            <div className="invalid-feedback">{errors.instructions}</div>
          )}
        </div>
      </div>

      <div className="mt-4">
        <button type="submit" className="btn btn-brand px-4">
          {submitLabel || "Kaydet"}
        </button>
      </div>
    </form>
  );
}
