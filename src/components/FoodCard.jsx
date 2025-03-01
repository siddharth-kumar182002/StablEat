import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';

export const FoodCard = ({ item, image }) => {
  const { cartItems, addToCart, updateQuantity } = useCart();
  const { favorites, toggleFavorite } = useFavorites();
  const cartItem = cartItems.find(i => i.id === item.id);
  const isFavorite = favorites.some(fav => fav.id === item.id);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={image} 
        alt={item.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        {/* Title Section */}
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-semibold dark:text-white">{item.name}</h3>
            {item.rating && (
              <div className="flex items-center mt-1">
                <span className="text-yellow-400">★</span>
                <span className="text-sm ml-1 dark:text-gray-300">{item.rating}</span>
              </div>
            )}
          </div>
          <button 
            onClick={() => toggleFavorite(item)}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
          >
            <svg 
              className={`w-6 h-6 ${isFavorite ? 'text-red-500 fill-current' : 'text-gray-400 dark:text-gray-300 fill-none'}`}
              viewBox="0 0 24 24" 
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" 
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-2">{item.description}</p>
        
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          <p>Restaurant: {item.restaurant}</p>
          <p>Prep Time: {item.preparationTime} min</p>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-blue-600 dark:text-blue-400">₹{item.price}</span>
          {cartItem ? (
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(item.id, cartItem.quantity - 1)}
                className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                -
              </button>
              <span className="dark:text-white">{cartItem.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, cartItem.quantity + 1)}
                className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                +
              </button>
            </div>
          ) : (
            <button 
              onClick={() => addToCart(item)}
              className="bg-blue-500 dark:bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};