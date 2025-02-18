import React from 'react'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

export default function Layout() {
  return (
    <div>
      <Navbar/>
        <div className="mt-8">
          <Outlet/>
        </div>
      <Footer/>
    </div>
  )
}
