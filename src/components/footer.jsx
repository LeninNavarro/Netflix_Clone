import React from "react";
import adams from '../assets/adamp.jpg'

export default function Footer () {
    return (
        <div className=" ">
             
             <div className="z-0 flex flex-col inset-0 inset-y-0 top-[350px] bg-white fixed  bg-opacity-90 w-[100%] text-red-800">
                <div className="flex flex-col mx-auto">  
                    <p className="text-start my-10">Questions? Contact us.</p>
                    <div className="flex lg:flex-row flex-wrap gap-16 lg:gap-32 leading-9">
                    <div>
                        <p>FAQ</p>
                        <p>Investor Relations</p>
                        <p>Ways to Watch</p>
                        <p>Corporate Information</p>
                        <p>Only on Netflix</p>
                    </div>
                    <div>
                        <p>Help Center</p>
                        <p>Jobs</p>
                        <p>Terms of Use</p>
                        <p>Contact Us</p>
                    </div>
                    <div>
                        <p>Account</p>
                        <p>Redeem Gift Cards</p>
                        <p>Privacy</p>
                        <p>Speed Test</p>
                    </div>
                    <div>
                        <p>Media Center</p>
                        <p>Buy Gift Cards</p>
                        <p>Cookie Preferences</p>
                        <p>Legal Notices</p>
                    </div>
            </div>

            <button className="border border-red-900 rounded-md w-20 h-10 mt-10 hover:bg-red-300 hover:bg-opacity-30">English
            </button>

            <p className="text-start my-5">Webflix Philippines</p>
            
         </div>
         </div>  



        </div>
    )
}