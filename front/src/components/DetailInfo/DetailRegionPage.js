import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import "../../css/Main.css";
import "../../css/DetailRegion.css";
import { TfiLocationPin } from "react-icons/tfi";
import { BsFillCloudsFill, BsFillSunFill, BsFillCloudSunFill, BsFillCloudFill, BsFillCloudRainFill, BsFillCloudSnowFill, BsFillCloudLightningFill } from "react-icons/bs";
import {WiFog,WiMoonFull,WiMoonWaxingCrescent2,WiMoonWaxingCrescent4,WiMoonFirstQuarter,WiMoonWaxingGibbous5,WiMoonWaningGibbous2,WiMoonThirdQuarter,WiMoonWaningCrescent3,WiMoonWaningCrescent5,} from "react-icons/wi";

const DetailRegion = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [time, setTime] = useState();
  const [starResult, setStarResult] = useState();
  const [moonResult, setMoonResult] = useState();

  let now = new Date();
  const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let dayOfWeek = week[now.getDay()];

  const weatherIcon = {
    맑음: <BsFillSunFill className="DetailWeatherIcon" />,
    구름조금: <BsFillCloudSunFill className="DetailWeatherIcon" />,
    구름많음: <BsFillCloudFill className="DetailWeatherIcon" />,
    흐림: <BsFillCloudsFill className="DetailWeatherIcon" />,
    비: <BsFillCloudRainFill className="DetailWeatherIcon" />,
    눈: <BsFillCloudSnowFill className="DetailWeatherIcon" />,
    천둥번개: <BsFillCloudLightningFill className="DetailWeatherIcon" />,
    안개: <WiFog className="DetailWeatherIcon" />,
    null: <input className="MainPageUpdateIcon" type="text" value="업데이트중" style={{ color: "rgb(72, 73, 130)", paddingBottom: "30%" }} />,
  };

  const moonIcon = {
    달삭: <WiMoonFull className="moonIcon" style={{ color: "Gray" }} />,
    초승달: <WiMoonWaxingCrescent2 className="moonIcon" />,
    초상달: <WiMoonWaxingCrescent4 className="moonIcon" />,
    상현달: <WiMoonFirstQuarter className="moonIcon" />,
    상보달: <WiMoonWaxingGibbous5 className="moonIcon" />,
    보름달: <WiMoonFull className="moonIcon" />,
    보하달: <WiMoonWaningGibbous2 className="moonIcon" />,
    하현달: <WiMoonThirdQuarter className="moonIcon" />,
    하금달: <WiMoonWaningCrescent3 className="moonIcon" />,
    그믐달: <WiMoonWaningCrescent5 className="moonIcon" />,
  };

  const todayTime = () => {
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let now = new Date();
    let todayYear = now.getFullYear();
    let todayMonth = month[now.getMonth()];
    let todayDate = now.getDate() > 9 ? now.getDate() : "0" + now.getDate();

    return setTime(todayDate + " " + todayMonth + " " + todayYear);
  };

  const getWeatherResult = async () => {
    await axios
      .get("/api/v1/elk/getWeather", {
        params: {
          id: location.state.data.이름,
        },
      })
      .then((response) => {
        setStarResult(response.data.starResult);
      });
  };

  const getMoon = async () => {
    await axios
      .get("/api/v1/moon/cycle", {
        params: {
          date: now.getDate(),
        },
      })
      .then((response) => {
        setMoonResult(response.data);
      });
  };

  useEffect(() => {
    todayTime();
    getWeatherResult();
    getMoon();
  }, []);

  return (
    <div>
      <Header />
      <div className="blank" style={{ height: "120px" }} />

      <div className="detailCard">
        <div className="detailCardLeftColumn">
          <div style={{ fontSize: "37px", color: "white", fontWeight: "bold", paddingTop: "5%", paddingLeft: "10%", textAlign: "left", lineHeight: "120%" }}>
            {dayOfWeek}
            <div style={{ fontSize: "22px", fontWeight: "normal" }}>{time}</div>
            <div style={{ fontSize: "20px", fontWeight: "normal" }}>
              <TfiLocationPin />
              {location.state.data.이름}
            </div>
            <div style={{ paddingTop: "3%", paddingLeft: "26%" }}>{weatherIcon[location.state.data.현재일기]}</div>
            <div style={{ textAlign: "center", paddingRight: "8%", paddingTop: "3%" }}>{location.state.data.현재기온} ℃</div>
            <div style={{ fontSize: "23px", textAlign: "center", paddingRight: "10%", paddingTop: "3%" }}>{starResult}</div>
          </div>
        </div>

        <div className="detailCardRightColumn">
          <div className="detailCardRight">
            <div className="detailCardRightTitle">
              현재날씨<br />
              운량(Tenth)<br />
              중하운량<br />
              시정거리<br />
              체감온도<br />
              습도<br />
            </div>          
            <div className="detailCardRightData">
              {location.state.data.현재일기}<br />
              {location.state.data.운량}<br />
              {location.state.data.중하운량}<br />
              {location.state.data.시정} km<br />
              {location.state.data.체감온도} ℃<br />
              {location.state.data.습도} %<br />
            </div>
          </div>

          <div className="detailCardRightRow">
            <div className="moon">{moonIcon[moonResult]}</div>
            <div>
              <button className="ChangeCityButton" onClick={() => {
                  navigate("/summary");
                }}>
                <TfiLocationPin /> Change Location
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="blank" style={{ height: "221px" }} />
    </div>
  );
};

export default DetailRegion;
