import React from 'react';

const CategoryItem = ({ categoryName, isActive, onItemClick }) => {
  return (
    <li onClick={() => onItemClick(categoryName)}>
      <div
        className={`bg-white px-1 rounded-sm my-2 flex items-center ${
          isActive ? 'font-bold' : ''
        }`}
      >
        <div className='flex-grow'>{categoryName}</div>
        <svg
          className='w-2.5 h-2.5'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 10 6'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1'
            d='m1 1 4 4 4-4'
          />
        </svg>
      </div>
      {isActive && (
        <ul className='ml-4'>
          <li className='bg-gray-300 px-1 rounded-sm my-2'>Item A</li>
          <li className='bg-gray-300 px-1 rounded-sm my-2'>Item B</li>
        </ul>
      )}
    </li>
  );
};

export default CategoryItem;
