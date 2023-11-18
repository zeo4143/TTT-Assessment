import React from 'react'
import "./App.css"
import ProfileMain from './Components/Profile/ProfileMain/ProfileMain'
import Navbar from './Components/Navbar/Navbar'

export default function App() {
  return (
    <div className='app'> 
      <Navbar/>
      <ProfileMain/>
    </div>
  )
}
