import React from 'react'
import { NavLink } from 'react-router-dom'
const Error = () => {
  return (
    <div>
        <section className='container mx-auto font-mono'>
            <div className='text-center'>
            <div className='relative mt-10'>
            <h2 className='text-[190px]'>404</h2>
            </div>
            <button className='bg-black text-white py-3 px-5 rounded-xl my-10'><NavLink to={"/"}>Head Back To Home Page</NavLink></button>
            </div>
        </section>
    </div>
  )
}

export default Error