//import React from 'react'
import star from "../assets/images/icon-star.svg";
import data from "../data";
import minus from "../assets/images/icon-minus.svg";
import plus from "../assets/images/icon-plus.svg"
import { useState } from "react";
import "./Accordion.css";


const Accordion = () => {
    const [display, setDisplay] = useState(null);

    const showItem=(index)=>{

        setDisplay(index === display ? null: index)
    }
  return (
    <div className="accordion">
        <header>
            <img src={star} alt="star" />
            <h1>FAQs</h1>
        </header>
        <div className="listItem">
            
                {
                    data?.map((item, index)=>{
                        return <div key={index} className="accordion-item">
                         <div onClick={()=>showItem(index)} className="accordion-head">
                            <h4>{item.question}</h4>
                            {
                                display !== index ? (<img  src={plus} alt="plus"/>)
                                : (<img  src={minus} alt="minu"/>)
                            }
                         </div>
                         {
                          display === index ? (<p>{item.answer}</p>)
                          :null
                         }
                         <div className="line"></div>
                        </div> 
                    })
                }
        </div>
    </div>
  )
}

export default Accordion