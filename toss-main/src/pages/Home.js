
import React, { useState } from 'react'

import Navbar from '../components/modules/Navbar'
import Video from '../components/homepage/Video'

import FirstSection from '../components/homepage/FirstSection'
import SecondSection from '../components/homepage/SecondSection'
import ThirdSection from '../components/homepage/ThirdSection'
import FourthSection from '../components/homepage/FourthSection'
import FifthSection from '../components/homepage/FifthSection'
import Iphone from '../components/homepage/Iphone'
import Footer from '../components/modules/Footer'


const Home = () => {



    return (
        <div>
           
           <Navbar scroll='false' color='transparent'/>
            <Video />
            <FirstSection />
            <SecondSection/>
            <ThirdSection />
            <FourthSection/>
            <FifthSection/>
            <Iphone/>
            <Footer />
           
    </div>
       
        
    )
}

export default Home