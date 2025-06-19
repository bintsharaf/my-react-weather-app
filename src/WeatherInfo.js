import React from "react";
import FormatDate from "./FormatDate"
export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
            <ul>
                <li><FormatDate date = {props.data.date} /></li>
                <li>{props.data.description}</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <div className="clear-fix">

                    </div>
                    <img src= {props.data.icon} alt= {props.data.description} className="float-left"/>
                    <span className="temperature">{props.data.temperature}</span>
                    <span className="unit">°C</span>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: {props.data.precipitation}%</li>
                        <li>Humidity: {props.data.humidity}%</li>
                        <li>Wind: {props.data.wind} km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}