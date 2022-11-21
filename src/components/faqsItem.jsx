import React from "react";

import { useState } from "react";

export default function FaqItem({query, answer}){
    return (
        <div className="border-2 border-white rounded-tr-xl rounded-bl-xl overflow-hidden mb-2">
            <div className='text-xl'>
                {query}
            
                <div className="flex flex-wrap gap-2 flex-row items-center justify-center text-normal md:text-sm">
                    {
                        answer.map(item=>
                            <span className="block font-medium mx-3 py-1">{item}</span>
                        )
                            
                    }
                </div>
            </div>
        </div>
    )
}