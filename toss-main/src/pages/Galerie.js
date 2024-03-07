import React from "react";
import Footer from "../components/modules/Footer";
import Navbar from "../components/modules/Navbar";
import './GalerieStyles.css'
import Pics from '../assets/asso_partenaire/pics.png'
import './EngagementsStyles.css'

const Galerie = () => {

    return (
        <div>
            <Navbar />
            <div className="galerie">
                <h1> Galerie photo</h1>
                <div className="galerie-pics">
                    <h3> Vous pouvez voir toutes les photos du TOSS sur le site de Pics </h3>
                    <a href='https://galerie.pics/'><img src={Pics}/></a>
                         <h3>
                            Encore un grand merci pour tout leur travail !
                    </h3>
                    <div className="galerie-links">
                        <a href="https://galerie.pics/galerie/toss-2022"> Edition 2022</a>
                        <a href="https://galerie.pics/galerie/toss-2019"> Edition 2019</a>
                        <a href="https://galerie.pics/galerie/toss-2018"> Edition 2018</a>
                    </div>
                
                </div>
            </div>
            <Footer/>
        </div>
    )


}

export default Galerie