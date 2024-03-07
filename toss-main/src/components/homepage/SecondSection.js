import React from 'react'
import './SecondSectionStyles.css'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'



gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const SecondSection = () => {
    //Animation on scroll
    const ScrollAppear = (elem)=>{
        gsap.fromTo(
            elem,
            
            {
              
                opacity:0,
                
    
            },
            {
                opacity:1,
               
                duration:1,
                scrollTrigger:{
                    trigger:elem,
                    start:"top center",
                    end:"bottom center",
                    
                    toggleActions:"play none none none"
                }
            }
        )
    }
    


    useEffect(()=>{
        ScrollAppear('#time-title')
        ScrollAppear('#time')
    },[])









    //Timer
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('May 12, 2023 18:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000*60*60*24));
            const hours = Math.floor(distance % (1000*60*60*24) / (1000*60*60));
            const minutes = Math.floor(distance % (1000*60*60) / (1000*60));
            const seconds = Math.floor(distance % (1000*60) / (1000));

      
           


                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            
            
        },1000);
    };

    //ComponentDidMount

    useEffect(() =>{
    startTimer();
    return () =>{
    clearInterval(interval.current);
}
    },)

  return (
  
    <div className='second-section'>
      

        <div className='timer'>
            <div id='time-title'>
                <h2>
             Début de la 33ème édition dans ...
            </h2>
            </div>
            <div id='time'>
                <section>
                    <h6> {timerDays}</h6>
                    <p><small>Days</small></p>
                </section>
                <span></span>
                <section>
                    <h6> {timerHours}</h6>
                    <p><small>Hours</small></p>
                </section>
                <span></span>
                <section>
                    <h6> {timerMinutes}</h6>
                    <p><small>Minutes</small></p>
                </section>
                <span>
                </span>
                <section>
                    <h6> {timerSeconds}</h6>
                    <p><small>Seconds</small></p>
                </section>
                
            </div>
    </div>
     
    </div>

  )
}

export default SecondSection
