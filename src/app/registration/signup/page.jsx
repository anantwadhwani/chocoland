'use client';
import React, { useRef } from 'react'

const page = () => {
    const nameRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const onSignUpClick = async(event) => {
        event.preventDefault();
        const username = nameRef.current.value;
        const phone = nameRef.current.value;
        const email = nameRef.current.value;
        const password = nameRef.current.value;
        const signUpBody = {
            username,
            phone,
            email,
            password
        };
        const signUpResponse = await fetch('http://localhost:3000/registration/signup/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(signUpBody)
        });
        console.log(await signUpResponse.json());
    }
    return (
        <div className='text-center p-40 min-h-screen'>
            <h1 className='text-3xl'>Welcome to Chocoland</h1>
            {/* TODO add action url */}
            <form className='flex flex-col p-4 items-center space-y-6 my-4'>
                <input ref={nameRef} autoComplete='name' type="text" name="name" id="name" placeholder='Enter Name*' className='border-b-2 border-amber-300 rounded-sm p-1 w-2xl' />
                <input ref={phoneRef} autoComplete='tel' type="text" name="phone" id="phone" placeholder='Enter Mobile Number*' className='border-b-2 border-amber-300 rounded-sm p-1 w-2xl' />
                <input ref={emailRef} autoComplete='email' type="email" name="email" id="email" placeholder='Enter Email*' className='border-b-2 border-amber-300 rounded-sm p-1 w-2xl' />
                <input ref={passwordRef} autoComplete='new-password' type="password" name="password" id="password" placeholder='Enter Password*' className='border-b-2 border-amber-300 rounded-sm p-1 w-2xl' />
                <button onClick={onSignUpClick} type="submit" className='border-2 p-2 rounded-xl mt-4 w-sm'>Sign Up</button>
            </form>
        </div>
    )
}

export default page;
