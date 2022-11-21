import React from "react";
import plus from '../assets/plus.png'

export default function FAQs () {
    return (
        <>
            <div className="relative z-10 bg-red-700">
                <p className="text-6xl pb-16 pt-28 font-medium">Frequently Asked Questions</p>
                <ul className="pb-28">
                    <li className="flex justify-between bg-red-600 border border-red-900 rounded-lg max-w-[60%] mx-auto px-5 mb-5"><button className="my-2 text-3xl text-start">What is Netflix</button>
                    <img className="max-w-[5%]" src={plus} alt="" /></li>
                    <li className="flex justify-between bg-red-600 border border-red-900 rounded-lg max-w-[60%] mx-auto px-5 mb-5"><button className="my-2 text-3xl text-start">How much does Netflix costs?</button>
                    <img className="max-w-[5%]" src={plus} alt="" /></li>
                    <li className="flex justify-between bg-red-600 border border-red-900 rounded-lg max-w-[60%] mx-auto px-5 mb-5"><button className="my-2 text-3xl text-start">Where can I watch Netflix?</button>
                    <img className="max-w-[5%]" src={plus} alt="" /></li>
                    <li className="flex justify-between bg-red-600 border border-red-900 rounded-lg max-w-[60%] mx-auto px-5 mb-5"><button className="my-2 text-3xl text-start">How do I cancel?</button>
                    <img className="max-w-[5%]" src={plus} alt="" /></li>
                    <li className="flex justify-between bg-red-600 border border-red-900 rounded-lg max-w-[60%] mx-auto px-5 mb-5"><button className="my-2 text-3xl text-start">What can I watch on Netflix?</button>
                    <img className="max-w-[5%]" src={plus} alt="" /></li>
                    <li className="flex justify-between bg-red-600 border border-red-900 rounded-lg max-w-[60%] mx-auto px-5"><button className="my-2 text-3xl text-start">Is Netflix good for kids?</button>
                    <img className="max-w-[5%]" src={plus} alt="" /></li>
                </ul>
            </div>

            
                
            <div className="h-[450px] bg-white -z-0 relative"></div>




        </>
    )
}

// import React, {useEffect, useState} from "react";
// import plus from '../assets/multt.png'

// export default function FAQs () {

//         const toggler = () => {
//             var listss = document.querySelector('.listss');
//             var listss2 = document.querySelector('.listss2');
//             var listss3 = document.querySelector('.listss3');
//             var listss4 = document.querySelector('.listss4');
//             var listss5 = document.querySelector('.listss5');
//             var listss6 = document.querySelector('.listss6');
//             var psignf = document.querySelector('.psignf');
//             var psignf2 = document.querySelector('.psignf2');
//             var psignf3 = document.querySelector('.psignf3');
//             var psignf4 = document.querySelector('.psignf4');
//             var psignf5 = document.querySelector('.psignf5');
//             var psignf6 = document.querySelector('.psignf6');
//             var fnction = document.querySelector('.fnction');
//             var answer = document.querySelector('.answer');
            
//             fnction.addEventListener('click', () => {
//                 answer.classList.toggle('hidden');
//             });
    
//             listss.addEventListener('click', () => {
//                 listss.classList.toggle('animate-righttoleft');
//             });
    
//             listss.addEventListener('click', () => {
//               psignf.classList.toggle('rotate-45');
//             });
            
//             listss.addEventListener('click', () => {
//               psignf.classList.toggle('rotate-45');
//             });
            
    
//             listss2.addEventListener('click', () => {
//               psignf2.classList.toggle('rotate-45');
//             });
    
//             listss3.addEventListener('click', () => {
//               psignf3.classList.toggle('rotate-45');
//             });
    
//             listss4.addEventListener('click', () => {
//               psignf4.classList.toggle('rotate-45');
//             });
    
//             listss5.addEventListener('click', () => {
//               psignf5.classList.toggle('rotate-45');
//             });
    
