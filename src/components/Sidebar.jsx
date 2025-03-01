import { NavLink } from 'react-router-dom';

export const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`fixed top-0 left-0 h-full bg-gray-100 p-4 w-64 transform transition-transform duration-300 ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    } md:translate-x-0 z-40`}>
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Stap/Eat</h1>
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
              `block p-2 rounded ${isActive ? 'bg-gray-200' : 'hover:bg-gray-200'}`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto absolute bottom-4">
        <button className="block p-2 hover:bg-gray-200 rounded w-full text-left">
          Log Out
        </button>
      </div>
    </div>
  );
};