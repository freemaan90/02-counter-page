'use client'
import style from './CartCounter.module.css'
import { useAppDispatch, useAppSelector } from '@/store'
import { addOne, initCounterState, substractOne } from '@/store/counter/counterSlice'
import { useEffect } from 'react';

interface Props{
    value?:number,
}

export const CartCounter = ({value = 10}:Props) => {
    const count = useAppSelector(state=> state.counter.count)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(initCounterState(value))
    },[dispatch,value])

    return (
        <>
            <span className='text-9xl' >{count}</span>
            <div className='flex'>
                <button
                    className={style.boton}
                    onClick={() => dispatch(substractOne())}
                >-1</button>
                <button
                    className={style.boton}
                    onClick={() => dispatch(addOne())}
                >+1</button>
            </div>
        </>
    )
}
