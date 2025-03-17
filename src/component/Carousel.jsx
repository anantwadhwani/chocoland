"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useDispatch } from "react-redux";
import { decrement, increment } from '../redux/counter/counterSlice';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Carousel = ({ items }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const nextSlide = () => {
        setCurrentSlide(currentSlide === items.length-1 ? 0 : currentSlide+1);
    }
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? items.length-1 : currentSlide-1);
    }
    const dispatch = useDispatch();

    // useEffect(() => {
    //     const timer = setInterval(()=>{
    //         nextSlide();
    //     }, 3000)
    //     return () => clearInterval(timer);
    // },[currentSlide]);

    return (
        <div className='w-full my-4 min-h-screen'>
            {items.map((item, index) => {
                return (
                    <div key={`${item.altText}${index}`} className={`border-2 border-amber-300 w-full h-180 relative ${index === currentSlide ? '' : 'hidden'}`}>
                            <div className="flex flex-col items-center">
                                <Image priority className="self-center" width={520} height={520} src={item.image} alt={item.altText}></Image>
                            </div>
                            <div className="bg-amber-300 w-full h-1/4 m-0 absolute bottom-0 p-4 text-center flex justify-around text-black">
                                <div className="self-center text-4xl">
                                    <button onClick={prevSlide}>&larr;</button>
                                </div>
                                <div className="flex flex-col justify-center w-3/4">
                                    <h2 className="text-4xl">{item.productName}</h2>
                                    <p>{item.productInfo}</p>
                                    <Link target='_blank' href='/cart' className='border-2 p-2 rounded-xl self-center mt-4 w-sm' onClick={() => dispatch(increment())}>Add to Cart for &#8377;{item.price}</Link>
                                </div>
                                <div className="self-center text-4xl">
                                    <button onClick={nextSlide}>&rarr;</button>
                                </div>
                            </div>
                        </div>
                )
            })}
        </div>
    )
}

export default Carousel;
