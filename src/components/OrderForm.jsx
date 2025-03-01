import { useDeliveryTime } from "../hooks/useDeliveryTime";

export const OrderForm = ({ distance, setDistance }) => {
  const { calculateTimes } = useDeliveryTime();
  const times = calculateTimes(distance);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-xl font-bold mb-4">New Order</h2>
      <div className="flex flex-col gap-4">
        <div>
          <label className="block mb-2">Distance (km)</label>
          <input
            type="number"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            className="p-2 border rounded w-full"
            min="1"
          />
        </div>
        
        <div className="bg-blue-50 p-4 rounded">
          <p className="font-semibold">
            Estimated Delivery Time: {times.total} minutes
          </p>
        </div>
      </div>
    </div>
  );
};