import React from "react";
import Navbar from "../../components/modules/Navbar";
import './contactsStyles.css'
import { FaFacebook, FaMailBulk, FaYoutube, FaSearchLocation, FaInstagram } from 'react-icons/fa'
import logoToss from '../../assets/logo_toss_blanc.png'
import ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import {useEffect, useRef, useState} from 'react'
import Footer from "../../components/modules/Footer";

import emailjs from '@emailjs/browser';

gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);

const Contacts = () => {

    const [General,setGeneral] = useState(false);
    const [Sports, setSports] = useState(false);
    const [Inscription, setInscription] = useState(false);
    const [Logement, setLogement] = useState(false);
    const [Autres, setAutres] = useState(false);
    const [messageSend, setMessageSend] = useState(false);

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_e50wboa', 'template_eqvvx3c', form.current, 'S1P0iAQvvOT-psCdf')
          .then((result) => {
              console.log(result.text);
              console.log("message ok");
              e.target.reset();
              setMessageSend(true);
          }, (error) => {
              console.log(error.text);
          });
      };

    

    const handleChange=(data)=>{
        if (data=='general'){
            setGeneral(!General)
            setSports(false)
            setInscription(false)
            setLogement(false)
            setAutres(false)
        
        }
        if (data=='sports'){
            setSports(!Sports)
            setGeneral(false)
            setInscription(false)
            setLogement(false)
            setAutres(false)
        }
        if (data=='logement'){
            setSports(false)
            setGeneral(false)
            setInscription(false)
            setLogement(!Logement)
            setAutres(false)
        }
        if (data=='inscription'){
            setSports(false)
            setGeneral(false)
            setInscription(!Inscription)
            setLogement(false)
            setAutres(false)
        }
        if (data=='autres'){
            setSports(false)
            setGeneral(false)
            setInscription(false)
            setLogement(false)
            setAutres(!Autres)
        }
    }

    const FadeUpScroll = (elem)=>{
        gsap.fromTo(
            elem,
            
            {
              y:20,
              opacity:0
            },
            {
               y:0, 
               opacity:1,
                duration:1,
                scrollTrigger:{
                    trigger:elem,
                    start:"top center",
                    end:"bottom center",
              
                    toggleActions:"play none pause none",
                    
                    
                    
                }
               
                
            }
           
        )
        
    }
      useEffect(() =>{
        FadeUpScroll('#card1')
        FadeUpScroll('#card2')

      },[])

    return(
        <div>
            <Navbar scroll='true'/>
            <div className="contacts">
                <div>
                    <h1> Contacts et réclamations</h1>
                <h3> Pour toutes demandes sur l'évènement</h3>
                <h4 className="messageSend"> {messageSend ? 'Message bien envoyé, nous tentons de te répondre au plus vite':''}</h4>
                </div>
                
                <div className="contacts-card-container">
                    <div className="contacts-card">
                        <div className="contacts-card-black">
                            <h2> Contact information</h2>
                            <div className="contacts-card-informations">
                                <div className="contacts-card-mail">
                                    <FaMailBulk className="mail"/>
                                    <a href='mailto:toss@cs-sports.fr'>toss@cs-sports.fr</a>
                                </div>
                                <div className="contacts-card-location">
                                    <FaSearchLocation className="location"/>
                                    <div>
                                        <p> 3 rue Joliot Curie <br/> Gif-sur-Yvette, 91190</p>
                                    </div>
                                </div>
                            </div>
                            <div className="contacts-card-social-media">
                                <a href=''> <FaYoutube/></a>
                                <a href=''> <FaInstagram/></a>
                                <a href=''> <FaFacebook/></a>
                            </div>
                            <div className="circle-1">
                            </div>
                            <div className="circle-3">
                            </div>
                            <div className="circle-2">
                                <img src={logoToss}/>
                            </div>
                        </div>
                        <div className="contacts-card-white">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="contact-form">
                                    <div className="input-container">
                                        <h4> Prénom</h4>
                                        <input type="text" name='firstname'/>
                                    
                                    </div>
                                    <div className="input-container">
                                        <h4 className="bold"> Nom de famille</h4>
                                        <input type='text' name='lastname'/>
                                    </div>
                                </div>
                                <div className="contact-form">
                                    <div className="input-container">
                                        <h4> Email</h4>
                                        <input type='email' name='user_email'/>
                                    </div>
                                    <div className="input-container">
                                        <h4 className="bold"> Numéro de téléphone</h4>
                                        <input type='tel' name='user_phone'/>
                                    </div>
                                </div>
                                <div className="contact-form-subject">
                                    <h4> Choisissez un sujet ?</h4>
                                    <div className="contact-form-checkbox">
                                        <div>
                                            <input type="checkbox" className="checkbox-round" name='subject' value='[TOSS] General' onChange={()=>handleChange('general')} checked={General}/>
                                            <p> Général</p>
                                        </div>
                                        <div>
                                            <input type="checkbox" className="checkbox-round" name='subject' value='[TOSS] Sports' onChange={()=>handleChange('sports')} checked={Sports}/>
                                            <p> Sports</p>
                                        </div>
                                        <div>
                                            <input type="checkbox" className="checkbox-round" name='subject' value='[TOSS] Inscription' onChange={()=>handleChange('inscription')} checked={Inscription}/>
                                            <p> Inscription</p>
                                        </div>
                                        <div>
                                            <input type="checkbox" className="checkbox-round" name='subject' value='[TOSS] Logement' onChange={()=>handleChange('logement')} checked={Logement}/>
                                            <p> Logement</p>
                                        </div>
                                        <div>
                                            <input type="checkbox" className="checkbox-round" name='subject' value='[TOSS] Autres' onChange={()=>handleChange('autres')} checked={Autres}/>
                                            <p> Autres</p>
                                        </div>

                                    </div>
                                </div>
                                <div className="contact-form-message">
                                    <h4> Message</h4>
                                    <input type='text' placeholder="Ecris ton message..." name='message'/>
                                    <button type="submit"> Envoyez le message</button>
                                </div>
                                </form>
                        </div>
                    </div>

                </div>
            </div>
            <div className="contact-person">
                <h2> Equipe organisatrice du TOSS</h2>
                <div className="contact-person-container">
                    <div className="contact-person-card card1" id='card1'>
                        <div className="circle-person1"></div>
                        <div className="circle-person2"></div>
                        <div className="circle-person3"></div>

                        <h4> Comité d'organisation du TOSS</h4>
                        <div >
                            <div className="contact-person-content">
                                <h5> Juliette Bénard</h5>
                                <div className="contact-person-content-mail">
                                    <FaMailBulk className="mail1"/>
                                       <a href=''>juliette.benard@cs-sports.fr</a>
                                </div>
                             
                                <div className="line-vertical">

                                </div>
                                <h6> Directrice opérationnelle</h6>

                            </div>
                            <div className="contact-person-content">
                                <h5> Léo Rossignol</h5>
                                <div className="contact-person-content-mail">
                                    <FaMailBulk className="mail1"/>
                                       <a href=''>leo.rossignol@cs-sports.fr</a>
                                </div>
                             
                                <div className="line-vertical">

                                </div>
                                <h6> Responsable opérationnel - Sports et Actis</h6>

                            </div>
                            <div className="contact-person-content">
                                <h5> Arthur Carsana</h5>
                                <div className="contact-person-content-mail">
                                    <FaMailBulk className="mail1"/>
                                       <a href=''>arthur.carsana@cs-sports.fr</a>
                                </div>
                             
                                <div className="line-vertical">

                                </div>
                                <h6> Responsable opérationnel - Services</h6>

                            </div>
                        </div>
                        
                    </div>
                    <div className="contact-person-card card2" id='card2'>
                    <div className="circle-person4"></div>
                    <div className="circle-person5"></div>

                        <h4>Membres organisateurs du BDS</h4>
                        <div className="contact-persons">
                            <div className="contact-persons-col1">
                                <div className="contact-persons-row">
                                    <div>
                                        <h5> Maxime Pruvost</h5>
                                        <a href="">maxime.pruvost@cs-sports.fr</a>
                                    </div>
                                    <h6> Président BDS</h6>
                                </div>
                                <div className="contact-persons-row">
                                    <div>
                                        <h5> Aurélien Rivière</h5>
                                        <a href="">aurelien.riviere@cs-sports.fr</a>
                                    </div>
                                    <h6> Trésorier</h6>
                                </div>
                                <div className="contact-persons-row">
                                    <div>
                                        <h5> Oscar Prangé</h5>
                                        <a href="">oscar.prange@cs-sports.fr</a>
                                    </div>
                                    <h6> Vice Président</h6>
                                </div>
                                <div className="contact-persons-row">
                                    <div>
                                        <h5> Constance Balansard</h5>
                                        <a href="">constance.balansard@cs-sports.fr</a>
                                    </div>
                                    <h6> Sécrétaire générale</h6>
                                </div>
                                <div className="contact-persons-row">
                                    <div>
                                        <h5> Alexandre Guillet</h5>
                                        <a href="">alexandre.guillet@cs-sports.fr</a>
                                    </div>
                                    <h6> Directeurs qualité - ISO 9001</h6>
                                </div>
                                <div className="contact-persons-row">
                                    <div>
                                        <h5> Clément Aranda</h5>
                                        <a href="">clement.aranda@cs-sports.fr</a>
                                    </div>
                                    <h6> Directeurs qualité - ISO 9001</h6>
                                </div>
                                <div className="contact-persons-row">
                                    <div>
                                        <h5> Clément Aranda</h5>
                                        <a href="">clement.aranda@cs-sports.fr</a>
                                    </div>
                                    <h6> Responsable Délégations Internationales</h6>
                                </div>
                            </div>
                            <div className="contact-persons-col2">
                            <div className="contact-persons-row">
                                    <div>
                                        <h5> Eliot Atlani</h5>
                                        <a href="">eliot.atlani@cs-sports.fr</a>
                                    </div>
                                    <h6> Responsable informatique</h6>
                                </div>
                                <div className="contact-persons-row">
                                    <div>
                                        <h5> Titouan Loustanau</h5>
                                        <a href="">titouan.loustanau@cs-sports.fr</a>
                                    </div>
                                    <h6> Responsable logistique</h6>
                                </div>
                                <div className="contact-persons-row">
                                    <div>
                                        <h5> Gaëlle Autard</h5>
                                        <a href="">gaelle.autard@cs-sports.fr</a>
                                    </div>
                                    <h6> Responsable communication</h6>
                                </div>
                                <div className="contact-persons-row">
                                    <div>
                                        <h5> Mathis Herlant</h5>
                                        <a href="">mathis.herlant@cs-sports.fr</a>
                                    </div>
                                    <h6> Responsable entreprises</h6>
                                </div>
                                <div className="contact-persons-row">
                                    <div>
                                        <h5> Eva Louvel</h5>
                                        <a href="">eva.louvel@cs-sports.fr</a>
                                    </div>
                                    <h6> Responsable entreprises</h6>
                                </div>
                                <div className="contact-persons-row">
                                    <div>
                                        <h5> Bilal Kopp</h5>
                                        <a href="">bilal.kopp@cs-sports.fr</a>
                                    </div>
                                    <h6> Responsable entreprises</h6>
                                </div>
                                <div className="contact-persons-row">
                                    <div>
                                        <h5> Aurélien Rivière</h5>
                                        <a href="">aurelien.riviere@cs-sports.fr</a>
                                    </div>
                                    <h6> Responsable délégations</h6>
                                </div>
                                <div className="contact-persons-row">
                                    <div>
                                        <h5> Gaëlle Autard</h5>
                                        <a href="">gaelle.autard@cs-sports.fr</a>
                                    </div>
                                    <h6> Responsable délégations</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Contacts