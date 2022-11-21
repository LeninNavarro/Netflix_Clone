import React from "react";
import logo from "../assets/box_shot.png"

export default function Nav() {

    return (
       
               <div className='sticky top-0 nav-bar bg-red-600 z-50 py-3 w-full'>
                    <div className="flexjustify-between items-center px-5 md:max-w-7xl md:mx-auto">
                        <div className="nav-bar-left flex items-center space-w-8">
                            <div className="nav-bar-left">
                                <a href="#">
                                    <img src={logo} className="w-10 bg-white rounded-md" alt="logo"></img>
                                                                                       
                                </a>
                            </div>


                            <div className="my-auto justify-evenly md:block hidden ">
                                <a href="#">Updates</a>
                                <a href="#">New Shows</a>
                                <a href="#">Random Suggestion</a>
                                
                            </div>
                        </div>
                    </div>

               
               </div>
        

    );
}

