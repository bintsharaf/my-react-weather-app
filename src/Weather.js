import React from "react";
import "./Weather.css"; 
export default function Weather() {
    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a City..." className="form-control" autoFocus="on"/>
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary w-100"/>
                    </div>  
                </div>
            </form>
            <h1>Lagos</h1>
            <ul>
                <li>Wednesday</li>
                <li>Mostly cloudy</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <div className="clear-fix">

                    </div>
                    <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="mostly cloudy" className="float-left"/>
                    <span className="temperature">27</span>
                    <span className="unit">°C</span>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: 0%</li>
                        <li>Humidity: 86%</li>
                        <li>Wind: 8 km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}