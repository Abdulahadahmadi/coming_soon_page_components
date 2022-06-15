import React from 'react'
import { useState, useEffect } from 'react'

function Form() {

    const initialValue = {
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    }
    const [formData, setFormData] = useState(initialValue)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(formData))
        setIsSubmit(true)
    }

    useEffect(() => {
        console.log(formErrors)
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formData)
        }
    }, [formErrors])

    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.firstname){
            errors.firstname = "Firstname is required"

        }else if(!values.lastname){
            errors.lastname = "Lastname is required"

        }else if(!values.email){
            errors.email = "Email is required"

        }else if(!regex.test(values.email)){
            errors.email = "this is not a valid format!"

        }else if(!values.password) {
            errors.password = "Password is required"

        }else if(values.password.length < 4){
            errors.password = "Password must be more than 4 characters"

        }if(values.password.length > 12){
            errors.password = "Password can not exceed more than 12 characters"
        }
        return errors;
    }

    return (

        <main className='container flex flex-col px-8 justify-center items-center w-screen h-screen'>
                {Object.keys(formErrors).length === 0 && isSubmit ? (<div className='ui message success'>Sign in Successfully</div>
                ) : (
                    <pre>{JSON.stringify(formData, undefined, 3)}</pre>
                )}
            <div className='flex flex-col lg:flex-row justify-center items-center'>
            
                <div className='lg:mt-44 lg:m-12'>
                
                    <h1 className='text-white font-bold text-3xl text-center mb-4 px-14 lg:text-6xl'>Learn to code by watching others</h1>
                    <p className='text-white text-md px-2 text-center lg:text-xl lg:px-20'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
                </div>


                <div className='lg:px-40 lg:text-center'>
                    <div className=''>
                        <p className='text-white text-md py-3 px-20 my-4 mt-10 mx-auto items-center bg-purple-700 rounded-lg shadow-xl text-center'><span className='font-bold'>Try free 7 days</span> than $20/month thereafter</p>
                    </div>
                <form onSubmit={handleSubmit} className='bg-white px-10 py-8 rounded-lg shadow-xl text-black flex flex-col justify-center lg:px-16' action='#'>
                    <input className='border-2 py-2 px-8 rounded-lg my-2 lg:px-24'
                        type='text'
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                        placeholder='First Name'
                        />
                        <p className='text-red-700 text-xs lg:mr-20'>{formErrors.firstname}</p>


                    <input className='border-2 py-2 px-8 rounded-lg my-2 lg:px-24'
                        type='text'
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                        placeholder='Last Name'
                        />
                        <p className='text-red-700 text-xs lg:mr-20'>{formErrors.lastname}</p>

                    <input className='border-2 py-2 px-8 rounded-lg my-2 lg:px-24'
                        type='email'
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Email Address'
                        />
                        <p className='text-red-700 text-xs lg:mr-20'>{formErrors.email}</p>

                    <input className='border-2 py-2 px-8 rounded-lg my-2 lg:px-24'
                        type='Password'
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder='Password'
                        />
                        <p className='text-red-700 text-xs lg:mr-20'>{formErrors.password}</p>


                    <button className='text-white bg-green-500 uppercase px-10 py-2 my-2 text-sm hover:bg-green-900 rounded-lg shadow-xl'>
                        Claim your free trail
                    </button>
                    <p className='text-center my-2 lg:text-sm'>by clicking the button you are agree to our<span className='text-red-500'> Terms and Conditions</span></p>
                </form>
                </div>
            </div>
            <footer className='text-center w-screen text-white mt-5 lg:mt-20'>
                <p className="attribution">
                Challenge by <a href="#https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Coded by <a href="#ahad">Ahad</a>.
                </p>
        </footer>
        </main>
        
    )
}

export default Form