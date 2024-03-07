import './EditorialStyles.css'
import Precresse from '../assets/photoValeriePecresse.jpeg'
import Karam from '../assets/photoPatrickKaram.jpeg'
import Typed from 'react-typed';
import { HiChevronDoubleDown } from "react-icons/hi";
import { Link as LinkScroll} from 'react-scroll';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import {useEffect,useRef} from 'react'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const EditorialContent = (props) => {

  const titleRef = useRef();

  const onLoad = () =>{
    gsap.timeline().fromTo(".letter",
    {
        x: -100,
        opacity:0,
    },
    {
        x:0,
        opacity:1,
        stagger:0.33,
        delay:0.3,
    }).to('.letter',
    {
        margin: "0 1vw",
        delay:0.8,
        duration:0.5
    }).to(".letter",{
        margin: "0",
        delay:0.8,
        duration:0.5
    })
    
}

useEffect(()=>{
  onLoad();

      },[])

    return (
      <div className='editorial'>

                <div className='editorial-home'>
                    <div className='editorial-title'>
        <h1 id ='title' ref={titleRef}>
          <span className='letter'>é</span>
          <span className='letter'>D</span>
          <span className='letter'>I</span>
          <span className='letter'>T</span>
          <span className='letter'>O</span>
          <span className='letter'>R</span>
          <span className='letter'>I</span>
          <span className='letter'>A</span>
          <span className='letter'>L</span>
        </h1>
                <h3> Le TOSS : un évènement sportif 
                    <span> </span>
                    <span className='gradient'>
                <Typed
                    strings={[
                        " de qualité",
                        " fait pour vous",
                        " de 4500 personnes",
                        " inoubliable"
                    ]}
                    typeSpeed={80}
                    backSpeed={50}
                    loop/>
                    </span>
                    </h3>

                </div>
        
                    
                    <span className='chevrondouble'><LinkScroll to='editorial-content' smooth={true}  offset={-100} duration={1000}><HiChevronDoubleDown size={40}/></LinkScroll></span>
                    <div className='vague'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f5f4f4" fillOpacity="1" d="M0,288L60,288C120,288,240,288,360,266.7C480,245,600,203,720,208C840,213,960,267,1080,288C1200,309,1320,299,1380,293.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                    </div>
                    
            </div>
           <div className='editorial-content' id ="editorial-content">
        <h3> L'île de France : Terre de sportives et sportifs </h3>
       
            <p>
            Les Franciliens sont des sportifs : plus de la moitié d’entre eux pratiquent régulièrement une activité physique. Parce que le sport contribue au bien-être de chacun, et parce qu’il occupe une place importante dans le quotidien de ses habitants, la Région Ile-de-France est naturellement aux côtés des acteurs du monde du sport. Nous en faisons un axe fort de notre politique régionale.
         
            <br/>
            <br/>
            
            Développer le sport en Ile-de-France est un enjeu de santé publique. C’est aussi un enjeu social que de permettre à chacun, quel que soit ses moyens, de pratiquer en toute sécurité une activité physique. Mais c’est surtout un enjeu démocratique, car le sport est un outil formidable d’éducation populaire et d’émancipation. Les pratiques sportives offrent à chacun, avec d’autres activités, la possibilité de se construire et de s’épanouir dans son parcours de vie.
            
            <br/>
            <br/>
            
            C’est dans ce cadre que la Région investit et favorise l’accès à la pratique sportive étudiante. Ainsi, par le biais de la convention partenariale avec le comité Ile-de-France de Sport Universitaire, elle soutient financièrement des opérations spécifiques en direction des équipes féminines et du développement de la pratique sportive étudiante et l’organisation de différents championnats de France universitaires. 
            
            <br/>
            <br/>
            
            Soutenir ensemble les événements sportifs organisés sur le territoire francilien contribue aussi au rayonnement de notre région et sera incontestablement une vitrine et un porte-voix, afin de démontrer le savoir-faire français et de porter la candidature de la région capitale pour les Jeux Olympiques et Paralympiques de Paris 2024.
            
            <br/>
            <br/>
            
            La Région avec votre soutien s’engage pleinement pour faire gagner la France !     
            
            <br/>
            <br/>
            
Nous souhaitons le plus grand succès à tous les étudiants et étudiantes du TOSS dont, pour la première fois, la Région a décidé de soutenir l’organisation.
            
            <br/>
            <br/>
            
            Que cet évènement soit une fête du sport pour les Franciliennes et Franciliens !
            </p>
        </div>
        <div className='editorial_signature'>
            <div className='semi-circle'>
            </div> 
            <div className='editorial-name'>
              <div>
            <h3> Valérie PECRESSE</h3>
                <p> Présidente du Consiel régional d'Ile-de-France</p>
              </div>
              <br/>
              <br/>
              <div>
            <h3> Patrick KARAM</h3>
                <p> Vice-président du Conseil régional d'Ile-de-France chargé des sports, de la jeunesse et la vie associative</p>
              </div>
            </div>
            <div style={{display:'flex',justifyContent:'flex-end'}}>
                    <div className='semi-circle-2'>
            </div>
      
              
              
            </div>
            
        </div>
      </div>
    )
  }
  
  export default EditorialContent
  