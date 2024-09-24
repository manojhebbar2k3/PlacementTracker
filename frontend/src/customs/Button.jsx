import React from 'react';

function Button() {
  return (
    <div className='mt-5 text-center'>
      <button className="border-2 border-[#24b4fb] bg-[#24b4fb] rounded-lg cursor-pointer py-2 px-4 transition-all duration-200 ease-in-out hover:bg-[#0071e2]">
        <span className="flex justify-center items-center text-white font-semibold">
          <svg
            height="24"
            width="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" fill="currentColor"></path>
          </svg>
          Add
        </span>
      </button>
    </div>
  );
}

export default Button;
