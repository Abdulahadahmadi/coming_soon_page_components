import React from 'react'
import logo from '../assets/images/logo.svg'
import hero from '../assets/images/hero-mobile.jpg'
import heroDesktop from '../assets/images/hero-desktop.jpg'

function coming() {
    return (
        <div className=''>
            <div className=' text-center'>
                <img className='float-left w-32 m-10' src={logo} alt="logoimg" />
                <img className='lg:sr-only md:sr-only w-screen mb-4' src={hero} alt="heroimg" />
                <h1 className='uppercase text-3xl text-orange-500 '>We're</h1>
                <h1 className='uppercase text-3xl font-bold'>Coming</h1>
                <h1 className='uppercase text-3xl font-bold'>Soon</h1>
                <p className='text-center text-orange-400 mt-4 px-10'>Hello fellow shoppers! We're currently building our new fashion store. 
                Add your email below to stay up-to-date with announcements and our launch deals.</p>
            </div>
        </div>
    )
}

export default coming