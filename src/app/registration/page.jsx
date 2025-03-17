'use client';
import Link from 'next/link'
import React, { useRef } from 'react'

const page = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const onLoginClick = async(event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const loginBody = {
            email,
            password
        };
        const loginResponse = await fetch('http://localhost:3000/registration/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginBody)
        })
        console.log(await loginResponse.json());
    }
    return (
        <div className='text-center p-40 min-h-screen'>
            <h1 className='text-2xl'>New here? <Link href='/registration/signup'><span className='text-3xl text-blue-500 underline'>Sign Up Now</span></Link></h1>
            {/* TODO add action url */}
            <form className='flex flex-col p-4 items-center space-y-6 my-4'>
                <input ref={emailRef} type="email" autoComplete='email' name="email" id="email" placeholder='Enter Email*' className='border-b-2 border-amber-300 rounded-sm p-1 w-2xl'/>
                <input ref={passwordRef} type="password" autoComplete='new-password' name="password" id="password" placeholder='Enter Password*' className='border-b-2 border-amber-300 rounded-sm p-1 w-2xl'/>
                <button onClick={onLoginClick} type="submit" className='border-2 p-2 rounded-xl mt-4 w-sm'>Login</button>
            </form>
        </div>
    )
}

export default page;
