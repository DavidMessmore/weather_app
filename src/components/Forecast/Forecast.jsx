import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek - 1)
  );

  return (
    <div className="pb-5 flex flex-col items-center">
      <h2 className="text-3xl font-bold pb-10">Forecast</h2>
      <Accordion
        allowZeroExpanded
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 gap-5"
      >
        {data.data.list.slice(0, 6).map((item, index) => {
          return (
            <AccordionItem key={index}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="bg-white flex flex-row items-center rounded-lg my-2 justify-between w-52 p-2 dark:bg-stone-600">
                    <div className="flex flex-col gap-2">
                      <p className="font-bold">{forecastDays[index]}</p>
                      <img
                        src={`Images/${item.weather[0].icon}.png`}
                        alt="weather"
                        className="w-10"
                      />
                    </div>
                    <div className="flex flex-col text-end">
                      <p className="capitalize">
                        {item.weather[0].description}
                      </p>
                      <p className="text-gray-500 dark:text-white">
                        {Math.round(item.main.temp_min)}°C /{" "}
                        {Math.round(item.main.temp_max)}°C
                      </p>
                    </div>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="bg-white rounded-lg w-52 p-2 dark:bg-stone-600">
                  <div className="flex flex-row justify-between">
                    <p>Pressure </p>
                    <p className="font-bold">{item.main.pressure} hPa</p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <p>Humidity </p>
                    <p className="font-bold">{item.main.humidity} %</p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <p>Clouds </p>
                    <p className="font-bold">{item.clouds.all} %</p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <p>Wind Speed </p>
                    <p className="font-bold">{item.wind.speed} m/s</p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <p>Sea Level </p>
                    <p className="font-bold">{item.main.sea_level} m</p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <p>Feels Like:</p>
                    <p className="font-bold">
                      {Math.round(item.main.feels_like)} °C
                    </p>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};
export default Forecast;
