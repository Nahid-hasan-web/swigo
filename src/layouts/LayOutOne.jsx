import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ResponsiveMenu from '../components/ResponsiveMenu'

const LayOutOne = () => {
  return (
    <>
      <Navbar />
      <ResponsiveMenu />
      <Outlet/>
    </>
  )
}

export default LayOutOne