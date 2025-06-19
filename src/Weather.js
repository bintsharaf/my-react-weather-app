import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo"
import "./Weather.css"; 
export default function Weather() {
    const apiKey = "29583e5b03o3adtc2486edaf9f3af0e3";
    const [city, setCity] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [weatherData, setWeatherData] = useState({});
    

    function displayWeather(response) {
        setLoaded(true);
        setWeatherData({
            city: response.data.city,
            temperature: Math.round(response.data.temperature.current),
            description: response.data.condition.description,
            icon: response.data.condition.icon_url,
            humidity: response.data.temperature.humidity,
            wind: Math.round(response.data.wind.speed),
            precipitation: response.data.precipitation?.value || 0,
            date: new Date(response.data.time*1000),    
        });
    }

    function updateCity(event) {
        setCity(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(displayWeather);
    }
    if (loaded) {
        return (
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a City..." className="form-control" onChange={updateCity} autoFocus="on"/>
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary w-100"/>
                    </div>  
                </div>
            </form>
            <h1>{weatherData.city}</h1>
            <ul>
                <li><WeatherInfo date = {weatherData.date} /></li>
                <li>{weatherData.description}</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <div className="clear-fix">

                    </div>
                    <img src= {weatherData.icon} alt= {weatherData.description} className="float-left"/>
                    <span className="temperature">{weatherData.temperature}</span>
                    <span className="unit">°C</span>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: {weatherData.precipitation}%</li>
                        <li>Humidity: {weatherData.humidity}%</li>
                        <li>Wind: {weatherData.wind} km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    )
    } else {
        return (
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a City..." className="form-control" onChange={updateCity} autoFocus="on"/>
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary w-100"/>
                    </div>  
                </div>
            </form>
        )
    }
    
}