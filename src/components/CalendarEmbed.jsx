import React, { useState } from 'react';

import RefreshBTN from './RefreshBTN';
import HideBTN from './HideBTN';
import ShowBTN from './ShowBTN';

const CalendarEmbed = () => {
    const [calClasses, setCalClasses] = useState("");
    const [calSelect, setCalSelect] = useState(2);
    
    function handleRefreshClick() {
        let temp = calSelect + 0;
        temp++;

        setCalSelect(temp);
    }

    function handleHideClick() {
        if(calClasses === "") {
            setCalClasses("blur-sm")
        }
        else {
            setCalClasses("")
        }
    }

    setInterval(() => {
        handleRefreshClick();
    }, 3600000)
    


    return ( 
        <div className='flex justify-center'>
        { calSelect % 2 === 0 ? 
            <div id={"even"} className="border-slate-800 border-solid border-2 rounded-xl">
                <div className='space-x-2 mt-2 ml-2'>
                    <button onClick={handleRefreshClick} className='w-20 border-slate-800 border-solid border-2 rounded-xl'>
                        <RefreshBTN/>
                    </button>
                    <button onClick={handleHideClick} className='w-20 border-slate-800 border-solid border-2 rounded-xl'>
                        {calClasses ===  "" ? <HideBTN/> : <ShowBTN/>}
                    </button>
                </div>   
                <div className={calClasses}>
                    <iframe className="rounded-xl py-2 px-2" src="https://calendar.google.com/calendar/embed?height=200&wkst=1&bgcolor=%2338bdf8&ctz=America%2FNew_York&showTitle=0&showNav=1&showTabs=1&showPrint=0&showDate=1&showTz=0&showCalendars=0&mode=MONTH&src=YnJlbm5hbm1jY3JlYXJ5QGdtYWlsLmNvbQ&color=%23039BE5" title="Calendar Embed" sandbox='allow-same-origin allow-scripts' width="1125" height="800"></iframe>
                </div>            
            </div>
            :
            <div id={"odd"} className="border-slate-800 border-solid border-2 rounded-xl">
                <div className='space-x-2 mt-2 ml-2'>
                    <button onClick={handleRefreshClick} className='w-20 border-slate-800 border-solid border-2 rounded-xl'>
                        <RefreshBTN/>
                    </button>
                    <button onClick={handleHideClick} className='w-20 border-slate-800 border-solid border-2 rounded-xl'>
                        {calClasses ===  "" ? <HideBTN/> : <ShowBTN/>}
                    </button>
                </div>
                <div className={calClasses}>
                    <iframe className="rounded-xl py-2 px-2" src="https://calendar.google.com/calendar/embed?height=199&wkst=1&bgcolor=%2338bdf8&ctz=America%2FNew_York&showTitle=0&showNav=1&showTabs=1&showPrint=0&showDate=1&showTz=0&showCalendars=0&mode=MONTH&src=YnJlbm5hbm1jY3JlYXJ5QGdtYWlsLmNvbQ&color=%23039BE5" title="Calendar Embed" sandbox='allow-same-origin allow-scripts' width="1125" height="800"></iframe>
                </div>
            </div>
        }
        </div>
        
     );
}
 
export default CalendarEmbed;