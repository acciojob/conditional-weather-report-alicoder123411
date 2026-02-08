import React from "react";

const WeatherDisplay = ({ weatherData }) => {
    const { temperature, conditions } = weatherData;
    const temperatureStyle = {
        color: temperature > 20 ? "rgb(255, 0, 0)" : "rgb(0, 0, 255)",
    };

    return (
        <div id="weather-display">
            <p>
                Temperature: <span style={temperatureStyle}>{temperature}</span>
            </p>
            <p>Conditions: {conditions}</p>
        </div>
    );
};
export default WeatherDisplay;
