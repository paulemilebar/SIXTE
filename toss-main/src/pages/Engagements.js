import React from "react";
import Navbar from "../components/modules/Navbar";
import './EngagementsStyles.css'
import {BsFileArrowDown} from 'react-icons/bs'
import { Link as LinkScroll} from 'react-scroll';
import {BsArrowDownCircle} from 'react-icons/bs'
import Footer from "../components/modules/Footer";
import {AiOutlineRise} from 'react-icons/ai'
import {FaHandsHelping} from 'react-icons/fa'
import {BsFillPeopleFill} from 'react-icons/bs'
import {FaRecycle} from 'react-icons/fa'
import {BsLightbulb} from 'react-icons/bs'
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPluging from 'gsap/ScrollToPlugin'
import gsap from 'gsap';
import {useEffect} from 'react'



gsap.registerPlugin(ScrollTrigger,ScrollToPluging);


const Engagements = () => {

    const onLoad = () =>{
        gsap.timeline().fromTo("#engagements",
        {
            y: 50,
            opacity:0,
        },
        {
            y:0,
            opacity:1,
            duration:1.5,
        })
        
    }
    const FadeBottom = (elem,time)=>{
            
        gsap.fromTo(
            elem,
            
            {
              y:100,
                opacity:0,
                
    
            },
            {
                opacity:1,
               y:0, 
               
                duration:0.8,
                delay:time,
                scrollTrigger:{
                    trigger:elem,
                    start:"-60% 80%",
                   
                    end:"bottom center",
                    toggleActions:"play none none none",
                    
                },
                
            }
           
        )
        
    }
    
    useEffect(()=>{
      onLoad();
      FadeBottom('#link1',0)
      FadeBottom('#link2',0.2)
      FadeBottom('#link3',0.4)
      FadeBottom('#link4',0.6)
      FadeBottom('#link5',0.8)
      FadeBottom('#text1',0)
      FadeBottom('#text2',0)
      FadeBottom('#text3',0)
      FadeBottom('#text4',0)
      FadeBottom('#text5',0)
    
          },[])
    return (
        <div>
            <Navbar scroll='true' color='#cd1238'/>
            <div className="engagements">
                <div className="engagements-title" >
                     <h1 id='engagements'> Nos engagements</h1>
                    <h3 id='engagements'>
                    Au vu de l’augmentation du nombre de participant au TOSS, nous mettons un point d’honneur à effectuer une démarche d’amélioration continue de cet événement. Ainsi, le TOSS est certifié conforme à la norme ISO 9001.
                    </h3>
                    <LinkScroll to='engagements-image' smooth={true}  offset={100} duration={1000}> <BsFileArrowDown className='fleche-ambassade'/></LinkScroll>
                </div>
                <div className="engagements-image" id="engagements-image">
                    
                    <div className="engagements-img">

                    </div>
                </div>   
                <div className="engagements-link" >
                 <h2> Politique d'amélioration</h2>
                 <div className="engagements-link-content">
                    <div className="link-content" id='link1'>
                            <LinkScroll to='amelioration' smooth={true}  offset={-20} duration={1500}>
                                <AiOutlineRise className="engagements-icons"/>
                                <h3> L'amélioration continue</h3>
                            <BsArrowDownCircle className="fleche-down"/>
                            </LinkScroll>
                        
                        </div>
                        <div className="link-content" id='link2'>
                        <LinkScroll to='inclusion' smooth={true}  offset={-20} duration={2000}>
                            <FaHandsHelping className="engagements-icons"/>
                                <h3> L'inclusion</h3>
                            <BsArrowDownCircle className="fleche-down"/>
                            </LinkScroll>
                        </div>
                        <div className="link-content" id='link3'>
                        <LinkScroll to='diversite' smooth={true}  offset={-20} duration={2000}>
                            <BsFillPeopleFill className="engagements-icons"/>
                                <h3> La diversité</h3>
                            <BsArrowDownCircle className="fleche-down"/>
                            </LinkScroll>
                        </div>
                        <div className="link-content" id='link4'>
                        <LinkScroll to='developpement' smooth={true}  offset={-20} duration={2000}>
                                <FaRecycle className="engagements-icons"/>
                                <h3> Le développement durable</h3>

                            <BsArrowDownCircle className="fleche-down"/>
                            </LinkScroll>
                        </div>
                        <div className="link-content" id='link5'>
                        <LinkScroll to='innovation' smooth={true}  offset={-20} duration={2000}>
                                <BsLightbulb className="engagements-icons"/>
                                <h3> L'innovation</h3>
                            <BsArrowDownCircle className="fleche-down"/>
                            </LinkScroll>
                        </div>
                    </div>
               
                    
                    
                </div>
                <div className="engagements-card how" id='amelioration'>
                    <div className="circle-1-engagements"></div>
                    <div className="circle-4-engagements"></div>
                    <div className="circle-3-engagements"></div>

                    <h2> L'amélioration continue</h2>
                    <div className="engagements-presentation-content" id='text1'>
                                          <p> Pour appréhender au mieux les défis auxquels le TOSS sera confronté dans les années à venir, la gestion des risques et des opportunités est au centre de nos préoccupations. Les exigences de la norme ISO 9001 permettent de <span>garantir l’efficacité de notre système de management de la qualité</span>. Toutes les activités liées à l’événement sont planifiées, réalisées, contrôlées et améliorées en vue d’augmenter tous les ans la satisfaction de nos participants.</p>
                        <button>Découvrez notre politique qualité</button>
                    </div>
                </div>
                <div className="engagements-card presentation" id='inclusion'>
                    <div className="circle-1-engagements"></div>
                    <div className="circle-2-engagements"></div>
                    <div className="circle-3-engagements"></div>
                    <h2> L'inclusion</h2>
                    <div className="engagements-presentation-content" id='text2'>
                        <p>
                        Depuis 2008, le TOSS promeut le <span>handisport</span> en favorisant les interactions entre participants valides et ceux en situation de handicap présents sur notre événement. Nous proposons une <span>sensibilisation grandissante</span> des participants aux différentes formes de handicap.
                        </p>
                        <p>
                        Pour la première fois cette année, le handibasket dépassera le stade de simple démonstration. Sur les mêmes lieux de tournoi que le basket féminin, un tournoi mixte de handibasket sera ouvert à des équipes étudiantes venues de toute la France ! Un partenariat avec la <span>Fédération Etudiante pour une Dynamique Etudes et Emploi avec un Handicap (FEDEEH)</span> a été mis en place pour la préparation de ce tournoi. Par ailleurs, quelques jeunes en situation de handicap pourront découvrir les frissons du 10 Km Mazars à bord de joëlettes tractées par des équipes étudiantes.
                        </p>
                        

                    </div>
                </div>
                <div className="engagements-card how" id='diversite'>
                    <div className="circle-1-engagements"></div>
                    <div className="circle-4-engagements"></div>
                    <div className="circle-3-engagements"></div>

                    <h2> La diversité</h2>
                    <div className="engagements-presentation-content" id='text3'>
                        <p>Depuis plus de 10 ans, notre événement a choisi de rassembler des étudiants de <span>tous milieux</span>, grandes écoles, universités ou autres établissements de l’enseignement supérieur, originaires de l'ensemble du territoire français et même de l'étranger. Cette participation hétéroclite est à la base de l’identité de notre événement.</p>
                    </div>
                </div>
                <div className="engagements-card presentation" id='developpement'>
                    <div className="circle-1-engagements"></div>
                    <div className="circle-2-engagements"></div>
                    <div className="circle-3-engagements"></div>
                    <h2> Le développement durable</h2>
                    <div className="engagements-presentation-content" id='text4'>
                        <p>
                        Porté par une équipe organisatrice étudiante et encouragé par des participants chaque année <span>plus conscients des enjeux environnementaux</span>, le TOSS s’engage dans une démarche <span>écoresponsable.</span> En ce sens, de nouvelles mesures sont prises afin de proposer un événement davantage attentif à son impact environnemental :                        </p>
                       <ul>
                        <li>Au niveau de l’association Bureau des Sports CentraleSupélec, une <span>charte étudiante</span> (COP CS) a été signée, engageant moralement l’association à inclure le raisonnement environnemental dans chacun de ses événements</li>
                        <li>
                        Nomination d’un responsable Ecoresponsabilité pour l’événement
                        </li>
                        <li>
                        Création du <span>projet académique Eco-TOSS</span> impliquant 4 étudiants du Bureau des Sports CentraleSupélec
                        </li>
                        <li>
                        Publication du <span>premier Bilan Carbone</span> de l’événement après l’édition 2021
                        </li>
                        <li>
                        Un des repas proposé sera exclusivement <span>végétarien</span> et une alternative végétarienne sera proposée lors des autres repas pour les personnes l'ayant indiqué à l'inscription
                        </li>
                        <li>
                        Mise en place d’un <span>système de tri des déchets efficace</span> sur les différents lieux de tournoi, encadré par une “brigade verte” bénévole
                        </li>
                        <li>
                        Utilisation exclusive de gobelets réutilisables (écocups) non datés et limitation des emballages plastiques dans les paniers repas pour encourager la réduction des déchets

                        </li>
                       </ul>
                       <p>
                       Avec la mise en place progressive de ces actions d’écoresponsabilité, d’inclusion et de diversité depuis plusieurs années maintenant, l’équipe organisatrice avait à cœur de certifier son engagement social et environnemental. L'édition 2021 a pour la première fois obtenu le Label Agenda 21 : “Développement durable, le sport s’engage”. Ce label est en cours de renouvellement pour l'édition 2022. Délivré par le CNOSF (Comité National Olympique et Sportif Français), il confirme une prise en compte en profondeur des enjeux du développement durable dans toutes les étapes organisationnelles de l’événement.
                       </p>
                        

                    </div>
                </div>
                <div className="engagements-card how" id='innovation'>
                    <div className="circle-1-engagements"></div>
                    <div className="circle-4-engagements"></div>
                    <div className="circle-3-engagements"></div>

                    <h2> L'innovation</h2>
                    <div className="engagements-presentation-content" id='text5'>
                <p> Tous les ans, la moitié de l’équipe organisatrice est <span>renouvelée</span>. Ce changement permanent nous apporte une fraîcheur propice à l’innovation. Notre association a à cœur d'imaginer de nouvelles solutions afin d’augmenter la satisfaction de nos participants et faire de chaque édition un événement unique.</p>
                  </div>
                </div>
                
                    
               
               
            </div>
            <Footer color='#cd1238' color2='rgb(163 28 56)'/>
        </div>
    )

}

export default Engagements