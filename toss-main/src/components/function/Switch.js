import React from "react";
import './SwitchStyles.css'

const SwitchButton = ({isToogled, onToggle}) => {
    return(
        <label className="switch">
            <input type="checkbox" checked={isToogled} onChange={onToggle}/>
            <span className="slider">
                <span className="slider-text sport"> Sports</span>
                <span className="slider-text fanfares"> Fanfares</span>
            </span>
        </label>
    )
}

export default SwitchButton