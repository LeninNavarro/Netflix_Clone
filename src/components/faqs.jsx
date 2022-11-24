import React from "react";
import plus from '../assets/plus.png'

export default function FAQs () {
    function toggler () {
            const btnContainer = document.querySelector('.faq-btn-container');
            const btn = document.querySelector('.faq-btn');
            const psign = document.querySelector('.plus-img');
            const answer = document.querySelector('.ans-one');
            
    
            btn.addEventListener('click', () => {
                btnContainer.classList.toggle('activate');
                psign.classList.toggle('rotate-45');
                answer.classList.toggle('hidden');
            });
    

    }

return (
    <>
        <div className="relative z-10 bg-red-700">
                <p className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl pb-16 pt-28 font-medium">
                Frequently Asked Questions</p>

            <div className="flex flex-col lg:flex-row border ">
                <div className="faq-btn-container border">
                    <button className="faq-btn my-2 text-sm sm:text-md md:text-xl lg:text-3xl text-start hover:bg-red-200 hover:bg-opacity-30 flex justify-between bg-red-600 border border-red-900 rounded-sm w-[60%] mx-auto px-5 mb-5" onClick={() => toggler()}>What is Netflix?
                    
                    <img className="plus-img transition transform w-[25px] h-[25px] lg:w-[45px] lg:h-[45px] my-auto" src={plus} alt="" />
                    </button>
                </div>

                <div className="ans-one hidden max-w-[50%] px-10 mx-auto text-md lg:text-lg leading-7 tracking-wider animate-fadeIn bg-red-500 bg-opacity-40 rounded-sm">
                        <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

                        You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
                </div>
            </div>
            
<label className="inline-flex relative items-stretch cursor-pointer">
  <input type="checkbox" value="" className="sr-only peer"/>
  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Checked toggle</span>
</label>

        </div>
                
            <div className="h-[450px] bg-white -z-0 relative"></div>




        </>
    )
}