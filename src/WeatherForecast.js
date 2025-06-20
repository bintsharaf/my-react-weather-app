import React from "react";
import "./WeatherForecast.css";
export default function WeatherForecast(props) {
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