import { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./Container.css";

function Container() {
  let [city, setCity] = useState("London");
  let [data, setData] = useState(null);

  const cityInput = useRef(null);

  const API_KEY = "hide";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  const onInputEnter = (e) => {
    if (e.key === "Enter") {
      axios.get(URL).then((res) => {
        setData((prev) => res.data);
        console.log(city);
        console.log(data);
      });
    }
  };

  return (
    <div className="container">
      <div className="city-input">
        <p>Enter a city name here.</p>
        <input
          type="text"
          placeholder="London"
          onChange={(e) => setCity(e.target.value)}
          onKeyUp={onInputEnter}
          ref={cityInput}
        />
        <p className="city-display">{city}</p>
      </div>
      <div className="weather-display">
        <div className="display-top">
          <h1>44&deg;</h1>
          <p>Cloudy</p>
          <p>03/21</p>
        </div>
        <div className="display-bottom">
          <div className="weather-image sunny"></div>
        </div>
      </div>
    </div>
  );
}

export default Container;
