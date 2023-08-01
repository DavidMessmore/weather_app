import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faWater,
  faWind,
  faCloud,
  faCloudShowersHeavy,
  faCloudRain,
  faSmog,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";

const toFahrenheit = (celcius) => {
  return (celcius * 9) / 5 + 32;
};

const weatherList = {
  Clouds: ["from-slate-400", "text-slate-400", faCloud],
  Clear: ["from-clear", "text-clear", faSun],
  Rain: ["from-cyan-700", "text-cyan-700", faCloudRain],
  Drizzle: ["from-cyan-500", "text-cyan-500", faCloudShowersHeavy],
  Mist: ["from-slate-600", "text-slate-600", faSmog],
};

function App() {
  const [data, setData] = useState({
    celcius: 0,
    name: "No city yet :(",
    humidity: 10,
    speed: 2,
    weather: weatherList["Clouds"],
  });

  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [cel, setCel] = useState(true);

  const handleClick = () => {
    if (name) {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${
        import.meta.env.VITE_MY_API_KEY
      }&units=metric`;
      axios
        .get(url)
        .then((res) => {
          setData({
            ...data,
            celcius: res.data.main.temp,
            name: res.data.name,
            humidity: res.data.main.humidity,
            speed: res.data.wind.speed,
            weather: weatherList[res.data.weather[0].main]
              ? weatherList[res.data.weather[0].main]
              : weatherList["Clear"],
          });
          setError("");
          setName("");
        })
        .catch((err) => setError(err.response.data.message));
    }
  };

  return (
    <main
      className={`bg-gradient-to-b ${data.weather[0]} to-slate-200 h-screen flex items-center relative`}
    >
      <div
        id="card"
        className="flex flex-col bg-gray-100 w-fit h-fit py-4 px-2 sm:p-8 mx-auto rounded-lg shadow-xl md:text-base lg:text-2xl"
      >
        <div id="search" className="py-3">
          <input
            type="text"
            placeholder="Enter a city name"
            className="bg-gray-100 mr-4 focus:outline-gray-400 placeholder:italic placeholder:text-slate-500 hover:bg-gray-300 rounded-md px-4 py-2 w-5/6"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={handleClick} className="hover:text-sky-600">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        {error && <p className="text-red-600 pl-4 capitalize">{error}</p>}
        <div id="info" className="flex flex-col items-center gap-y-8">
          <p className="mt-8">
            <FontAwesomeIcon
              className={`text-5xl sm:text-7xl lg:text-9xl ${data.weather[1]} pr-8`}
              icon={data.weather[2]}
            />
            <span className="text-6xl sm:text-7xl lg:text-9xl font-thin">
              {cel
                ? Math.round(data.celcius)
                : Math.round(toFahrenheit(data.celcius))}
            </span>
            <button
              onClick={() => setCel(!cel)}
              className="text-2xl sm:text-3xl hover:text-sky-600"
            >
              {cel ? <p>°C</p> : <p>°F</p>}
            </button>
          </p>
          <p className="text-2xl md:text-4xl">{data.name}</p>
          <div
            id="details"
            className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-8 "
          >
            <div id="humidity" className="flex">
              <FontAwesomeIcon
                className="text-6xl text-sky-600 mx-6"
                icon={faWater}
              />
              <div>
                <p>{Math.round(data.humidity)}%</p>
                <p>Humidity</p>
              </div>
            </div>
            <div id="wind" className="flex">
              <FontAwesomeIcon
                className="text-6xl text-sky-600 mx-6"
                icon={faWind}
              />
              <div>
                <p>{Math.round(data.speed)} km/h</p>
                <p>Wind</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="absolute bottom-0">
        Created By David Messmore
        <a href="https://github.com/DavidMessmore" target="_blank">
          <FontAwesomeIcon
            className="text-3xl text-slate-900 mx-2 hover:text-slate-500"
            icon={faGithub}
          />
        </a>
      </nav>
    </main>
  );
}

export default App;
