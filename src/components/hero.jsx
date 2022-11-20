// file for "..watch anywhere, ..for kids, ..download and watch offline"

import React from "react";
import herovid from "../assets/netflixlogo2.mp4"

export default function Hero(){
    return (
        <div className="relative z-20 w-full">
        <video className="w-full filter brightness-[40%]" autoPlay muted loop src={herovid}></video>
        </div>
    )
}

