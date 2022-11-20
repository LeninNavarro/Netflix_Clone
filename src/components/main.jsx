import React from "react";
import video from "../assets/sampletrailer.mp4"
export default function Main(){
    return(
        <div className='grid z-50 relative pt-3 bg-red-700 h-screen'>
            <div className="grid grid-cols-2">
                <div>
                    <video 
                    autoPlay 
                    muted 
                    loop 
                    className='w-full relative overflow-hidden' 
                    src={video}>
                    </video>
                    <div>
                        <p className='mb-2'>Unlimited movies, TV shows, and more.</p>
                        <p>Watch anywhere. Cancel anytime.</p>
                        <p>Ready to watch? Enter your email to create or restart your membership.</p>
                        <input type="email" placeholder='example@email.com' className='mr-1 py-3'/><button className='border-1 border-white px-2 py-3 bg-red-900 text-white font-medium'>Get Started</button>
                    </div>
                </div>
                <div>
                    <p className="text-2xl font-medium">Welcome back</p><br/>
                    <p className='text-base font-light'>Decided now?{' '}<a href='#' className='border rounded-md px-3 ml-2 font-semibold'>Register</a></p><br /> <br />

                    <strong>Log In</strong><br/>
                    <div>
                        <form className='rounded-t-md border-1 border-white'>
                        <div >
                            <input type = 'text' placeholder='Username/Email' className='rounded-sm mb-3' />
                        </div>
                        <div >
                            <input type = 'password' placeholder='Password' className = 'rounded-sm' />
                        </div>
                        <div>
                            <button className='border-2 border-red-900 bg-red-700 text-white font-bold rounded-md mx-3 mt-3 px-4'> Sign In</button>
                        </div>
                        </form>

                    </div>
                </div>
                
            </div>
            
        </div>
    );
}