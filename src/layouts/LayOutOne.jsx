import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ResponsiveMenu from '../components/ResponsiveMenu'
import Footer from '../components/Footer'

const LayOutOne = () => {
  return (
    <>
      <Navbar />
      <ResponsiveMenu />
      <Outlet/>
      <Footer />
    </>
  )
}

export default LayOutOne