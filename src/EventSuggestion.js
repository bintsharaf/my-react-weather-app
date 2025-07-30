import React from "react";
import "./EventSuggestion.css";

function EventSuggestion(props) {
  const weather = props.weather || {};
  const eventType = props.eventType?.toLowerCase() || "event";

  function getSuggestion() {
    const description = weather.description?.toLowerCase() || "";
    const temp = weather.temperature;
    const precipitation = weather.precipitation;
    const icon = weather.condition;

    if (description.includes("rain") || precipitation > 0) {
      return `${icon} Rain is expected — For your ${eventType}, consider a covered venue, tents, or umbrellas.`;
    } else if (description.includes("clear") || description.includes("sunny")) {
      return ` ${icon} Clear skies — Perfect for an outdoor ${eventType}. Remember shade and refreshments.`;
    } else if (description.includes("cloud")) {
      return `${icon} Cloudy — Your ${eventType} can go on, but keep a light rain backup ready.`;
    } else if (temp && temp > 30) {
      return `${icon} It's hot — Schedule your ${eventType} earlier or later and offer drinks/shade.`;
    } else if (temp && temp < 10) {
      return `${icon} Cold weather — Consider an indoor ${eventType} or warm arrangements.`;
    } else {
      return `${icon} Mixed forecast — Be flexible and have a backup plan for your ${eventType}.`;
    }
  }

  return (
    <div className="event-suggestion">
      <h3>Event Planning Tip</h3>
      <p>{getSuggestion()}</p>
    </div>
  );
}

export default EventSuggestion;
