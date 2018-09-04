import React from "react";
import '../styles/weather.css';

const Weather = ({city, country,hasLoaded, temperature, icon, description,error}) => {
    
    if(hasLoaded){
        return ( <div className = "dashboard">
        {city && country && <h1>{city}, {country}</h1>}
        {temperature && <p><span id = "temp"> {temperature}°C</span> <img className="img" src={`https://openweathermap.org/img/w/${icon}.png`} alt = "weathericon"/>
</p>}
        
        
        {description && <p><span id = "condition"> {description}</span></p>}
           
    </div>
    )
    }
    else{
        return(<div>{error && <p>{error}</p>}</div> )
    }

}

export default Weather;