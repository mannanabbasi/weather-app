import React from "react";
import '../styles/weather.css';

const Weather = (props) => {
    
    if(props.hasLoaded){
        return ( <div className = "dashboard">
        {props.city && props.country && <h1>{props.city}, {props.country}</h1>}
        {props.temperature && <p><span id = "temp"> {props.temperature}°C</span> <img className="img" src={`http://openweathermap.org/img/w/${props.icon}.png`} alt = "weathericon"/>
</p>}
        
        
        {props.description && <p><span id = "condition"> {props.description}</span></p>}
           
    </div>
    )
    }
    else{
        return(<div>{props.error && <p>{props.error}</p>}</div> )
    }

}

export default Weather;