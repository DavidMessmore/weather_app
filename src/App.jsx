import Search from "./components/Search/search";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import axios from "axios";
import { useState } from "react";
import Forecast from "./components/Forecast/Forecast";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const urls = [
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
        import.meta.env.VITE_MY_API_KEY
      }&units=metric`,
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${
        import.meta.env.VITE_MY_API_KEY
      }&units=metric`,
    ];
    axios
      .all(urls.map((url) => axios.get(url)))
      .then((res) => {
        const weatherRes = res[0];
        const forecastRes = res[1];
        setCurrentWeather({ city: searchData.label, ...weatherRes });
        setForecast({ city: searchData.label, ...forecastRes });
      })
      .catch((err) => console.log(err));
  };

  return (
    <main
      className={`${darkMode ? "dark" : "light"} transition-all min-h-screen`}
    >
      <section className=" relative flex flex-row justify-between w-full h-16 px-3 items-center border-b border-stone-400">
        <h1 className="text-3xl font-bold">Weather App</h1>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </section>

      <section className="pt-8 sm:w-1/2 sm:mx-auto">
        <Search onSearchChange={handleOnSearchChange} />
        {currentWeather && <CurrentWeather data={currentWeather} />}
      </section>
      <section className="pt-8">
        {forecast && <Forecast data={forecast} />}
      </section>
    </main>
  );
}

export default App;
