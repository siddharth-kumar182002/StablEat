import { useCart } from '../context/CartContext';

export const FoodCard = ({ item, image }) => {
  const { cartItems, addToCart, updateQuantity } = useCart();
  const cartItem = cartItems.find(i => i.id === item.id);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={image} 
        alt={item.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 dark:text-white">{item.name}</h3>
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
                className="bg-gray-200  dark:text-white dark:bg-gray-700 px-3 py-1 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                -
              </button>
              <span className="dark:text-white">{cartItem.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, cartItem.quantity + 1)}
                className="bg-gray-200  dark:text-white dark:bg-gray-700 px-3 py-1 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600"
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