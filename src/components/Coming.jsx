import React from 'react'
import logo from '../assets/images/logo.svg'
import hero from '../assets/images/hero-mobile.jpg'
import heroDesktop from '../assets/images/hero-desktop.jpg'
import arrowBtn from '../assets/images/icon-arrow.svg'


function coming() {
    
    const img = window.screen.width < 675;
    const heroImg = img ? hero : heroDesktop;
    // if ($(window).width() < 960) {
    //     alert('Less than 960');
    //     }
    //     else {
    //     alert('More than 960');
    //     }

    return (
    
        <div className='w-auto flex flex-col items-center md:flex-row'>
            <div className=' text-center'>
                <img className='float-left w-32 m-10' src={logo} alt="logoimg" />
                <img className=' max-w-fit mb-4' src={heroImg} alt="heroimg" />
                {/* <img className='max-w-fit mb-4 md:sr-only' src={heroDesktop} alt="heroimg" /> */}
                <h1 className='uppercase text-3xl text-orange-500 '>We're</h1>
                <h1 className='uppercase text-3xl font-bold'>Coming</h1>
                <h1 className='uppercase text-3xl font-bold'>Soon</h1>
                <p className='text-center text-orange-400 mt-4 px-10'>Hello fellow shoppers! We're currently building our new fashion store. 
                Add your email below to stay up-to-date with announcements and our launch deals.</p>
                <form>
                <div className='flex md:flex-col'>
                    <input className='flex justify-center items-center my-10 w-screen py-2 placeholder:pl-6 mx-3 required
                    border-2 border-orange-200 rounded-full md:px-44' type='email' placeholder='Enter your email' />
                    
                </div> 
            </form>
            </div>
        </div>
    )
}

export default coming