import { useState } from "react";
import { Link } from "react-router-dom";
import IngredientSelector from "../components/IngredientSelector";

export default function AvailableIngredients({
  allIngredients,
  findRecipesByIngredients,
}) {
  const [selected, setSelected] = useState([]);
  const [results, setResults] = useState(null);

  const handleSearch = () => {
    setResults(findRecipesByIngredients(selected));
  };

  return (
    <div>
      <h1 className="page-title mb-2">🧺 Elde Ne Var?</h1>
      <p className="text-muted mb-4">
        Evindeki malzemeleri işaretle, sana en uygun tarifleri bulalım.
      </p>

      <IngredientSelector
        allIngredients={allIngredients}
        selected={selected}
        onChange={setSelected}
      />

      <button
        className="btn btn-brand mt-4 px-4"
        onClick={handleSearch}
        disabled={selected.length === 0}
      >
        Tarif Bul
      </button>

      {results && (
        <div className="mt-4">
          <h5 className="mb-3">Sonuçlar ({results.length})</h5>
          {results.length === 0 ? (
            <div className="empty-state">
              <p className="mb-0">
                Seçtiğin malzemelerle eşleşen bir tarif bulunamadı. Farklı
                malzemeler deneyebilirsin.
              </p>
            </div>
          ) : (
            <div className="d-flex flex-column gap-3">
              {results.map(({ recipe, matchPercent, missing }) => (
                <div key={recipe.id} className="match-result-card">
                  <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                    <div>
                      <Link
                        to={`/tarif/${recipe.id}`}
                        className="match-recipe-name"
                      >
                        {recipe.name}
                      </Link>
                      <div className="text-muted small">
                        {recipe.category} · {recipe.duration} dk
                      </div>
                    </div>
                    <span className="match-badge">
                      %{matchPercent} eşleşme
                    </span>
                  </div>
                  {missing.length > 0 && (
                    <div className="missing-ingredients mt-2">
                      Eksik: {missing.join(", ")}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
