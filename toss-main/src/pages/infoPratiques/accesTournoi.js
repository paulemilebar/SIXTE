import React from "react";
import Footer from "../../components/modules/Footer";
import Navbar from "../../components/modules/Navbar";
import './accesTournoiStyles.css'
import Toss from '../../assets/logo_toss_noir.png'
import {BsFileArrowDown} from 'react-icons/bs'
import { Link as LinkScroll} from 'react-scroll';
import { useState } from "react";

/* Import images */

import mapCS from '../../assets/plan/map_CS.png'
import mapEquitation from '../../assets/plan/map_equitation.png'
import mapOrsay from '../../assets/plan/map_x.png'
import mapX from '../../assets/plan/map_orsay.png'

import { GoogleMap, LoadScript } from '@react-google-maps/api';


const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };

const AccesTournoi = () =>{

    const [image,setImage] = useState(mapCS)

    return (
        <div>
            <Navbar/>
            <div className="acces-tournoi">
                <div className="acces-tournoi-title">
                    <h1> Accès au tournoi</h1>
                    <LinkScroll to='plan' smooth={true}  offset={-10} duration={1000}> <BsFileArrowDown style={{color:'black'}} className='fleche-mazars'/></LinkScroll>
                </div>
                <div className="acces-tournoi-plan" id='plan'>
                    <h2> Plan de CentraleSupélec</h2>
                    <div className="acces-tournoi-row">
                        <div className="acces-tournoi-btn">
                            <button onClick={()=> setImage(mapCS)}> CentraleSupélec</button>
                            <button onClick={()=> setImage(mapX)}> Polytechnique</button>
                            <button onClick={()=> setImage(mapEquitation)}> Centre équestre</button>
                            <button onClick={()=> setImage(mapOrsay)}> Orsay</button>
                        </div>
                        <div className="acces-tournoi-img">
                              <img src={image}/>
                        </div>
                    </div>
                  
                </div>
                <div className="acces-tournoi-how">
                    <h2> Comment venir?</h2>
                    <div className='acces-tournoi-box'>
                        <div id ='left-box'>
                            
                            <h3> Venir en RER</h3>
                            <p> Ligne B - Direction St Remy les Chevreuses</p>
                            <p> Arrêt - Le Guichet</p>
                        </div>
                        <div id='center-box'>
                      
                            <h3>Venir en voiture</h3>
                            <p> Venant de Paris : Porte de Saint-Cloud == N118</p>
                        </div>
                        <div id='right-box'>
                      
                            <h3> Venir en train</h3>
                            <p> Gare la plus proche Massy-Palaiseau</p>
                        </div>

                     </div>
                </div>
                <div className="acces-tournoi-map">
                    <h2> Plan d'accès</h2>
                    <iframe width="869" height="606" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=869&amp;height=606&amp;hl=en&amp;q=3%20rue%20Joliot%20Curie%20Gif%20Sur%20Yvette+(CentraleSup%C3%A9lec)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href='https://maps-generator.com/'>Maps Generator</a>
                    <div className="acces-tournoi-data">
                        <h5> Ecole CentraleSupélec</h5>
                        <h5> 3 rue Joliot Curie</h5>
                        <h5> 91190 | Gif-Sur-Yvette</h5>
                    </div>
                </div>
                
            </div>
  
               
                
            
            <Footer/>
        </div>
    )

}

export default AccesTournoi