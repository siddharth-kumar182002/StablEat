import { useState } from 'react';
import { useDeliveryTime } from "../hooks/useDeliveryTime";
import { useCart } from "../context/CartContext";

export const OrderForm = () => {
  const { cartItems, updateQuantity } = useCart();
  const [distance, setDistance] = useState('');
  const { calculateTimes } = useDeliveryTime();
  const times = calculateTimes(parseFloat(distance) || 0, cartItems);

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-xl font-bold mb-4">New Order</h2>
      
      {cartItems.length > 0 ? (
        <>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Selected Items:</h3>
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-2">
                <div className="flex-1">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.restaurant}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                  <span className="w-20 text-right">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center mt-4 pt-2 border-t">
              <span className="font-bold">Total:</span>
              <span className="font-bold">${totalPrice.toFixed(2)}</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <label className="block mb-2">Distance (km)</label>
              <input
                type="number"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                className="p-2 border rounded w-full"
                min="1"
                step="0.1"
              />
            </div>
            
            {distance && (
              <div className="bg-blue-50 p-4 rounded">
                <p className="font-semibold">
                  Estimated Delivery Time: {times.total} minutes
                </p>
              </div>
            )}
          </div>
        </>
      ) : (
        <p className="text-gray-500">No items in cart. Select items from the home page.</p>
      )}
    </div>
  );
};