import React from "react";
import Titles from "./components/Titles"
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "ccde404ff23089803dafa662fd612570";

class App extends React.Component{
  
  //initialize state

  state = {
    temperature : undefined,
    city: undefined,
    country : undefined,
    humidity : undefined,
    description : undefined,
    error : undefined
    

  }


  //function to get latest weather from api
  getWeather = async (e)=>{
    e.preventDefault();

    //get city and country element's value from the form component
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    
    //make call to api
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);

    //wait for the call to complete and store its value in data
    const data = await api_call.json();

    //check for the value of city and country attribute
    if(city && country){
      //set the values in state object
      this.setState({
        temperature :data.main.temp,
        city : data.name,
        country : data.sys.country,
        humidity: data.main.humidity,
        description :data.weather[0].description,
        error:""
      });
    }
    else {
      //set the values in state object
      this.setState({
        temperature :undefined,
        city : undefined,
        country : undefined,
        humidity: undefined,
        description :undefined,
        error:"Please enter a value"
      }); 
    }

  }


  render(){
    return(

      <div className = "container">
        <div className = "wrapper">
          <Titles/>
          <Form getWeather = {this.getWeather}/>
          <Weather className = "dashboard"
            temperature = {this.state.temperature}
            city = {this.state.city}
            country = {this.state.country}
            humidity = {this.state.humidity}
            description ={this.state.description}
            error = {this.state.error}
          />

        </div>
      </div>
    );
  }
};

export default App;