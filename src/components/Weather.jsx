//Package Imports
import axios from 'axios';
import { useEffect, useState } from 'react';

let key = "7b25823039f116626ce8d36e519a62db"

const Weather = () => {

    const [weatherData, setWeatherData] = useState(undefined)

    useEffect(() => {
        getWeatherData(key);
    }, [])

    const getWeatherData = async (key) => {
        await axios
            .get(`https://api.openweathermap.org/data/3.0/onecall?lat=40.47&lon=-79.77&exclude=hourly&appid=${key}`)
            .then((res) => {
                setWeatherData(res.data.current);
                console.log(res.data)
            })
    }

    return (
        <>
            {weatherData !== undefined ?
                <>
                    <p>{weatherData.weather[0].main}</p>
                    <p>{weatherData.weather[0].description}</p>
                </>
                
            : 
                <p>No Data Found</p>
            }
             
        </>
    )
}

export default Weather;