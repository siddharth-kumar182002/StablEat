import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
export const Sidebar = ({ isOpen, setIsOpen, isDarkMode, toggleDarkMode }) => {
    const { cartItems } = useCart();
  return (
    <div className={`fixed top-0 left-0 h-full bg-gray-100 dark:bg-gray-800 p-4 w-64 transform transition-transform duration-300 ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    } md:translate-x-0 z-40`}>
      <div className="mb-8">
        <h1 className="text-2xl font-bold dark:text-white">StablEat</h1>
      </div>

      <nav className="space-y-2">
        {[
          { name: 'Home', path: '/' },
          { name: 'Favorites', path: '/favorites' },
          { name: 'Orders', path: '/orders' },
          { name: 'Settings', path: '/settings' },
        ].map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => 
              `block p-2 rounded transition-colors ${
                isActive 
                  ? 'bg-gray-200 dark:bg-gray-700 text-black dark:text-white' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`
            }
          >
               {item.name}
            {item.name === 'Orders' && cartItems.length > 0 && (
              <span className="absolute right-41 top-45  bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto absolute bottom-4 w-[calc(100%-32px)]">
        <button 
          onClick={toggleDarkMode}
          className="block w-full p-2 text-left rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
        >
          {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
        <button className="block w-full p-2 text-left rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300">
          Log Out
        </button>
      </div>
    </div>
  );
};