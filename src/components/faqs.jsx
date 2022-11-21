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

//     const [tab, setQ] = useState(1);

//         const toggleQ = (index) => {
//             setQ(index);
//         }

//         useEffect( () => {
//             const listss = document.querySelector('.listss');
//             const psignf = document.querySelector('.psignf');
    
//             listss.addEventListener('click', () => {
//               psignf.classList.toggle('rotate-45');
//             });
//     });

//     return (
//         <>
//             <div className="relative z-10 bg-red-700">
//                 <p className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl pb-16 pt-28 font-medium">Frequently Asked Questions</p>
//                 <ul className="pb-28 border">


//                 <li className="listss hover:bg-red-200 hover:bg-opacity-30 flex justify-between bg-red-600 border border-red-900 rounded-sm max-w-[60%] mx-auto px-5 mb-5" onClick={() => toggleQ(1)}>
                    
//                     <button className="listss my-2 text-sm sm:text-md md:text-xl lg:text-3xl text-start ">What is Netflix</button>

//                     <img className="listss psignf transition transform rotate-45 w-[25px] h-[25px] lg:w-[45px] lg:h-[45px] my-auto"  src={plus} alt="" />
//                 </li>


//                 <li className="listss hover:bg-red-200 hover:bg-opacity-30 flex justify-between bg-red-600 border border-red-900 rounded-sm max-w-[60%] mx-auto px-5 mb-5" onClick={() => toggleQ(1)}>
                
//                     <button className="my-2 text-sm sm:text-md md:text-xl lg:text-3xl text-start listss">How much does Netflix costs?</button>

//                     <img className="listss psignf transition transform rotate-45 w-[25px] h-[25px] lg:w-[45px] lg:h-[45px] my-auto"  src={plus} alt="" />
//                 </li>


//                 <li className="listss hover:bg-red-200 hover:bg-opacity-30 flex justify-between bg-red-600 border border-red-900 rounded-sm max-w-[60%] mx-auto px-5 mb-5" onClick={() => toggleQ(1)}>
                    
//                     <button className="my-2 text-sm sm:text-md md:text-xl lg:text-3xl text-start listss">Where can I watch Netflix?</button>

//                     <img className="listss psignf transition transform rotate-45 w-[25px] h-[25px] lg:w-[45px] lg:h-[45px] my-auto"  src={plus} alt="" /></li>


//                 <li className="listss hover:bg-red-200 hover:bg-opacity-30 flex justify-between bg-red-600 border border-red-900 rounded-sm max-w-[60%] mx-auto px-5 mb-5" onClick={() => toggleQ(1)}>
                
//                     <button className="my-2 text-sm sm:text-md md:text-xl lg:text-3xl text-start listss">How do I cancel?</button>

//                     <img className="listss psignf transition transform rotate-45 w-[25px] h-[25px] lg:w-[45px] lg:h-[45px] my-auto"  src={plus} alt="" /></li>


//                 <li className="listss hover:bg-red-200 hover:bg-opacity-30 flex justify-between bg-red-600 border border-red-900 rounded-sm max-w-[60%] mx-auto px-5 mb-5" onClick={() => toggleQ(1)}>
                
//                     <button className="my-2 text-sm sm:text-md md:text-xl lg:text-3xl text-start listss">What can I watch on Netflix?</button>

//                     <img className="listss psignf transition transform rotate-45 w-[25px] h-[25px] lg:w-[45px] lg:h-[45px] my-auto"  src={plus} alt="" /></li>


//                 <li className="listss hover:bg-red-200 hover:bg-opacity-30 flex justify-between bg-red-600 border border-red-900 rounded-sm max-w-[60%] mx-auto px-5 mb-5" onClick={() => toggleQ(1)}>
                
//                     <button className="my-2 text-sm sm:text-md md:text-xl lg:text-3xl text-start listss">Is Netflix good for kids?</button>
                
//                     <img className="listss psignf transition transform rotate-45 w-[25px] h-[25px] lg:w-[45px] lg:h-[45px] my-auto"  src={plus} alt="" /></li>


//                 </ul>
//             </div>

            
                
//             <div className="h-[450px] bg-white -z-0 relative"></div>




//         </>
//     )
// }