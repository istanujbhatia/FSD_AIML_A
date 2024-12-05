import React, { useEffect, useState } from "react";
function stop(){
const [running,setRunning]=useState(false);
const [time,settime]=useState(0);
const [valid,setValid]=useState(null);

function handleReset(){
settime(0);
setRunning(false)
}

function handleStart(){
    setRunning(prev=>!prev);
}

useEffect(()=>{
if(running){
  const id=  setInterval(()=>{
        settime((time)=>(time+1))
    },1000)
    setValid(id);
}
return ()=>clearInterval(valid);
},[running]);

function timeformate(time){
    const min=Math.floor(time/60);
    const sec=Math.floor(time%60);
    const hr=Math.floor(time/3600);
    if(min<10 && hr<10){
       return `0${hr}:0${min}:${sec}`
    }else{
            return `${min}:${sec}`
    }
   
}
return (
    <div>
        <h1>Stop Watch</h1>
        <h1>Timer:{timeformate(time)}</h1>
        <button  onClick={handleStart} >{running?"STOP":"START"}</button>
        <button onClick={handleReset} >RESET</button>
    </div>

);


}
export default stop;