import { useFavorites } from "../context/FavoritesContext";
import { FoodCard } from "./FoodCard";
export const Favorites = () => {
    const { favorites } = useFavorites();
  
    return (
      <div className="p-8 dark:bg-gray-900 min-h-screen">
        <h1 className="text-3xl font-bold mb-8 dark:text-white">Favorites</h1>
        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((item) => (
              <FoodCard key={item.id} item={item} image={item.foodImage} />
            ))}
          </div>
        ) : (
          <p className="text-gray-600 dark:text-gray-400">No favorite items yet. Click the ♡ icon to add some!</p>
        )}
      </div>
    );
  };