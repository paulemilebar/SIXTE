
import React from 'react'
import EditorialContent from '../../components/EditorialContent'
import Navbar from '../../components/modules/Navbar'
import Footer from '../../components/modules/Footer'
const Editorial = () => {

    
    return (
        <div>
           <Navbar scroll='false' color='transparent' />
           
            <EditorialContent />
            <Footer />
        </div>
    )
}

export default Editorial