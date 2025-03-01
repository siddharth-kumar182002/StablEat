import { useState } from 'react';
import { useDeliveryTime } from "../hooks/useDeliveryTime";
import { useCart } from "../context/CartContext";

export const OrderForm = () => {
  const { cartItems, updateQuantity, updateDistance } = useCart();
  const { calculateTimes } = useDeliveryTime();
  const { itemsWithTimes, maxTotalTime } = calculateTimes(cartItems);

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-xl font-bold mb-4">New Order</h2>
      
      {cartItems.length > 0 ? (
        <>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Selected Items:</h3>
            {itemsWithTimes.map((item) => (
              <div key={item.id} className="mb-4 pb-2 border-b">
                <div className="flex justify-between items-center mb-2">
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
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex-1">
                    <label className="text-sm text-gray-600">Distance (km)</label>
                    <input
                      type="number"
                      value={item.distance}
                      onChange={(e) => updateDistance(item.id, e.target.value)}
                      className="p-2 border rounded w-full"
                      min="0"
                      step="0.1"
                      placeholder="Enter distance"
                    />
                  </div>
                  {item.distance && (
                    <div className="text-sm text-gray-600">
                      <span>Transit: {item.transitTime}min</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center mt-4 pt-2 border-t">
              <span className="font-bold">Total Price:</span>
              <span className="font-bold">${totalPrice.toFixed(2)}</span>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded">
            <h3 className="font-semibold mb-2">Delivery Summary</h3>
            <p className="text-lg">
              Maximum Estimated Delivery Time: {maxTotalTime} minutes
            </p>
            <div className="mt-2 text-sm text-gray-600">
              <p>Preparation Time: {Math.max(...cartItems.map(i => i.preparationTime))}min</p>
              <p>Delivery Window: {cartItems[0]?.deliveryWindow || 7}min</p>
            </div>
          </div>
        </>
      ) : (
        <p className="text-gray-500">No items in cart. Select items from the home page.</p>
      )}
    </div>
  );
};