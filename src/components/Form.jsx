import React from 'react'

function Form() {
    return (
        <main className='container flex flex-col px-8 justify-center items-center w-screen h-screen'>
            <div className=''>
                <div className=''>
                    <h1 className='text-white font-bold text-3xl text-center mb-4 px-14'>Learn to code by watching others</h1>
                    <p className='text-white text-md px-2 text-center'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
                </div>
                    <div>
                        <p className='text-white text-md py-3 px-20 my-4 mt-10 mx-auto items-center bg-purple-700 rounded-lg shadow-xl text-center'><span className='font-bold'>Try free 7 days</span> than $20/month thereafter</p>
                    </div>
                <form className='bg-white px-10 py-8 rounded-lg shadow-xl text-black flex flex-col justify-center ' action='#'>
                    <input className='border-2 py-2 px-8 rounded-lg my-2' type='text' placeholder='Firs Name' value='' />
                    <input className='border-2 py-2 px-8 rounded-lg my-2' type='text' placeholder='Last Name' value='' />
                    <input className='border-2 py-2 px-8 rounded-lg my-2' type='email' placeholder='Email Address' value='' />
                    <input className='border-2 py-2 px-8 rounded-lg my-2' type='Password' placeholder='Password' value='' />
                </form>
            </div>
        </main>
    )
}

export default Form