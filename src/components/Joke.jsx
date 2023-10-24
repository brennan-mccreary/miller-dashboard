import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RefreshBTN from './RefreshBTN';

const Joke = () => {
    const [joke, setJoke] = useState();
    const [answer, setAnswer] = useState();

    useEffect(() => {
       getJoke(); 
    }, [])

    const getJoke = async () => {
        await axios
            .get(`https://v2.jokeapi.dev/joke/Any`)
            .then((res) => {
                formatResponse(res.data);

                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const formatResponse = (res) => {
        if(res.type == "twopart") {
            setJoke(res.setup)
            setAnswer(res.delivery)
        }
        else {
            setJoke(res.joke)
            setAnswer()
        }
    }


    return ( 
        <div className='flex justify-center mt-16 mx-12 font-semibold text-zinc-900 items-center'>
            { joke === undefined ? 
                <>
                    <div>
                        <p>Error fetching a joke...</p>
                    </div>
                </>
                :
                <>
                    <div className='text-3xl text-center '>
                        <h1>{joke}</h1>
                        <h2>{answer}</h2>
                    </div>
                    <div className='ml-5 outline rounded-full flex justify-center items-center  bg-slate-400'>
                        <button className='p-2' onClick={getJoke}>
                            <RefreshBTN/>
                        </button>
                    </div>
                </>
            }
        </div> 
     );
}
 
export default Joke;