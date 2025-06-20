import React from "react";
import "./WeatherForecast.css";
import axios from "axios";
export default function WeatherForecast(props) {
    function handleResponse(response) {
        console.log(response.data);
    }
    let apiKey = "29583e5b03o3adtc2486edaf9f3af0e3";
    let latitude = props.data.latitude;
    let longitude = props.data.longitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-Day">Thu</div>
                    <div className="WeatherForecast-icon"><img src= {props.data.icon} alt= {props.data.description}/></div>
                    <div className="WeatherForecast-temperatures">
                        <span className="WeatherForecast-temperature-max">19°</span>
                        <span className="WeatherForecast-temperature-min">10°</span>
                    </div>
                </div>
            </div>
        </div>
    )
}