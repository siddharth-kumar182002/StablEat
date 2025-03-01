import { FoodCard } from './FoodCard';
import Pizza from '../assets/pizza.png';
import Dosa from '../assets/dosa.png';
import Paneer from '../assets/paneer.png'
import GulabJamun from '../assets/GulabJamun.png'
import ChickenCurry from '../assets/ChickenCurry.png'
import EggCurry from '../assets/EggCurry.png'
import { useCart } from '../context/CartContext';

export const Home = () => {
  const { addToCart } = useCart();
  
  const foodItems = [
    { 
      id: 1, 
      name: 'Pepperoni Pizza', 
      price: 450, 
      description: 'Classic pepperoni with mozzarella',
      restaurant: 'Pizza Palace',
      preparationTime: 20,
      deliveryWindow: 7,
      foodImage:Pizza
    },
    { 
      id: 2,
      name: 'Masala dosa', 
      price: 150, 
      description: 'Dosa stuffed with smashed masala',
      restaurant: 'Dosa khalo',
      preparationTime: 15,
      deliveryWindow: 10,
      foodImage:Dosa
    },
    { 
        id: 3, 
        name: 'Paneer Masala', 
        price: 240, 
        description: 'Paneer with indian gravy',
        restaurant: 'Punjabi dhaba',
        preparationTime: 30,
        deliveryWindow: 5,
        foodImage:Paneer
      },
      { 
        id: 4,
        name: 'Gulab Jamun', 
        price: 50, 
        description: 'Big tasty sweets',
        restaurant: 'Milk bar',
        preparationTime:0,
        deliveryWindow: 5,
        foodImage:GulabJamun
      },
      { 
        id: 5, 
        name: 'Chicken Curry', 
        price: 300, 
        description: 'Classic indian Chicken',
        restaurant: 'Krawings',
        preparationTime: 30,
        deliveryWindow: 11,
        foodImage:ChickenCurry
      },
      { 
        id: 6,
        name: 'Egg Curry', 
        price: 120, 
        description: 'Egg filled in masala curry',
        restaurant: 'White rabbit',
        preparationTime: 8,
        deliveryWindow: 8,
        foodImage:EggCurry
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
            image={item.foodImage}
            onAddToCart={() => addToCart(item)}
          />
        ))}
      </div>
    </div>
  );
};