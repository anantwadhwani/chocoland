'use client';
import React, { useRef } from 'react';

const page = () => {
    const firstnameRef = useRef();
    const lastnameRef = useRef();
    const emailRef = useRef();
    const companyRef = useRef();
    const messageRef = useRef();

    const onContactSubmit = async(event) => {
        event.preventDefault();
        console.log('Hello');
        const firstname = firstnameRef.current.value;
        const lastname = lastnameRef.current.value;
        const email = emailRef.current.value;
        const company = companyRef.current.value;
        const message = messageRef.current.value;
        const mailBody = {
            firstname,
            lastname,
            email,
            company,
            message
        }
        const data = await fetch('http://localhost:3000/resend/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mailBody)
        });;

        console.log(data);
    }
    
    return (
        <div className='flex flex-col sm:flex-row min-h-screen'>
            <div className='sm:w-1/2'></div>
            <div className='sm:w-1/2 px-32 py-20'>
                <h2>WANT TO KNOW MORE ABOUT US? QUERIES REGARDING HUGE ORDERS? WANT US TO CURATE GIFT HAMPERS? WANT TO WORK WITH US?</h2>
                <form className='w-full mt-4' onSubmit={onContactSubmit}>
                    <div className='my-4 flex flex-row justify-between'>
                        <div className='border-b-2 w-2/5 rounded-sm p-1'>
                            <input autoComplete='given-name' ref={firstnameRef} type="text" name="firstname" id="firstname" placeholder='FIRSTNAME*' className='w-full'/>
                        </div>
                        <div className='border-b-2 w-2/5 rounded-sm p-1'>
                            <input autoComplete='family-name' ref={lastnameRef} type="text" name="lastname" id="lastname" placeholder='LASTNAME*' className='w-full'/>
                        </div>
                    </div>
                    <div className='my-4'>
                        <input autoComplete='email' ref={emailRef} type="email" name="email" id="email" placeholder='EMAIL*' className='w-full border-b-2 rounded-sm p-1'/>
                    </div>
                    <div className='my-4'>
                        <input ref={companyRef} type="text" name="company" id="company" placeholder='COMPANY' className='w-full border-b-2 rounded-sm p-1'/>
                    </div>
                    <div className='my-4'>
                        <textarea ref={messageRef} name="whatsup" id="whatsup" rows="2" placeholder="GIFTING? BULK ORDER? FEEDBACK?*" className='w-full border-b-2 rounded-sm p-1'></textarea>
                    </div>
                    <div className='my-4'>
                        <button type="submit" className='border-2 rounded-xl border-amber-300 p-2'>SAY HI&#8599;</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default page;
