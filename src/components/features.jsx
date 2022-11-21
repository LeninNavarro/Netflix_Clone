import React from "react";
import tv from '../assets/tvector.svg';
import watching from '../assets/watching.webp';
import videotrailer from '../assets/sampletrailer.mp4';
import pcropped from '../assets/phonecropped2.png';
import posteradam from '../assets/poster.webp';
import giphyd from '../assets/giphyd.gif';

export default function Features () {




    
    return (
        <div className="">
         <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-evenly pt-32 relative bg-red-600 z-10">
            <div className="flex flex-col gap-5 max-w-xl my-auto mx-auto lg:mx-0 p-7 md:p-0">
                <p className="text-4xl md:text-5xl font-medium tracking-wide text-center lg:text-start">Enjoy your TV.</p> 
                <p className="text-lg md:text-2xl tracking-wide text-center lg:text-start">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p> 
            </div>
            <div className="w-[50%] lg:w-[36%] relative flex mx-auto lg:mx-0 ">
                <img className="max-w-96 shadow-current" src={tv} alt="" />
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





         <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-0 justify-evenly relative bg-red-600 z-30">
         <div className="max-w-[100%] relative flex mx-auto lg:mx-0 ">
                <img className="mx-auto max-w-[50%] shadow-current" src={pcropped} alt="" />
                <div className="absolute flex bg-slate-800 max-w-[55%] rounded-md left-[22%] top-[60%]">
                <img className="max-w-[20%] m-2" src={posteradam} alt="" />
                <div className="flex-col my-auto">
                <p className="text-xs sm:text-base">Black Adam</p>
                <p className="text-[60%] text-blue-500">Downloading...</p>
                </div>
                <div className="w-7 md:w-7 my-auto relative ml-24 ">
                    <img className="filter hue-rotate-180" src={giphyd} alt="" />
                </div>
                </div>
            </div>
            <div className="flex flex-col gap-5 max-w-xl my-auto mx-auto lg:mx-0 p-7 md:p-0">
                <p className="text-4xl md:text-5xl font-medium tracking-wide text-center lg:text-end">Download your shows to watch offline.</p> 
                <p className="text-lg md:text-2xl tracking-wide text-center lg:text-end">Save your favorites easily and always have something to watch.</p> 
            </div>
            
         </div>




         <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-evenly relative bg-red-600 z-30">
            <div className="flex flex-col gap-5 max-w-xl my-auto mx-auto lg:mx-0 p-7 md:p-0">
                <p className="text-4xl md:text-5xl font-medium tracking-wide text-center lg:text-start">Watch everywhere.</p> 
                <p className="text-lg md:text-2xl tracking-wide text-center lg:text-start">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p> 
            </div>
            <div className="max-w-[70%] lg:max-w-[40%] flex mx-auto lg:mx-0 rounded-lg shadow-current ">
                <img className="w-full shadow-inner mx-auto rounded-lg lg:rounded-3xl" src={watching} alt="" />
            </div>
         </div>






         <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-0 justify-evenly relative bg-red-600 z-30">
         <div className="max-w-[100%] relative flex mx-auto lg:mx-0 ">
                <img className="mx-auto max-w-[50%] shadow-current" src={pcropped} alt="" />
                <div className="absolute flex bg-slate-800 max-w-[55%] rounded-md left-[22%] top-[60%]">
                <img className="max-w-[20%] m-2" src={posteradam} alt="" />
                <div className="flex-col my-auto">
                <p className="text-xs sm:text-base">Black Adam</p>
                <p className="text-[60%] text-blue-500">Downloading...</p>
                </div>
                <div className="w-7 md:w-7 my-auto relative ml-24 ">
                    <img className="filter hue-rotate-180" src={giphyd} alt="" />
                </div>
                </div>
            </div>
            <div className="flex flex-col gap-5 max-w-xl my-auto mx-auto lg:mx-0 p-7 md:p-0">
                <p className="text-4xl md:text-5xl font-medium tracking-wide text-center lg:text-end">Create profiles for kids.</p> 
                <p className="text-lg md:text-2xl tracking-wide text-center lg:text-end">Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p> 
            </div>


                </div>





        </div>
    )
}