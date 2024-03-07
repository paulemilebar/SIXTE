import React from "react";
import Navbar from '../../components/modules/Navbar'
import './faqStyles.css'
import {Data} from './dataFaq'
import { useState } from "react";
import FlecheRightFaq from "../../components/function/flecheRightFaq";
import FlecheDownFaq from "../../components/function/flecheDownFaq";
import Footer from "../../components/modules/Footer";

const Faq = () => {

    const [openCard,setOpenCard] = useState(false);

    const toggle = index =>{
        if (openCard === index){
            return setOpenCard(null)
        }

        setOpenCard(index)
    }
    

    return (
        <div>
            <Navbar scroll='true' color='rgba(23, 15, 73, 1)'/>
            <div className="faq">
                <h1> F.A.Q</h1>
                <div className="faq-container">
                    {Data.map((item,index) =>{
                        return (
                            <div className={openCard === index ? 'faq-card display' : 'faq-card'}>
                                <div className="faq-content" onClick={() => toggle(index)} key={index}>
                                    <h2> {item.question}</h2>

                                                <div>
                                                   {openCard === index ? 
                                                            <FlecheDownFaq />
                                                                            : 
                                                      <FlecheRightFaq />
                                                                            }
                                                     
                                                   
                                                </div>  
                                 

                                 </div>
                                 <div className={openCard === index ? 'faq-inner active-text':'faq-inner'}>
                                    <p> {item.answer}</p>
                                    {index === 2 ?
                                    <a href=""> S'inscrire</a>:
                                    <>
                                    </>

                                    }
                                </div>
                                
                            </div> 
                        )
                       
                    })
                }
                    
                </div>

            </div>
            <Footer color='rgba(23, 15, 73, 1)' color2='rgba(111, 108, 144, 1)'/>
        </div>
    )

}

export default Faq