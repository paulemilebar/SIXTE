import React from "react"

import "./SpinnerStyles.css"
import logo from '../../assets/logo_toss_noir.png'

 const Spinner = props => {
   
        return (
            <div className="loader-toss">
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
            </div>
        
      )

}

export default Spinner