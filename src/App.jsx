import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Toast from "./components/Toast";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import AddRecipe from "./pages/AddRecipe";
import EditRecipe from "./pages/EditRecipe";
import RecipeDetail from "./pages/RecipeDetail";
import AvailableIngredients from "./pages/AvailableIngredients";
import Login from "./pages/Login";
import Register from "./pages/Register";
import useRecipes from "./hooks/useRecipes";
import useAuth from "./hooks/useAuth";

export default function App() {
  const {
    recipes,
    addRecipe,
    updateRecipe,
    deleteRecipe,
    toggleFavorite,
    getRecipeById,
    getRandomRecipe,
    findRecipesByIngredients,
    allIngredients,
  } = useRecipes();

  const { currentUser, register, login, logout } = useAuth();

  const [searchTerm, setSearchTerm] = useState("");
  const [toast, setToast] = useState({ show: false, message: "" });

  const notify = (message) => setToast({ show: true, message });

  const handleAdd = (data) => {
    const created = addRecipe(data);
    notify("Tarif eklendi 🎉");
    return created;
  };

  const handleUpdate = (id, data) => {
    updateRecipe(id, data);
    notify("Tarif güncellendi ✅");
  };

  const handleDelete = (id) => {
    deleteRecipe(id);
    notify("Tarif silindi 🗑️");
  };

  const handleLogout = () => {
    logout();
    notify("Çıkış yapıldı 👋");
  };

  return (
    <div className="app-shell">
      {currentUser && (
        <Navbar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          currentUser={currentUser}
          onLogout={handleLogout}
        />
      )}

      <main className={currentUser ? "container py-4" : ""}>
        <Routes>
          <Route path="/giris" element={<Login onLogin={login} />} />
          <Route path="/kayit-ol" element={<Register onRegister={register} />} />

          <Route
            path="/"
            element={
              <ProtectedRoute currentUser={currentUser}>
                <Home
                  recipes={recipes}
                  searchTerm={searchTerm}
                  onToggleFavorite={toggleFavorite}
                  onDelete={handleDelete}
                  getRandomRecipe={getRandomRecipe}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/favoriler"
            element={
              <ProtectedRoute currentUser={currentUser}>
                <Favorites
                  recipes={recipes}
                  onToggleFavorite={toggleFavorite}
                  onDelete={handleDelete}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/elde-ne-var"
            element={
              <ProtectedRoute currentUser={currentUser}>
                <AvailableIngredients
                  allIngredients={allIngredients}
                  findRecipesByIngredients={findRecipesByIngredients}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tarif-ekle"
            element={
              <ProtectedRoute currentUser={currentUser}>
                <AddRecipe onAdd={handleAdd} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tarif-duzenle/:id"
            element={
              <ProtectedRoute currentUser={currentUser}>
                <EditRecipe getRecipeById={getRecipeById} onUpdate={handleUpdate} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tarif/:id"
            element={
              <ProtectedRoute currentUser={currentUser}>
                <RecipeDetail
                  getRecipeById={getRecipeById}
                  onToggleFavorite={toggleFavorite}
                  onDelete={handleDelete}
                />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      <Toast
        show={toast.show}
        message={toast.message}
        onClose={() => setToast({ show: false, message: "" })}
      />
    </div>
  );
}
