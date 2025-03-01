import { OrderForm } from './OrderForm';
import { DeliveryBreakdown } from './DeliveryBreakdown';
import { RecentOrders } from './RecentOrders';
import { OrderHistory } from './OrderHistory';

export const Orders = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-2">My Reward Points</h2>
        <p className="text-2xl text-blue-600">1250 pts</p>
      </div>
      <OrderForm />
      <DeliveryBreakdown preparation={20} transit={25} deliveryWindow={7} />
      <RecentOrders />
      <OrderHistory />
    </div>
  );
};