'use client'
import React, { useState } from 'react'
import style from './CartCounter.module.css'

interface Props{
    value?:number
}

export const CartCounter = ({value = 10}:Props) => {
    const [counter, setCounter] = useState(value)
    const handleClick = (count: number) => setCounter((prevCounter) => prevCounter + count)

    return (
        <>
            <span className='text-9xl' >{counter}</span>
            <div className='flex'>
                <button
                    className={style.boton}
                    onClick={() => handleClick(-1)}
                >-1</button>
                <button
                    className={style.boton}
                    onClick={() => handleClick(+1)}
                >+1</button>
            </div>
        </>
    )
}
