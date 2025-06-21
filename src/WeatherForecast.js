import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";
export default function WeatherForecast(props) {


    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] =useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props]);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }
    
    if (loaded) {
            return (
        <div className="WeatherForecast">
            <div className="row">
                {forecast.map(function (dailyforecast, index) {
                    if (index < 5) {
                        return (
                        <div className="col" key={index}>
                            <WeatherForecastDay data ={dailyforecast}/>
                        </div>
                    );
                    } else {
                        return null;
                    }
                    
                })}
                
            </div>
        </div>
    )
    } else {
        let apiKey = "29583e5b03o3adtc2486edaf9f3af0e3";
        let latitude = props.data.latitude;
        let longitude = props.data.longitude;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse);
    }

}