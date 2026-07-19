import { useState } from "react";

export default function IngredientSelector({
  allIngredients,
  selected,
  onChange,
}) {
  const [customIngredient, setCustomIngredient] = useState("");

  const toggle = (ingredient) => {
    if (selected.includes(ingredient)) {
      onChange(selected.filter((i) => i !== ingredient));
    } else {
      onChange([...selected, ingredient]);
    }
  };

  const addCustom = (e) => {
    e.preventDefault();
    const trimmed = customIngredient.trim();
    if (!trimmed) return;
    if (!selected.includes(trimmed)) {
      onChange([...selected, trimmed]);
    }
    setCustomIngredient("");
  };

  return (
    <div>
      <div className="ingredient-grid">
        {allIngredients.map((ingredient) => (
          <label key={ingredient} className="ingredient-check">
            <input
              type="checkbox"
              checked={selected.includes(ingredient)}
              onChange={() => toggle(ingredient)}
            />
            <span>{ingredient}</span>
          </label>
        ))}
      </div>

      <form className="d-flex gap-2 mt-3" onSubmit={addCustom}>
        <input
          type="text"
          className="form-control"
          placeholder="Listede yoksa buraya yazıp ekleyin..."
          value={customIngredient}
          onChange={(e) => setCustomIngredient(e.target.value)}
        />
        <button className="btn btn-outline-secondary" type="submit">
          Ekle
        </button>
      </form>
    </div>
  );
}
