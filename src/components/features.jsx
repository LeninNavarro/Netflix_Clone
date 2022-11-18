import React from "react";
import tv from '../assets/tvector.svg';
import videotrailer from '../assets/sampletrailer.mp4';

export default function Features () {
    return (
        <>
         <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-around mt-10">
            <div className="flex flex-col gap-5 max-w-full ">
                <p className="text-2xl md:text-5xl tracking-wide">Enjoy your TV.</p> 
                <p className="text-lg md:text-2xl tracking-wide">Watch on Smart TVs, Playstation, Xbox, <br /> Chromecast, Apple TV, Blu-ray players, and more.</p> 
            </div>
            <div className="max-w-[50%] relative flex mx-auto lg:mx-0">
                <img className="w-full" src={tv} alt="" />
                <div>
                <video autoPlay 
               muted 
               loop 
               src={videotrailer}
               className='absolute
                          top-[3%]
                          left-[3%]                          
                          w-[95%]
                          '>
               </video>
                </div>
            </div>
         </div>
        </>
    )
}