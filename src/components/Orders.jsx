import { OrderForm } from './OrderForm';
import { DeliveryBreakdown } from './DeliveryBreakdown';
import { RecentOrders } from './RecentOrders';
import { OrderHistory } from './OrderHistory';
import { useCart } from '../context/CartContext';

export const Orders = () => {
  const { cartItems } = useCart();

  return (
    <div className="max-w-3xl mx-auto">
      {/* Reward Points Card */}
      <div className="mb-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-2 dark:text-white">My Reward Points</h2>
        <p className="text-2xl text-blue-600 dark:text-blue-400">1250 pts</p>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-[300px]">
          <OrderForm />
        </div>
        
        {cartItems.length > 0 && (
          <div className="flex-1 min-w-[300px]">
            <DeliveryBreakdown
              preparation={Math.max(...cartItems.map(item => item.preparationTime))}
              transit={Math.max(...cartItems.map(item => item.distance)) * 2}
              deliveryWindow={cartItems[0]?.deliveryWindow || 7}
            />
          </div>
        )}
      </div>

      {/* Recent Orders and History */}
      <div className="mt-8 space-y-8">
        <RecentOrders />
        <OrderHistory />
      </div>
    </div>
  );
};