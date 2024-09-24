import React from 'react';

function DeleteButton() {
  return (
    <div className='flex justify-center items-center'>
      <button className='relative rounded-lg w-[150px] h-[40px] cursor-pointer flex items-center border border-red-700 bg-red-600 overflow-hidden group transition-all duration-300'>
        <span className='button__text text-white font-semibold transform translate-x-[35px] transition-all duration-300 group-hover:text-transparent'>
          Delete
        </span>
        <span className='button__icon absolute flex items-center justify-center h-full w-[39px] bg-red-700 transform translate-x-[109px] transition-all duration-300 group-hover:w-[148px] group-hover:translate-x-0'>
          <svg
            className='w-5 h-5'
            height='512'
            viewBox='0 0 512 512'
            width='512'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title></title>
            <path
              d='M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320'
              style={{ fill: 'none', stroke: '#fff', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px' }}
            />
            <line
              style={{ stroke: '#fff', strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '32px' }}
              x1='80'
              x2='432'
              y1='112'
              y2='112'
            />
            <path
              d='M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40'
              style={{ fill: 'none', stroke: '#fff', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px' }}
            />
            <line
              style={{ fill: 'none', stroke: '#fff', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px' }}
              x1='256'
              x2='256'
              y1='176'
              y2='400'
            />
            <line
              style={{ fill: 'none', stroke: '#fff', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px' }}
              x1='184'
              x2='192'
              y1='176'
              y2='400'
            />
            <line
              style={{ fill: 'none', stroke: '#fff', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px' }}
              x1='328'
              x2='320'
              y1='176'
              y2='400'
            />
          </svg>
        </span>
      </button>
    </div>
  );
}

export default DeleteButton;
