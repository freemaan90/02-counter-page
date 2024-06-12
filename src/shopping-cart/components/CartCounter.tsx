'use client'
import style from './CartCounter.module.css'
import { useAppDispatch, useAppSelector } from '@/store'
import { addOne, initCounterState, substractOne } from '@/store/counter/counterSlice'
import { useEffect } from 'react';

interface Props{
    value?:number,
}

export interface CounterResponse {
    method: string;
    count:  number;
}


const getApiCounter = async ():Promise<CounterResponse> =>{
    const data = await fetch(`/api/counter`).then(res => res.json())
    console.log(data)
    return data
}

export const CartCounter = ({value = 10}:Props) => {
    const count = useAppSelector(state=> state.counter.count)
    const dispatch = useAppDispatch()

    // useEffect(()=>{
    //     dispatch(initCounterState(value))
    // },[dispatch,value])

    useEffect(()=>{
        getApiCounter()
            .then(({count})=> dispatch(initCounterState(count)))
    },[dispatch])

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
