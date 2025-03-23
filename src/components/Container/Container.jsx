import { useRef, useState } from "react";
import "./Container.css";

function Container() {
  let [city, setCity] = useState("London");

  const cityInput = useRef(null);

  const onInputEnter = (e) => {
    if (e.key === "Enter") {
      setCity(cityInput.current.value.trim());
    }
  };

  return (
    <div className="container">
      <div className="city-input">
        <p>Enter a city name here.</p>
        <input
          type="text"
          placeholder="London"
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
