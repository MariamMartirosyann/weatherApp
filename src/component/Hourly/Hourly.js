import React, { useEffect, useState } from "react";
import { HOURLY_WEATHER } from "../../utils/constants/api_urls";
import { addfiveDaysData } from "../../redux/fiveDaysWeather";
import "./style.scss";
import { useDispatch } from "react-redux";

const Hourly = () => {
  const [hourlyData, setHourlyData] = useState();

  const dispatch = useDispatch();
  const getHourlyWeather = async () => {
    const data = await fetch(HOURLY_WEATHER);
    const json = await data.json();
    setHourlyData(json?.list.slice(0, 8));
    dispatch(addfiveDaysData((json.list.slice(8))))
  };
  
  useEffect(() => {
    getHourlyWeather();
  }, []);

  return (
    <div className="hourlyWeather">
      {hourlyData?.map((h) => {
        return (
          <div className="hour" key={h?.dt_txt}>
            <div className="hourData">
              <div className="hourItem">{h?.dt_txt.slice(10)} </div>
              <div className="hourItem">
                {" "}
                {h?.main?.temp}{" "}
                <img
                  src="data:image/png;base64,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"
                  alt=""
                  width={10}
                />
              </div>
              <img
                width={45}
                src={`http://openweathermap.org/img/w/${h?.weather[0]?.icon}.png`}
                alt=""
              />
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Hourly;
