import { useState } from 'react';

export const RecentOrders = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const orders = [
    { restaurant: 'Dominos', distance: '2.5 km', status: 'Delivered' },
    { restaurant: 'Kaveri', distance: '1.8 km', status: 'In Progress' },
    { restaurant: 'McDonalds', distance: '3.2 km', status: 'Delivered' },
  ];

  const visibleOrders = isExpanded ? orders : orders.slice(0, 2);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold dark:text-white">Recent Orders</h3>
        {orders.length > 2 && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
          >
            {isExpanded ? 'Collapse' : 'View All'}
          </button>
        )}
      </div>
      
      <div className="space-y-4">
        {visibleOrders.map((order, index) => (
          <div 
            key={index}
            className="flex justify-between items-center p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded transition-colors"
          >
            <div>
              <p className="font-medium dark:text-gray-200">{order.restaurant}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{order.distance} away</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm ${
              order.status === 'Delivered' 
                ? 'bg-green-100 dark:bg-green-800/30 text-green-800 dark:text-green-400' 
                : 'bg-yellow-100 dark:bg-yellow-800/30 text-yellow-800 dark:text-yellow-400'
            }`}>
              {order.status}
            </span>
          </div>
        ))}
      </div>

      {/* Dropdown animation container */}
      {!isExpanded && orders.length > 2 && (
        <div 
          className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400"
          onClick={() => setIsExpanded(true)}
        >
          + {orders.length - 2} more orders
        </div>
      )}
    </div>
  );
};