export const DeliveryBreakdown = ({ preparation, transit, deliveryWindow }) => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
      <h3 className="text-lg font-bold mb-4 dark:text-white">Delivery Time Breakdown</h3>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="dark:text-gray-300">Food Preparation</span>
          <span className="font-medium dark:text-gray-100">{preparation} min</span>
        </div>
        <div className="flex justify-between">
          <span className="dark:text-gray-300">Transit Time</span>
          <span className="font-medium dark:text-gray-100">{transit} min</span>
        </div>
        <div className="flex justify-between">
          <span className="dark:text-gray-300">Delivery Window</span>
          <span className="font-medium dark:text-gray-100">{deliveryWindow} min</span>
        </div>
        <div className="flex justify-between border-t dark:border-gray-700 pt-2">
          <span className="font-bold dark:text-white">Total Time</span>
          <span className="font-bold dark:text-white">{preparation + transit + deliveryWindow} min</span>
        </div>
      </div>
    </div>
  );