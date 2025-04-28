import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
const ResponsiveMenu = () => {
    const [showMenu , setShowMenu]  = useState(false)
  return (
    <>
        <nav className='lg:hidden w-full px-5 py-5'>
            <div className="container">
                <div className="menu_row  flex justify-between items-center">
                    <div id="res_menu_logo" className='w-[100px]'>
                        <img src={logo} alt="menu_logo" />
                    </div>
                    <button onClick={()=>setShowMenu(!showMenu)} className={` duration-[.4s] relative w-[30px] h-[30px] border-2 border-brandColor rounded-[5px] ${showMenu&&'shadow-[0px_4px_6px_0px_#7DA640]'}`}>
                        <div id="line1" className={`w-[22px] h-[2px] absolute duration-[.4s] ${showMenu?'top-[51%] left-[50%] translate-[-50%] rotate-[45deg]':'top-[40%] left-[50%] translate-[-50%]'} bg-brandColor `}></div>
                        <div id="line1" className={`w-[22px] h-[2px] absolute duration-[.4s] ${showMenu?'top-[51%] left-[50%] translate-[-50%] rotate-[-45deg]':'top-[60%] left-[50%] translate-[-50%]'} bg-brandColor `}></div>
                    </button>
                </div>
            </div>
        </nav>
    </>
  )
}

export default ResponsiveMenu