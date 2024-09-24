import React, { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';


function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative z-10'>
      <div onClick={toggleDropdown} className='flex items-center'>
        <BsThreeDotsVertical />
      </div>
      {isOpen && (
        <div className='absolute right-0 mt-2 bg-white text-black rounded shadow-lg z-10'>
          <div className='p-2 hover:bg-gray-100 cursor-pointer'>Edit</div>
          <div className='p-2 hover:bg-gray-100 cursor-pointer'>Delete</div>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
