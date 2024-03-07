
import React, {lazy, Suspense, useEffect, useState } from "react"
import { ReactDOM } from "react"
 import Editorial from "./pages/TOSS 2023/Editorial"
 import Home from './pages/Home'
import Footer from "./components/modules/Footer"
 import Sports from "./pages/TOSS 2023/Sports"
import { Route, Routes } from "react-router-dom"
 import Presentation from "./pages/TOSS 2023/Presentation"
 import Mazars from "./pages/partenaires/Mazars"
import PartenairesToss from "./pages/partenaires/PartenairesToss"
import DevenirPart from "./pages/partenaires/DevenirPart"
import AssoPart from "./pages/partenaires/AssoPart"
import Confidentialite from "./pages/espParticipant/confidentialite"
import Delegation from './pages/espParticipant/delegation'
import NonDelegation from './pages/espParticipant/non-delegation'
import ReglementInt from './pages/espParticipant/reglementInt'
import AccesTournoi from './pages/infoPratiques/accesTournoi'
import Contacts from './pages/infoPratiques/contacts'
import Faq from './pages/infoPratiques/faq'
import MentionsLegales from './pages/infoPratiques/mentionsLegales'
import Tarif from './pages/infoPratiques/tarif'
import ScrollTopTop from "./components/function/ScrollToTop"
import AmbassadeurInt from "./pages/infoPratiques/ambassadeurInt"
import Galerie from './pages/Galerie'
import Engagements from "./pages/Engagements"
import Bracelet from "./pages/infoPratiques/bracelet"
import Spinner from "./components/function/Spinner"
import './components/function/SpinnerStyles.css'
import {useTranslation} from "react-i18next";






function App() {

  const [t, i18n] = useTranslation('common');
  const [loader,setLoader] = useState(true)
  const [loaderErase,setLoaderErase] = useState(true)
  
  const lang = localStorage.getItem('lang')
  console.log(lang)


  useEffect(()=>{

    if (lang != null){
      setTimeout(()=>{
       setLoader(false)
     
     },2500)

     setTimeout(()=>{
      setLoaderErase(false)
     
     },4000)

    }
    
  },[])

  const validLang = (lang)=>{
    if (lang =='fr'){
      i18n.changeLanguage('FR')
      localStorage.setItem('lang','FR')
      setTimeout(()=>{
        setLoader(false)
      
      },1000)
 
      setTimeout(()=>{
       setLoaderErase(false)
      
      },2500)
 
     }
    
    if (lang =='en'){
      i18n.changeLanguage('EN')
      localStorage.setItem('lang','EN')
      setTimeout(()=>{
        setLoader(false)
      
      },1000)
 
      setTimeout(()=>{
       setLoaderErase(false)
      
      },2500)
    }
  }

  return (
    <>

      
      <div>
      <div className={loader ? 'loader-toss' :(loaderErase ? 'loader-toss loader--hide' :'erase')}>
                <div className="lds-ring" >
            
                    <div>
                        <svg width="325" height="499" viewBox="0 0 325 499" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 222L311.5 0L206 258L324.5 279.5L17 498.5L14.5 497L118 243.5L0 222Z" fill="#FFFFFF"/>
                        </svg>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
            
                </div >
                {lang == null ?
                 <div > 
                  <h1>
                    Choix de la langue
                    </h1>
                    <div className="loader-lang">

                    <button className="loader-btn" onClick={()=>validLang('fr')}>
                      Français
                    </button>
                    <button className="loader-btn" onClick={()=>validLang('en')}>
                      English
                    </button>
                    </div>

                 </div>:
                 <></>
              }
               
        </div>
        <ScrollTopTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editorial" element={<Editorial />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/mazars" element={<Mazars />} />
        <Route path="/partenaireToss" element={<PartenairesToss />} />
        <Route path="/devenirPart" element={<DevenirPart />} />
        <Route path="/assoPart" element={<AssoPart />} />
        <Route path="/confidentialite" element={<Confidentialite />} />
        <Route path="/delegation" element={<Delegation />} />
        <Route path="/nonDelegation" element={<NonDelegation />} />
        <Route path="/reglementInt" element={<ReglementInt />} />
        <Route path="/accesTournoi" element={<AccesTournoi/>} />
        <Route path="/ambassadeur" element={<AmbassadeurInt />} />
        <Route path="/contacts" element={<Contacts/>} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/mentionsLegales" element={<MentionsLegales />} />
        <Route path="/tarif" element={<Tarif />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/engagements" element={<Engagements />} />
        <Route path="/bracelets" element={<Bracelet />} />
      </Routes>
      </div>
      
   
    

   
    

   
    
   
   
      
    
  
    </>
  )
}



export default App