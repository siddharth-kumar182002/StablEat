export const RecentOrders = () => {
    const orders = [
      { restaurant: 'Pizza Palace', distance: '2.5 km', status: 'Delivered' },
      { restaurant: 'Sushi Express', distance: '1.8 km', status: 'In Progress' },
      { restaurant: 'Taco Fiesta', distance: '3.2 km', status: 'Delivered' },
    ];
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">Recent Orders</h3>
          <button className="text-blue-600 hover:text-blue-800">
            View All
          </button>
        </div>
        
        <div className="space-y-4">
          {orders.map((order, index) => (
            <div key={index} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded">
              <div>
                <p className="font-medium">{order.restaurant}</p>
                <p className="text-sm text-gray-500">{order.distance} away</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                order.status === 'Delivered' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {order.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };