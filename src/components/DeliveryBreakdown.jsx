export const DeliveryBreakdown = ({ preparation, transit, deliveryWindow }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-lg font-bold mb-4">Delivery Time Breakdown</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span>Food Preparation</span>
            <span className="font-medium">{preparation} min</span>
          </div>
          <div className="flex justify-between">
            <span>Transit Time</span>
            <span className="font-medium">{transit} min</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Window</span>
            <span className="font-medium">{deliveryWindow} min</span>
          </div>
        </div>
      </div>
    );
  };