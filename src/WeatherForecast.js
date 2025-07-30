import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    if (props.data && props.data.latitude && props.data.longitude) {
      let apiKey = "29583e5b03o3adtc2486edaf9f3af0e3";
      let latitude = props.data.latitude;
      let longitude = props.data.longitude;
      let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

      axios.get(apiUrl).then(handleResponse);
    }
  }, [props.data]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (!loaded) {
    return null; // or a loader
  }

  return (
    <div className="WeatherForecast">
      <div className="row">
        {forecast.map(function (dailyforecast, index) {
          if (index < 5) {
            return (
              <div className="col" key={index}>
                <WeatherForecastDay data={dailyforecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}
