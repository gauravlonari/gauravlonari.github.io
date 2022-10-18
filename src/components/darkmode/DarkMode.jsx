import React, { useEffect, useState } from 'react'
import { HiMoon } from 'react-icons/hi'
import { BsFillSunFill } from 'react-icons/bs'

export default function DarkMode() {

    const [theme, setTheme] = useState(1);
    useEffect(()=>{
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            setTheme(1);
            document.body.classList.add("darkmode");
        }
        else{
            setTheme(0);
            document.body.classList.remove("darkmode");
        }
    },[])

    const handleDarkMode=()=>{
        if(theme===0){
            document.body.classList.add("darkmode");
            setTheme(1);
        }
        else{
            document.body.classList.remove("darkmode");
            setTheme(0);
        }
    }
    if(theme===0){
        return(
            <div className='darkmode_container' onClick={handleDarkMode}>
                <HiMoon/>
            </div>
        )
    }
    else{
        return(
            <div className='darkmode_container' onClick={handleDarkMode}>
                <BsFillSunFill/>
            </div>
        )    
    }
}
