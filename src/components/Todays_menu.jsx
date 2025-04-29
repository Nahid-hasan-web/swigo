import React from 'react'
import CommonHead from './Common/CommonHead'

const Todays_menu = () => {
  return (
    <section className='bg-[#F4FDE7] pt-[60px] pb-[393px] lg:pt-[100px] '>
        <div className="container">
            <CommonHead CommonHead={"Today's Menu"} />
            <div className='nahid_todays_menu_row flex gap-[30px] justify-center ronded-[10px] overflow-hidden'>
                <div className="singelmenu_item   w-[270px] h-[351px] rounded-[10px] overflow-hidden shadow-[0px_8px_16px_-2px_rgba(0,_0,_0,_0.1)] "></div>

            </div>
        </div>


    </section>
  )
}

export default Todays_menu