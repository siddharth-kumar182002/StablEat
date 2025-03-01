export const OrderHistory = () => {
    const pastOrders = [
      {
        restaurant: 'Pizza Palace',
        items: ['Large Pepperoni'],
        total: 18.99,
        date: '2023-08-15'
      },
      {
        restaurant: 'Burger Joint',
        items: ['Double Cheeseburger'],
        total: 12.50,
        date: '2023-08-14'
      },
      {
        restaurant: 'Smoothie Bar', 
        items: ['Mixed Berry Smoothie'],
        total: 7.25,
        date: '2023-08-13'
      }
    ];
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-md mt-8">
        <h3 className="text-lg font-bold mb-4">Order History</h3>
        <div className="space-y-4">
          {pastOrders.map((order, index) => (
            <div key={index} className="border-b pb-4 last:border-b-0">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-medium">{order.restaurant}</p>
                  <div className="text-sm text-gray-500">
                    {order.items.map((item, i) => (
                      <p key={i}>{item}</p>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">${order.total.toFixed(2)}</p>
                  <p className="text-sm text-gray-500">{order.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };