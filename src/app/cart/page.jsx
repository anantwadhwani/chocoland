"use client";
import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from '../../redux/counter/counterSlice';

const page = () => {
const count = useSelector(state => state.counter.value);
const dispatch = useDispatch();
    return (
        <div className='w-full flex flex-row justify-center text-center text-2xl min-h-screen'>
            <button className='w-1/3' onClick={() => dispatch(decrement())}>-</button>
            <div className='w-1/3 self-center'>{count}</div>
            <button className='w-1/3' onClick={() => dispatch(increment())}>+</button>
        </div>
    )
}

export default page
