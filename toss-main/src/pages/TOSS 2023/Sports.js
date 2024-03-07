import React from "react";

import Navbar from "../../components/modules/Navbar";
import './sportsStyles.css'
import images from '../../components/function/SportsImages'
import CustomCursor from '../../components/function/CustomCursor'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../../components/function/CustomCursor.css';
import {AiFillCloseCircle} from 'react-icons/ai';
import {BsBookFill} from 'react-icons/bs'
import Footer from "../../components/modules/Footer";
import {BsFileArrowDown} from 'react-icons/bs'
import { Link as LinkScroll} from 'react-scroll';


const Sports = () =>{


  const [isShowCard,setShowCard] = useState(false);
 


const HideCard = () => setShowCard(false);
   
    return (
        <div>
            
            <Navbar scroll='true'/>
            <div className="sports">
                <div className="sports-home">
                    <h1> Les sports</h1>
                    <h3> Edition 2023</h3>
                    <LinkScroll to='sports-scroll' smooth={true}  offset={-10} duration={1000}> <BsFileArrowDown style={{color:'black'}} className='fleche-mazars'/></LinkScroll>

                </div>
                <div className="sports-scroll" id='sports-scroll'>
                    <div className="sports-content">

                      <div className="sports-content-margin">
 {images.map((image) =>
                        <div key={image.id}  className="sports-content-images">
                            <img  src={image.src} />
                            <div className='image-overlay'>
                                <div className="image-title">

                                  {image.title}
                                </div>
                                <button className="image-button" onClick={()=>setShowCard(image.id)}>Voir les détails</button>

                            </div>
                          </div>
                        
                        )}


                      </div>
                       
                        
                    </div>

                </div>
            </div>

            {images.map((image) =>
            <div className="sports-informations" style={{display: isShowCard === image.id ? 'flex' : 'none'}}>
              <div className="sports-informations-card">
                <div className="close" onClick={HideCard}><AiFillCloseCircle/></div>
                  <div className="sports-informations-title">
                    <h3> {image.title}</h3>
                  </div>
                  <div className="sports-informations-content">
                    <div className="sports-informations-description">
                      <h4> Description</h4>
<p> Lorem ifh zpdijazpd apodkp adkpoakdpoakd pakdpoakdpo azkdopakdpazo k</p>
                    </div>
                    <div className="sports-informations-contact">
                      <h4> Contact</h4>
                      <p> Lorem ifh zpdijazpd apodkp adkpoakdpoakd pakdpoakdpo azkdopakdpazo k</p>

                    </div>
                    <div className="sports-informations-reglement">
                      <a href=""> <BsBookFill/> Règlement</a>
                    </div>
                   
                  </div>
                   <div className="sports-informations-close">
                      <button className='image-button black-color' onClick={HideCard}>Fermer</button>
                    </div>
              </div>

            </div>
            
            
            )}
            

            <Footer />
        </div>

    )
}

export default Sports