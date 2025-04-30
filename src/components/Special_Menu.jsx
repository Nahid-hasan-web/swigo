import React from 'react'
import CommonHead from './Common/CommonHead'
import Menu_singelCard from './Common/Menu_singelCard'
import burger from '../assets/images/burger.png'
import bins from '../assets/images/bins.png'
const Special_Menu = () => {
  return (
    <>
        <section id='Special Menu ' className='pt-[60px] lg:pt-[100px]  relative'>
            <div className="container">
                <CommonHead CommonHead={'Special Menu'} />
                <div className="Special_menuRow  flex gap-[30px] flex-wrap justify-center mt-[50px]">
                    <Menu_singelCard />
                    <Menu_singelCard />
                    <Menu_singelCard />
                    <Menu_singelCard />
                </div>
            </div>
            {/* ------------ position elements */}
            <div className='burger hidden lg:block  absolute  bottom-0 left-0'>
                <img src={burger} alt="burger image" />
            </div>
            <div className='bins  hidden lg:block absolute  top-[50px] right-[30px]'>
                <img src={bins} alt="burger image" />
            </div>
        </section>
    </>
  )
}

export default Special_Menu