import React from 'react';
import { useEffect,useState } from 'react';

export default function QuickLinks() {
  
  const getRandomColor=()=>{
      let letters = "0123456789ABCDEF";
      let color = "";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

  const [textColor, setTextColor] = useState("#"+getRandomColor());
  let interval;
  
      const invertHex= (hex)=> {
        // console.log(hex);
        let x="#"+ (Number(`0x1${hex.substring(1)}`) ^ 0xffffff)
        .toString(16)
        .substring(1)
        .toUpperCase();
        // console.log(x);
        return x;
      }
      useEffect(()=>{
        clearInterval(interval);
        interval=setInterval(()=>{setTextColor("#"+getRandomColor())},1500);
      },[]);
      const handleSpace=(event)=>{
        if(event.keyCode===32 && !event.repeat){
          if(interval!==null){
            clearInterval(interval);
            interval=null;
            console.log(textColor);
            console.log(invertHex(textColor));
          }
          else{
            clearInterval(interval);
            interval=setInterval(()=>{setTextColor("#"+getRandomColor())},1500);
          }
        }
      }
      window.addEventListener("keypress",handleSpace);
  return (
    <>
      <div style={{backgroundColor:invertHex(textColor)}} className="flex flex-col min-h-screen min-w-screen justify-center items-center content-center">
      <h1 style={{color:textColor}} className='text-6xl m-4'>Welcome!</h1>
      <h3><a style={{color:textColor}} className="text-3xl mt-3" href="/TextUtility/#/">TextUtility</a></h3>
      <h3><a style={{color:textColor}} className="text-3xl " href="/NewNews/#/">NewNews</a></h3>
      <h6 className='absolute bottom-0'>*Hit SPACE to Pause Colors</h6>
      </div>
    </>
  )
}