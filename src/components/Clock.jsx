import React, { useState, useEffect } from 'react';

const Clock = () => {

    const [time, setTime] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();

            setTime(date.toLocaleTimeString());
        }, 1000)
    }, [])


    return ( 
        <div className='flex justify-center items-center my-10'>
            <h1 className='text-stone-900 font-semibold text-zinc-900 text-7xl'>{time}</h1> 
        </div>
     );
}
 
export default Clock;