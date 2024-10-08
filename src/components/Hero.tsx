import React from 'react'
import Navbar from './Navbar'
export default function Hero() {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat p-4 bg-[url(/Alisha.jpg)] bg-left  bg-cover rounded-xl'
    style={{backgroundSize: "25%"}}
    ><Navbar/>
    <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
      <div className='hidden lg:block'></div>
      <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
      
        <div>
          <p>I'm</p>
          <p> Alisha</p>
          <p>Kayani</p></div></div></div>  </div>
  )
}