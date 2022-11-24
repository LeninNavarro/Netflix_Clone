import React from "react";
import plus from '../assets/plus.png'

export default function FAQs () {
    function toggler () {
            const btnContainer = document.querySelector('.faq-btn-container');
            const btnContainer2 = document.querySelector('.faq-btn-container2');
            const btnContainer3 = document.querySelector('.faq-btn-container3');
            const btnContainer4 = document.querySelector('.faq-btn-container4');
            const btnContainer5 = document.querySelector('.faq-btn-container5');
            const btnContainer6 = document.querySelector('.faq-btn-container6');
            const btn = document.querySelector('.faq-btn');
            const btn2 = document.querySelector('.faq-btn2');
            const btn3 = document.querySelector('.faq-btn3');
            const btn4 = document.querySelector('.faq-btn4');
            const btn5 = document.querySelector('.faq-btn5');
            const btn6 = document.querySelector('.faq-btn6');
            const psign = document.querySelector('.plus-img');
            const psign2 = document.querySelector('.plus-img2');
            const psign3 = document.querySelector('.plus-img3');
            const psign4 = document.querySelector('.plus-img4');
            const psign5 = document.querySelector('.plus-img5');
            const psign6 = document.querySelector('.plus-img6');
            const answer = document.querySelector('.ans-one');
            const answer2 = document.querySelector('.ans-two');
            const answer3 = document.querySelector('.ans-three');
            const answer4 = document.querySelector('.ans-four');
            const answer5 = document.querySelector('.ans-five');
            const answer6 = document.querySelector('.ans-six');
            
    
            btn.addEventListener('click', () => {
                btnContainer.classList.toggle('activate');
                psign.classList.toggle('rotate-45');
                answer.classList.toggle('hidden');
            });
    
            btn2.addEventListener('click', () => {
                btnContainer2.classList.toggle('activate2');
                psign2.classList.toggle('rotate-45');
                answer2.classList.toggle('hidden');
            });
    
            btn3.addEventListener('click', () => {
                btnContainer3.classList.toggle('activate3');
                psign3.classList.toggle('rotate-45');
                answer3.classList.toggle('hidden');
            });
    
            btn4.addEventListener('click', () => {
                btnContainer4.classList.toggle('activate4');
                psign4.classList.toggle('rotate-45');
                answer4.classList.toggle('hidden');
            });
    
            btn5.addEventListener('click', () => {
                btnContainer5.classList.toggle('activate5');
                psign5.classList.toggle('rotate-45');
                answer5.classList.toggle('hidden');
            });
    
            btn6.addEventListener('click', () => {
                btnContainer6.classList.toggle('activate6');
                psign6.classList.toggle('rotate-45');
                answer6.classList.toggle('hidden');
            });
    

    }

return (
    <>
        <div className="relative z-10 bg-red-700">
                <p className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl pb-16 pt-28 font-medium">
                Frequently Asked Questions</p>

            <div className="flex">
                <div className="faq-btn-container ">
                    <button className="faq-btn my-2 text-sm sm:text-md md:text-xl lg:text-3xl text-start hover:bg-red-200 hover:bg-opacity-30 flex justify-between bg-red-600 border border-red-900 rounded-sm w-[60%] mx-auto px-5 mb-5" onClick={() => toggler()}>What is Netflix?
                    
                    <img className="plus-img transition transform w-[25px] h-[25px] lg:w-[45px] lg:h-[45px] my-auto" src={plus} alt="" />
                    </button>
                </div>

                <div className="ans-one hidden max-w-[50%] px-2 mx-auto text-md lg:text-lg leading-4 lg:leading-7 tracking-wider font-light text-xs animate-fadeIn bg-red-500 bg-opacity-40 rounded-sm">
                        <p className="w-full m-0 p-0">Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

                        You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
                </div>
            </div>
            
            <div className="flex">
                <div className="faq-btn-container2">
                    <button className="faq-btn2 my-2 text-sm sm:text-md md:text-xl lg:text-3xl text-start hover:bg-red-200 hover:bg-opacity-30 flex justify-between bg-red-600 border border-red-900 rounded-sm w-[60%] mx-auto px-5 mb-5" onClick={() => toggler()}>How much does Netflix costs?
                    
                    <img className="plus-img2 transition transform w-[25px] h-[25px] lg:w-[45px] lg:h-[45px] my-auto" src={plus} alt="" />
                    </button>
                </div>

                <div className="ans-two hidden max-w-[50%] px-2 mx-auto text-md lg:text-lg leading-4 lg:leading-7 tracking-wider font-light text-xs animate-fadeIn bg-red-500 bg-opacity-40 rounded-sm">
                        <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₱149 to ₱549 a month. No extra costs, no contracts.</p>
                </div>
            </div>
    
            <div className="flex">
                <div className="faq-btn-container3">
                    <button className="faq-btn3 my-2 text-sm sm:text-md md:text-xl lg:text-3xl text-start hover:bg-red-200 hover:bg-opacity-30 flex justify-between bg-red-600 border border-red-900 rounded-sm w-[60%] mx-auto px-5 mb-5" onClick={() => toggler()}>Where can I watch?
                    
                    <img className="plus-img3 transition transform w-[25px] h-[25px] lg:w-[45px] lg:h-[45px] my-auto" src={plus} alt="" />
                    </button>
                </div>

                <div className="ans-three hidden max-w-[50%] px-2 mx-auto text-md lg:text-lg leading-4 lg:leading-7 tracking-wider font-light text-xs animate-fadeIn bg-red-500 bg-opacity-40 rounded-sm">
                        <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

                        You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                </div>
            </div>
    
            <div className="flex">
                <div className="faq-btn-container4">
                    <button className="faq-btn4 my-2 text-sm sm:text-md md:text-xl lg:text-3xl text-start hover:bg-red-200 hover:bg-opacity-30 flex justify-between bg-red-600 border border-red-900 rounded-sm w-[60%] mx-auto px-5 mb-5" onClick={() => toggler()}>How do I cancel?
                    
                    <img className="plus-img4 transition transform w-[25px] h-[25px] lg:w-[45px] lg:h-[45px] my-auto" src={plus} alt="" />
                    </button>
                </div>

                <div className="ans-four hidden max-w-[50%] px-2 mx-auto text-md lg:text-lg leading-4 lg:leading-7 tracking-wider font-light text-xs animate-fadeIn bg-red-500 bg-opacity-40 rounded-sm">
                        <p>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                </div>
            </div>
    
            <div className="flex">
                <div className="faq-btn-container5">
                    <button className="faq-btn5 my-2 text-sm sm:text-md md:text-xl lg:text-3xl text-start hover:bg-red-200 hover:bg-opacity-30 flex justify-between bg-red-600 border border-red-900 rounded-sm w-[60%] mx-auto px-5 mb-5" onClick={() => toggler()}>What can I watch on Netflix?
                    
                    <img className="plus-img5 transition transform w-[25px] h-[25px] lg:w-[45px] lg:h-[45px] my-auto" src={plus} alt="" />
                    </button>
                </div>

                <div className="ans-five hidden max-w-[50%] px-2 mx-auto text-md lg:text-lg leading-4 lg:leading-7 tracking-wider font-light text-xs animate-fadeIn bg-red-500 bg-opacity-40 rounded-sm">
                        <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                </div>
            </div>
    
            <div className="flex">
                <div className="faq-btn-container6">
                    <button className="faq-btn6 my-2 text-sm sm:text-md md:text-xl lg:text-3xl text-start hover:bg-red-200 hover:bg-opacity-30 flex justify-between bg-red-600 border border-red-900 rounded-sm w-[60%] mx-auto px-5 mb-5" onClick={() => toggler()}>Is Netflix good for kids?
                    
                    <img className="plus-img6 transition transform w-[25px] h-[25px] lg:w-[45px] lg:h-[45px] my-auto" src={plus} alt="" />
                    </button>
                </div>

                <div className="ans-six hidden max-w-[50%] px-2 mx-auto text-md lg:text-lg leading-4 lg:leading-7 tracking-wider font-light text-xs animate-fadeIn bg-red-500 bg-opacity-40 rounded-sm">
                        <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.

                        Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
                </div>
            </div>
    

        </div>
                
            <div className="h-[450px] bg-white -z-0 relative"></div>




        </>
    )
}