export const Sidebar = () => {
    return (
      <div className="w-64 bg-gray-100 min-h-screen p-4 fixed">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Stap/Eat</h1>
        </div>
  
        <nav className="space-y-2">
          {['Home', 'Favorites', 'Orders', 'Settings'].map((item) => (
            <button 
              key={item} 
              className="w-full text-left p-2 hover:bg-gray-200 rounded transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>
  
        <div className="mt-auto absolute bottom-4">
          <button className="block p-2 hover:bg-gray-200 rounded w-full text-left">
            Log Out
          </button>
          <button className="block p-2 hover:bg-gray-200 rounded w-full text-left">
            Order History
          </button>
        </div>
      </div>
    );
  };