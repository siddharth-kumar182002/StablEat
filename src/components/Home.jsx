import { FoodCard } from './FoodCard';
import foodImage from '../assets/image.png';

export const Home = () => {
  const foodItems = [
    { id: 1, name: 'Pepperoni Pizza', price: 14.99, description: 'Classic pepperoni with mozzarella' },
    { id: 2, name: 'Cheese Burger', price: 12.50, description: 'Juicy beef patty with cheese' },
    { id: 3, name: 'Sushi Platter', price: 18.99, description: 'Assorted sushi selection' },
    { id: 4, name: 'Caesar Salad', price: 10.99, description: 'Fresh romaine lettuce' },
    { id: 5, name: 'Chicken Pasta', price: 15.99, description: 'Creamy Alfredo pasta' },
    { id: 6, name: 'Fruit Smoothie', price: 7.99, description: 'Mixed berry smoothie' },
  ];

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-8">Today's Specials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {foodItems.map((item) => (
          <FoodCard
            key={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
            image={foodImage}
          />
        ))}
      </div>
    </div>
  );
};