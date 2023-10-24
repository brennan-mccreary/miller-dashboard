//Package Imports
import axios from 'axios';
import { useEffect, useState } from 'react';


//WeatherIcons
import Sunny from '../components/WeatherIcons/Sunny'
import Clouds from './WeatherIcons/Windy';
import Unknown from './WeatherIcons/Unknown';
import Rain from './WeatherIcons/Rain';

const key = ""; /*API Key*/




let interval = 3600000;

const Weather = () => {

    const [weatherData, setWeatherData] = useState(undefined)

    useEffect(() => {
        getWeatherData(key);
    }, [])

    const getWeatherData = async (key) => {
        await axios
            .get(`https://api.openweathermap.org/data/3.0/onecall?lat=40.47&lon=-79.77&exclude=hourly&appid=${key}`)
            .then((res) => {
                setWeatherData(res.data.daily);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const convertUnixTime = (date) => {
        
        var standardDate = new Date(date * 1000)

        return standardDate.toLocaleDateString("en-US");
    }

    setInterval(() => {getWeatherData(key)}, interval)

    return (
        <div className=''>
            {weatherData !== undefined ?
                <div className='text-stone-900 flex flex-wrap'>  
                    {weatherData.map((el, i) => {
                        return(
                            <div className="grid grid-cols-3 grid-rows-2 gap-0 mx-4 outline rounded-xl mb-5 bg-gradient-to-bl from-teal-300 to-cyan-200" key={i}>
                                <div className="col-span-3 text-center">
                                    <h1 className='text-2xl font-bold'>{el.weather[0].main}</h1>
                                    <h2 className='text-xl font-semibold'>{el.weather[0].description}</h2>
                                    <div>
                                        {convertUnixTime(el.dt)}
                                    </div>
                                </div>
                                
                                <div className="row-start-2 mt-5 ml-3 text-lg">
                                    <h3>{`Day: ${parseInt(((el.temp.day - 273.15) * 1.8) + 32)} °F`}</h3>
                                    <h3>{`Night: ${parseInt(((el.temp.night - 273.15) * 1.8) + 32)} °F`}</h3>
                                </div>
                                <div className="col-span-2 row-start-2 w-24 h-auto mx-auto">
                                    <img src={`https://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`} alt="Weather icon" />
                                    {/* {
                                        el.weather[0].main === "Clear" ? 
                                            <Sunny/>
                                        : el.weather[0].main === "Clouds" ?
                                            <Clouds/>
                                        : el.weather[0].main === "Rain" ? 
                                            <Rain/>
                                        : <Unknown/>
                                    } */}
                                </div>
                            </div>
                        )
                    })}
                </div>
                
            : 
                <p>No Weather Data Found</p>
            }
        </div>
    )
}

export default Weather;