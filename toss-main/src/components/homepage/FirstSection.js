import React from 'react'
import terrain from '../../assets/terrain_drone_2.jpg'
import './FirstSectionStyles.css'
import { AiFillCaretRight } from "react-icons/ai";
import { Link } from 'react-router-dom'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import { useEffect, useRef } from 'react'
import { isMobile } from 'react-device-detect'


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const FirstSection = () => {

    const slideInLeft = (elem) => {
        gsap.fromTo(
            elem,

            {
                x: -40,
                opacity: 0,


            },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: elem,
                    start: "top center",
                    end: "bottom center",

                    toggleActions: "play none none none"
                }
            }
        )
    }
    const slideInRight = (elem) => {
        gsap.fromTo(
            elem,

            {
                x: 40,
                opacity: 0,


            },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: elem,
                    start: "top center",
                    end: "bottom center",

                    toggleActions: "play none none none"
                }
            }
        )
    }

    const slideInBottom = (elem) => {
        gsap.fromTo(
            elem,

            {
                y: 40,
                opacity: 0,


            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: elem,
                    start: "top center",
                    end: "bottom center",

                    toggleActions: "play none none none"
                }
            }
        )
    }

    useEffect(() => {
        if (!isMobile) {
            slideInLeft('#first-section-image')
            slideInRight('#first-section-texte')
        } else {
            slideInBottom('#first-section-image')
            slideInBottom('#first-section-texte')
        }



    }, [])

    return (

        <div className='first-section'>
            <div className='first-section-image' id='first-section-image'>
                <img src={terrain} />
            </div>
            <div className='first-section-texte' id='first-section-texte'>
                <h5> Sixte 2025 </h5>
                <h3> A Clairefontaine, centre national du football</h3>

                <p> Organisé par le Bureau des Sports de CentraleSupélec, le Sixte est un tournoi de foot à 7 qui a lieu au centre national du football à Clairefontaine.</p>
                <p> Un lieu historique du football français, marchez sur les pas des plus grands.</p>

                <Link to='/contact' className='btn-first-section'>S'inscrire <AiFillCaretRight className='fleche' /> </Link>

            </div>

        </div>

    )
}

export default FirstSection
