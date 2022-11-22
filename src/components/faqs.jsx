import React from "react";
import plus from '../assets/multt.png'

export default function FAQs () {

        const toggler = () => {
            var listss = document.querySelector('.listss');
            var psignf = document.querySelector('.psignf');
            var answer = document.querySelector('.answer');
            
    
            listss.addEventListener('click', () => {
                listss.classList.toggle('animate-fadeIn');
                answer.classList.toggle('hidden');
                psignf.classList.toggle('rotate-45');
            });
    

    }

    return (
        <>
            <div className="relative z-10 bg-red-700">
                <p className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl pb-16 pt-28 font-medium">Frequently Asked Questions</p>
                <div className="pb-28 border px-2">


               
                <div className="flex gap-5"> 
                    <button className="listss my-2 text-sm sm:text-md md:text-xl lg:text-3xl text-start hover:bg-red-200 hover:bg-opacity-30 flex justify-between bg-red-600 border border-red-900 rounded-sm w-[60%] mx-auto px-5 mb-5 transition transform animate-fadeIn" onClick={() => toggler()}>What is Netflix

                    <img className="listss psignf transition transform rotate-45 w-[25px] h-[25px] lg:w-[45px] lg:h-[45px] my-auto" src={plus} alt="" />
                    </button>

                    <div className="answer hidden max-w-[50%] px-10 text-lg leading-7 tracking-wider animate-righttoleft bg-red-500 bg-opacity-40 rounded-sm">
                        <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

                        You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
                    </div>
                </div>





                </div>
            </div>

            
                
            <div className="h-[450px] bg-white -z-0 relative"></div>




        </>
    )
}