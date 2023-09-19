import React, { useEffect, useState } from 'react'

export default function DarkMode() {

    const [currentTheme, setCurrentTheme] = useState(0);
    const themes = [
        { "primary": "#c06e31", "primary_varient": "#3264AC", "bg": "#381D68", "bg_varient": "#471E64" },
        { "primary": "#319867", "primary_varient": "#F36010", "bg": "#00005C", "bg_varient": "#462961" },
        { "primary": "#05B5A2", "primary_varient": "#5EE24D", "bg": "#2C2622", "bg_varient": "#00005C" },
        // { "primary": "#6282E2", "primary_varient": "#B371F2", "bg": "#682D3E", "bg_varient": "#13042A" }
    ]
    // 1 2 

    document.body.style.setProperty("--color-bg", themes[currentTheme % themes.length].bg);
    document.body.style.setProperty("--color-primary", themes[currentTheme % themes.length].primary);
    document.body.style.setProperty("--color-primary-varient", themes[currentTheme % themes.length].primary_varient);
    document.body.style.setProperty("--color-bg-varient", themes[currentTheme % themes.length].bg_varient);

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setCurrentTheme(1);
        }
        else {
            setCurrentTheme(0)
        }
    }, [])

    const handleTheme = () => {
        setCurrentTheme(currentTheme + 1);
    }
    return (
        <div className='darkmode_container' onClick={handleTheme}>
            <span className='circle' style={{ backgroundColor: currentTheme ? themes[(currentTheme + 1) % themes.length].primary : "" }} />
        </div>
    )
}
