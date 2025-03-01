import { useCart } from "../context/CartContext";

export const OrderForm = () => {
  const { cartItems, updateQuantity, updateDistance } = useCart();
  
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryCharge = cartItems.reduce((sum, item) => sum + (parseFloat(item.distance || 0) * 2), 0);
  const tax = totalPrice * 0.05;
  const totalAmount = totalPrice + tax + deliveryCharge;

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-xl font-bold mb-4 dark:text-white">New Order</h2>
      
      {cartItems.length > 0 ? (
        <>
          <div className="mb-6">
            <h3 className="font-semibold mb-2 dark:text-gray-200">Selected Items:</h3>
            <div className="overflow-y-auto pr-2 max-h-[360px]">
              {cartItems.map((item) => (
                <div key={item.id} className="mb-4 pb-2 border-b dark:border-gray-700">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex-1">
                      <p className="font-medium dark:text-gray-200">{item.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{item.restaurant}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                        >
                          -
                        </button>
                        <span className="dark:text-gray-200">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600"
                        >
                          +
                        </button>
                      </div>
                      <span className="w-20 text-right dark:text-gray-200">
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-2">
                      <div className="w-24">
                        <label className="text-sm text-gray-600 dark:text-gray-400">Distance (km)</label>
                        <input
                          type="number"
                          value={item.distance}
                          onChange={(e) => updateDistance(item.id, e.target.value)}
                          className="p-2 border rounded w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                          min="0"
                          step="0.1"
                          placeholder="0"
                        />
                      </div>
                      {item.distance && (
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          <span>₹{(item.distance * 2).toFixed(2)}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t dark:border-gray-700">
              <div className="space-y-2">
                <div className="flex justify-between dark:text-gray-300">
                  <span>Subtotal:</span>
                  <span>₹{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between dark:text-gray-300">
                  <span>Tax (5%):</span>
                  <span>₹{tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between dark:text-gray-300">
                  <span>Delivery Charge:</span>
                  <span>₹{deliveryCharge.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold pt-2 dark:text-white">
                  <span>Total Amount:</span>
                  <span>₹{totalAmount.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p className="text-gray-500 dark:text-gray-400">No items in cart. Select items from the home page.</p>
      )}
    </div>
  );
};