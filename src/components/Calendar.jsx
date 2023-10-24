//Package Imports
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const AUTH_TOKEN = "ya29.a0AfB_byC9y6q-M2GWu0KO8pHue5k1rfv-_oIALiKRt8LPObkqteBp6C84AyelTj00pWRiZcn0hP9SJ_pn8zWphAu9uEZKcCDO0ITrRBGES_S3RiPU330hUO07V0692SV-7oXjYpW3Ww3932FQTt4WvK0jFgReh-tX2lHJaCgYKAU8SARESFQGOcNnCMYcbO1P8_wC6NIYMKOO--g0171";
const API_TOKEN = "AIzaSyBFM42hAqbWHNXWi8TFdpXtX1o6nu01yQo";

const calID = "brennanmccreary@gmail.com"


const Calendar = () => {

    const [events, setEvents] = useState();

    useEffect(() => {
        getEvents(calID, API_TOKEN, AUTH_TOKEN)
        
    },
    []);

    const getEvents = async (id, key, token) => {
        await axios
            .get(`https://www.googleapis.com/calendar/v3/calendars/${id}/events?key=${key}`, {
                headers: {
                    'Authorization' : `Bearer ${token}`
                }
            })
            .then((res) => {
                formatEvents(res.data.items)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const formatEvents = (data) => {
        let formattedEvents = data.filter((obj) => {
            return Object.keys(obj).includes("start");
        })
        
        console.log(formattedEvents)
        
        formattedEvents = formattedEvents.filter((obj) => {
            return Object.keys(obj).includes("summary");
        })

        console.log(formattedEvents)

        formattedEvents = formattedEvents.map((el) => {
            if(el.start.dateTime) {
                    return {
                        "title" : el.summary,
                        "date" : el.start.dateTime
                        
                    }
               
            }
            else {
                return {
                    "title" : el.summary,
                    "date" : el.start.date
                    
                }
            }
        })
        
        console.log(formattedEvents)
        setEvents(formattedEvents)
    }



    return (
        <>
            {events !== undefined ?
                <>
                    <h1>Events:</h1>
                    {events.map((el, i) => {
                        return (
                        <div key={i}>
                            <h2>{el.title}</h2>
                            <h3>{el.date}</h3>
                        </div>
                        );
                    })}
                </>
            :
            <>
             <h1>No Events Found</h1>
            </>
            }
        </>
    )
}

export default Calendar