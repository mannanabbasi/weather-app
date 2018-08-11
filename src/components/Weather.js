import React from "react";
import '../weather.css';

const Weather = props => (
    <div className = "dashboard">
        {props.city && props.country && <h1>{props.city}, {props.country}</h1>}
        {props.temperature && <p><span id = "temp"> {props.temperature}°C</span> <img className="img" src={`http://openweathermap.org/img/w/${props.icon}.png`}/>
</p>}
        
        
        {props.description && <p><span id = "condition"> {props.description}</span></p>}
        {props.error && <p>{props.error}</p>}    
    </div>

)

export default Weather;