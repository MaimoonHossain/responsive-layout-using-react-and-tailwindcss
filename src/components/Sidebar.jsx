import { useState } from 'react';
import CategoryItem from './CategoryItem';
import { useEffect } from 'react';

const Sidebar = () => {
  const [animation, setAnimation] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const items = ['Item 1', 'Item 2', 'Item 3'];

  const handleCategoryClick = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const animationClass = isSidebarOpen
      ? 'translate-x-0'
      : '-translate-x-full';
    setAnimation(animationClass);
  }, [isSidebarOpen]);
  return (
    <div className='flex'>
      <div
        className={`bg-[#9398BF] text-black w-64 min-h-screen ${animation} fixed md:relative top-0 left-0 h-full overflow-y-auto transition-transform duration-500 ease-in-out md:translate-x-0 z-10`}
      >
        <div className='p-4'>
          <div className='text-2xl font-bold mb-4'>Sidebar</div>
          <ul className='cursor-pointer space-y-2'>
            {items.map((item) => (
              <CategoryItem
                key={item}
                categoryName={item}
                isActive={activeCategory === item}
                onItemClick={handleCategoryClick}
              />
            ))}
          </ul>
        </div>
      </div>
      <button
        className='md:hidden absolute text-white focus:outline-none top-4 right-0 px-3 '
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? 'Close X' : 'Sidebar ☰'}
      </button>
    </div>
  );
};

export default Sidebar;