//             listss6.addEventListener('click', () => {
//               psignf6.classList.toggle('rotate-45');
//             });

//     }

//     return (
//         <>
//             <div className="relative z-10 bg-red-700">
//                 <p className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl pb-16 pt-28 font-medium">Frequently Asked Questions</p>
//                 <div className="pb-28 border px-2">


               
//                 <div className="flex gap-5"> 
//                     <button className="listss fnction my-2 text-sm sm:text-md md:text-xl lg:text-3xl text-start hover:bg-red-200 hover:bg-opacity-30 flex justify-between bg-red-600 border border-red-900 rounded-sm w-[60%] mx-auto px-5 mb-5 transition transform animate-righttoleft" onClick={() => toggler()}>What is Netflix

//                     <img className="listss psignf transition transform rotate-45 w-[25px] h-[25px] lg:w-[45px] lg:h-[45px] my-auto" src={plus} alt="" />
//                     </button>

//                     <div className="answer hidden max-w-[50%] px-10 text-lg leading-7 tracking-wider animate-fadeIn bg-red-500 bg-opacity-40 rounded-sm">
//                         <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

//                         You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
//                     </div>
//                 </div>

               
                    
//                     <button className="listss2 my-2 text-sm sm:text-md md:text-xl lg:text-3xl text-start hover:bg-red-200 hover:bg-opacity-30 flex justify-between bg-red-600 border border-red-900 rounded-sm w-[60%] mx-auto px-5 mb-5" onClick={() => toggler()}>What is Netflix

//                     <img className="listss2 psignf2 transition transform rotate-45 w-[25px] h-[25px] lg:w-[45px] lg:h-[45px] my-auto" src={plus} alt="" />
//                     </button>




               
                    
//                     <button className="listss3 my-2 text-sm sm:text-md md:text-xl lg:text-3xl text-start hover:bg-red-200 hover:bg-opacity-30 flex justify-between bg-red-600 border border-red-900 rounded-sm w-[60%] mx-auto px-5 mb-5" onClick={() => toggler()}>What is Netflix

//                     <img className="listss3 psignf3 transition transform rotate-45 w-[25px] h-[25px] lg:w-[45px] lg:h-[45px] my-auto" src={plus} alt="" />
//                     </button>




               
                    
//                     <button className="listss4 my-2 text-sm sm:text-md md:text-xl lg:text-3xl text-start hover:bg-red-200 hover:bg-opacity-30 flex justify-between bg-red-600 border border-red-900 rounded-sm w-[60%] mx-auto px-5 mb-5" onClick={() => toggler()}>What is Netflix

//                     <img className="listss4 psignf4 transition transform rotate-45 w-[25px] h-[25px] lg:w-[45px] lg:h-[45px] my-auto" src={plus} alt="" />
//                     </button>




               
                    
//                     <button className="listss5 my-2 text-sm sm:text-md md:text-xl lg:text-3xl text-start hover:bg-red-200 hover:bg-opacity-30 flex justify-between bg-red-600 border border-red-900 rounded-sm w-[60%] mx-auto px-5 mb-5" onClick={() => toggler()}>What is Netflix

//                     <img className="listss5 psignf5 transition transform rotate-45 w-[25px] h-[25px] lg:w-[45px] lg:h-[45px] my-auto" src={plus} alt="" />
//                     </button>




               
                    
//                     <button className="listss6 my-2 text-sm sm:text-md md:text-xl lg:text-3xl text-start hover:bg-red-200 hover:bg-opacity-30 flex justify-between bg-red-600 border border-red-900 rounded-sm w-[60%] mx-auto px-5 mb-5" onClick={() => toggler()}>Is Netflix good for kids?

//                     <img className="listss6 psignf6 transition transform rotate-45 w-[25px] h-[25px] lg:w-[45px] lg:h-[45px] my-auto" src={plus} alt="" />
//                     </button>




//                 </div>
//             </div>

            
                
//             <div className="h-[450px] bg-white -z-0 relative"></div>




//         </>
//     )
// }