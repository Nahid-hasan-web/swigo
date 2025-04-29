import React from 'react'
import CommonHead from './Common/CommonHead'
import pasta from '../assets/images/pasta.png'
const Todays_menu = () => {
  return (
    <section className='bg-[#F4FDE7] pt-[60px] pb-[393px] lg:pt-[100px] '>
        <div className="container">
            <CommonHead CommonHead={"Today's Menu"} />
            <div className='nahid_todays_menu_row flex gap-[30px] justify-center ronded-[10px] overflow-hidden '>
                <div className="singelmenu_item relative group   w-[270px] h-[351px] rounded-[10px]  overflow-hidden shadow-[0px_8px_16px_-2px_rgba(0,_0,_0,_0.1)] ">
                    <div className='w-full overflow-hidden relative'>
                        <img src={pasta} alt="pasta" />
                        <div className="topslae  px-[9px] py-[3px] bg-[#FE9F10] absolute top-0 left-0 text-[12px] font-poppins font-semibold text-[#fff] rounded-br-[10px]">TOP SALE</div>
                    </div>
                    <div className=' w-full h-[130px] bg-white pt-[23px] absolute bottom-[0] left-0 duration-[.7s] group-hover:bottom-[-100%] '>
                        <h2 className='text-xl font-semibold font-poppins text-[#222222] text-center mb-[10px]'>Pasta</h2>
                        <p className=' text-[16px] font-normal font-poppins text-[#666666] text-center'>Lorem ipsum dolor sit amet,
                        dipiscing elit, sed</p>
                    </div>
                    <div className=' w-full h-full bg-[#0000002f] pt-[23px] absolute bottom-[-100%] left-0 duration-[1s] group-hover:bottom-[0]  bg-gradient-to-t from-slate-800  to-transparent'>

                    </div>
                </div>

            </div>
        </div>


    </section>
  )
}

export default Todays_menu