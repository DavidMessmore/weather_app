const CurrentWeather = ({ data }) => {
  return (
    <div className="bg-white rounded-lg my-10 p-10 shadow-lg md:mx-auto grid grid-cols-1 md:grid-cols-2 w-full md:w-fit gap-x-10 items-center gap-y-4 text-black dark:bg-stone-600 dark:text-white">
      <div className="flex flex-col self-start">
        <p className="font-bold text-xl lg:text-3xl">{data.city}</p>
        <p className="capitalize lg:text-xl">
          {data.data.weather[0].description}
        </p>
      </div>
      <img
        src={`Images/${data.data.weather[0].icon}.png`}
        alt="weather"
        className="justify-self-center "
      />
      <p className="font-bold text-6xl lg:text-8xl">
        {data.data.main.temp.toFixed()}°C
      </p>
      <div className="">
        <p className="text-xl">Details</p>
        <div className="flex justify-between">
          <span>Feels Like </span>
          <span className="font-semibold">
            {data.data.main.feels_like.toFixed()}°C
          </span>
        </div>
        <div className="flex justify-between">
          <span>Wind </span>
          <span className="font-semibold">
            {data.data.wind.speed.toFixed()} m/s
          </span>
        </div>
        <div className="flex justify-between">
          <span>Humidity </span>
          <span className="font-semibold">{data.data.main.humidity} %</span>
        </div>
        <div className="flex justify-between">
          <span>Pressure </span>
          <span className="font-semibold">{data.data.main.pressure}hPa</span>
        </div>
      </div>
    </div>
  );
};
export default CurrentWeather;
