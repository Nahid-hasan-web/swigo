import React from 'react'
import bannerBg from '../assets/images/banner_bg.png'
const Banner = () => {
  return (
    <>
        <section  id='banner' className='w-full lg:h-[930px]' style={{background:`url("${bannerBg}")`}}></section>
    </>
  )
}

export default Banner