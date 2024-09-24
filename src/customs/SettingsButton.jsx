import React from 'react'

function SettingsButton() {
  return (
    <div>
        <button className="setting-btn w-[45px] h-[45px] flex flex-col items-center justify-center gap-1 bg-purple-600 rounded-lg cursor-pointer border-none shadow-[0px_0px_0px_2px_rgba(212,209,255,1)]">
            <span className="bar bar1 w-[50%] h-[2px] bg-gray-300 relative rounded-md">
                <span className="before:content-[''] before:w-[2px] before:h-[2px] before:bg-indigo-400 before:absolute before:rounded-full before:border-2 before:border-white before:transition-all before:duration-300 before:shadow-[0px_0px_5px_white]"></span>
            </span>
            <span className="bar bar2 w-[50%] h-[2px] bg-gray-300 relative rounded-md">
                <span className="before:content-[''] before:w-[2px] before:h-[2px] before:bg-indigo-400 before:absolute before:rounded-full before:border-2 before:border-white before:transition-all before:duration-300 before:shadow-[0px_0px_5px_white]"></span>
            </span>
            <span className="bar bar1 w-[50%] h-[2px] bg-gray-300 relative rounded-md">
                <span className="before:content-[''] before:w-[2px] before:h-[2px] before:bg-indigo-400 before:absolute before:rounded-full before:border-2 before:border-white before:transition-all before:duration-300 before:shadow-[0px_0px_5px_white]"></span>
            </span>
        </button>
    </div>
  )
}

export default SettingsButton