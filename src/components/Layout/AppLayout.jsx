import React from 'react'
import Headers from '../UI/Headers'
import Footers from '../UI/Footers'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
const AppLayout = ({children}) => {
  return (
    <>
     <Toaster/>
     <Headers/>
      <Outlet/>
     <Footers/> 
    </>
  )
}

export default AppLayout
