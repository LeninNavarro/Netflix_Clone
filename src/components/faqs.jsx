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