//Component Imports
//import Calendar from '../../components/Calendar';
import CalendarEmbed from '../../components/CalendarEmbed';
import Clock from '../../components/Clock';
import Weather from '../../components/Weather';
import Joke from '../../components/Joke';

const Landing = () => {
    return(
        
            <div className="grid grid-cols-5 grid-rows-5 gap-0">
                <div className="col-span-3 row-span-4 col-start-1 row-start-2">
                    <CalendarEmbed/>
                </div>
                <div className="col-span-2 col-start-4">
                    <Clock/>
                </div>
                <div className="col-span-3 col-start-1 row-start-1">
                    <Joke/>
                </div>
                <div className="col-span-2 row-span-4 col-start-4 row-start-2">
                    <Weather/>  
                </div>
                
            </div>
    
    )
}

export default Landing;