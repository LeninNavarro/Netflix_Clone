import React from "react";
import tv from '../assets/tvector.svg';
import videotrailer from '../assets/sampletrailer.mp4';
import pcropped from '../assets/phonecropped2.png';
import posteradam from '../assets/poster.webp';

export default function Features () {
    return (
        <div className=" ">
         <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-evenly my-10 ">
            <div className="flex flex-col gap-5 max-w-xl my-auto mx-auto lg:mx-0 p-7 md:p-0">
                <p className="text-4xl md:text-5xl font-medium tracking-wide text-center lg:text-start">Enjoy your TV.</p> 
                <p className="text-lg md:text-2xl tracking-wide text-center lg:text-start">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p> 
            </div>
            <div className="max-w-[50%] relative flex mx-auto lg:mx-0">
                <img className="w-full shadow-current" src={tv} alt="" />
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





         <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-0 justify-evenly mt-10 ">
         <div className="max-w-[100%] relative flex mx-auto lg:mx-0 ">
                <img className="mx-auto max-w-[40%] shadow-current" src={pcropped} alt="" />
                <div className="absolute flex bg-slate-800 max-w-[40%] rounded-md left-[30%] top-[68%]">
                <img className="max-w-[15%] m-2" src={posteradam} alt="" />
                <div className="flex-col my-auto">
                <p>Black Adam</p>
                <p className="text-xs">Downloading...</p>
                </div>
                </div>
            </div>
            <div className="flex flex-col gap-5 max-w-xl my-auto mx-auto lg:mx-0 p-7 md:p-0">
                <p className="text-4xl md:text-5xl font-medium tracking-wide text-center lg:text-end">Download your shows to watch offline.</p> 
                <p className="text-lg md:text-2xl tracking-wide text-center lg:text-end">Save your favorites easily and always have something to watch.</p> 
            </div>
            
         </div>
        </div>
    )
}