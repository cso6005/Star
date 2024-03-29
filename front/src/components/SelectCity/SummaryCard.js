import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Main.css";
import "../../css/SelectCity.css";
import { BsFillCloudsFill, BsFillSunFill, BsFillCloudSunFill, BsFillCloudFill, BsFillCloudRainFill, BsFillCloudSnowFill, BsFillCloudLightningFill, BsStars } from "react-icons/bs";
import { WiFog } from "react-icons/wi";

function SummaryCard(props) {
  const navigate = useNavigate();

  const weatherIcon = {
    맑음: <BsFillSunFill className="summaryWeatherIcon" />,
    구름조금: <BsFillCloudSunFill className="summaryWeatherIcon" />,
    구름많음: <BsFillCloudFill className="summaryWeatherIcon" />,
    흐림: <BsFillCloudsFill className="summaryWeatherIcon" />,
    비: <BsFillCloudRainFill className="summaryWeatherIcon" />,
    눈: <BsFillCloudSnowFill className="summaryWeatherIcon" />,
    천둥번개: <BsFillCloudLightningFill className="summaryWeatherIcon" />,
    안개: <WiFog className="summaryWeatherIcon" />,
    null: <input className="MainPageUpdateIcon" type="text" value="업데이트중" style={{ color: "rgb(72, 73, 130)", paddingBottom: "30%" }} />,
  };

  const [time, setTime] = useState();

  const todayTime = () => {
    let now = new Date();
    let todayYear = now.getFullYear();
    let todayMonth = now.getMonth() + 1 > 9 ? now.getMonth() + 1 : "0" + (now.getMonth() + 1);
    let todayDate = now.getDate() > 9 ? now.getDate() : "0" + now.getDate();
    let hours = now.getHours() > 9 ? now.getHours() : "0" + now.getHours();

    return setTime(todayYear + "-" + todayMonth + "-" + todayDate + "." + hours + "H");
  };

  useEffect(() => {
    todayTime();
  }, []);

  return (
    <div className="summaryCard" onClick={() => {
        navigate("/observing/region", {
          state: {
            data: props.data,
          },
        });
      }}>
      <div style={{ padding: "5%", fontSize: "25px" }}>
        <BsStars style={{ color: "rgb(72, 73, 130)" }} /> {props.data.이름}
      </div>

      <div className="summaryWeatherColumn">
        <div>
          {weatherIcon[props.data.현재일기]}
        </div>

        <div style={{ fontSize: "50px", paddingTop: "10%" }}>
          {props.data.현재기온}℃
        </div>
      </div>

      <div style={{ fontSize: "27px" }}>
        {props.data.현재일기 === null ? <input className="MainPageUpdateIcon" type="text" value="업데이트중" style={{ color: "rgb(72, 73, 130)", paddingBottom: "15%" }} /> : props.data.현재일기}
      </div>

      <div>{time}</div>
    </div>
  );
}

export default SummaryCard;
