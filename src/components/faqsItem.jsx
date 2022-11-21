import React from "react";

import { useState } from "react";

export default function FaqItem({query, answer}){
    return (
        <div>
            <div className="pb-3 border-3 border-white ">
                {query}
            </div>
            <div>
                {
                    answer.map(item=>
                        <span className="pb-2">{item}</span>
                        )
                }
            </div>
        </div>
    )
}