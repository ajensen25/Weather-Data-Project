import { useEffect, useState } from "react";
import "./Container.css";

function Container() {
  let [city, setCity] = useState("London");
  let [data, setData] = useState(false);

  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${
        import.meta.env.VITE_APP_ID
      }`;

      const res = await fetch(url);
      const weatherData = await res.json();
      console.log(weatherData);
      setData({
        temp: weatherData.main.temp,
        clouds: weatherData.clouds.all,
        windSpeed: weatherData.wind.speed,
      });
    } catch (err) {}
  };

  useEffect(() => {
    search("London");
  }, []);

  return (
    <div className="container">
      <div className="city-input">
        <p>Enter a city name here.</p>
        <input
          type="text"
          placeholder="London"
          onChange={(e) => setCity(e.target.value)}
        />
        <p className="city-display">{city}</p>
      </div>
      <div className="weather-display">
        <div className="display-top">
          <h1>{Math.floor(data.temp)}&deg;</h1>
          <p>Wind: {data.windSpeed}mph</p>
        </div>
        <div className="display-bottom">
          <div className="weather-image sunny"></div>
        </div>
      </div>
    </div>
  );
}

export default Container;
