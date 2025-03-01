import { FoodCard } from './FoodCard';
import foodImage from '../assets/image.png';
import { useCart } from '../context/CartContext';

export const Home = () => {
  const { addToCart } = useCart();
  
  const foodItems = [
    { 
      id: 1, 
      name: 'Pepperoni Pizza', 
      price: 14.99, 
      description: 'Classic pepperoni with mozzarella',
      restaurant: 'Pizza Palace',
      preparationTime: 20,
      deliveryWindow: 7
    },
    { 
      id: 2,
      name: 'Cheese Burger', 
      price: 12.50, 
      description: 'Juicy beef patty with cheese',
      restaurant: 'Burger Joint',
      preparationTime: 15,
      deliveryWindow: 7
    },
    // Add other items with similar structure
  ];

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-8">Today's Specials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {foodItems.map((item) => (
          <FoodCard
            key={item.id}
            item={item}
            image={foodImage}
            onAddToCart={() => addToCart(item)}
          />
        ))}
      </div>
    </div>
  );
};