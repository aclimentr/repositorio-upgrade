import React, { useEffect } from "react"
import '../../assets/ThemeSong.mp3'

export default function HomePage(){

    const HomePage = () =>{
        useEffect(()=>{
            let audio = new Audio('../../assets/ThemeSong.mp3');
            audio.loop = true;
            audio.play();

            return() => {
                audio.play();
            }
        },[])
    }
    return (
        <div>
    <p>HOME</p>
    
    </div>
    )
}