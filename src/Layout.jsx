import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <div className='bg-gradient-to-r from-[#0a2351] via-[#0066b2] to-[#6699CC] text-white h-14 w-full font-bold text-3xl p-3 mb-4 size-10'>Placement Tracker</div>
        {/* <div className='h-16'> </div> */}
        <Outlet/>
    </>
)
}

export default Layout