import React from 'react'
import CommonHead from './Common/CommonHead'
import Menu_singelCard from './Common/Menu_singelCard'

const Special_Menu = () => {
  return (
    <>
        <section id='Special Menu pt-[60px] lg:pt-[100px] '>
            <div className="container">
                <CommonHead CommonHead={'Special Menu'} />
                <div className="Special_menuRow  flex gap-[30px] justify-center mt-[50px]">
                    <Menu_singelCard />
                    <Menu_singelCard />
                    <Menu_singelCard />
                    <Menu_singelCard />
                </div>
            </div>
        </section>
    </>
  )
}

export default Special_Menu