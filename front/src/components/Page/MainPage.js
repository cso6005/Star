import "../../css/Main.css";
import BigDipper from "../../image/BigDipper.jpg";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { WiDaySunny, WiDaySunnyOvercast, WiCloud, WiCloudy, WiRain, WiThunderstorm, WiSnow, WiFog } from "react-icons/wi";

const Main = () => {
  const navigate = useNavigate();

  const [selectRegion, setSelectRegion] = useState("서울");
  const [dateRegion, setDateRegion] = useState();
  const [regionWeather, setRegionWeather] = useState();
  const [starResult, setStarResult] = useState();

  const weatherIcon = {
    맑음: <WiDaySunny className="MainPageWeatherIcon" />,
    구름조금: <WiDaySunnyOvercast className="MainPageWeatherIcon" />,
    구름많음: <WiCloud className="MainPageWeatherIcon" />,
    흐림: <WiCloudy className="MainPageWeatherIcon" />,
    비: <WiRain className="MainPageWeatherIcon" />,
    눈: <WiSnow className="MainPageWeatherIcon" />,
    천둥번개: <WiThunderstorm className="MainPageWeatherIcon" />,
    안개: <WiFog className="MainPageWeatherIcon" />,
    null: <input className="MainPageUpdateIcon" type="text" value="업데이트중" />,
  };

  const changeRegion = (e) => {
    setSelectRegion(e.target.value);
  };

  const getWeather = async () => {
    await axios
      .get("/api/v1/elk/getWeather", {
        params: {
          id: selectRegion,
        },
      })
      .then((response) => {
        setDateRegion(response.data.date);
        setStarResult(response.data.starResult);
        setRegionWeather(response.data.weather);
        console.log(response.data);
      });
  };

  const mainToDetail = async () => {
    await axios.get("/api/v1/elk/getWeatherAll").then((response) => {
      response.data.map((i) => {
        if (i.이름 === selectRegion) {
          navigate("/detailRegion", {
            state: {
              data: {
                날짜: i.날짜,
                습도: i.습도,
                시정: i.시정,
                운량: i.운량,
                이름: i.이름,
                중하운량: i.중하운량,
                체감온도: i.체감온도,
                현재기온: i.현재기온,
                현재일기: i.현재일기,
              },
            },
          });
        }
      });
    });
  };

  useEffect(() => {
    getWeather();
  });

  return (
    <div className="App">
      <div className="blank" style={{ height: "180px" }}></div>

      <div className="row">
        <div className="leftcolumn"  style={{color:"white", textAlign:"left", fontSize:"80px", paddingLeft:"15%", fontWeight:"bold"}}>
          Countless stars<br />in the night sky<br/>
          <h6 style={{ fontSize:"20px", opacity:"0.8", textAlign:"left",}}>What about the sky tonight?</h6>
        </div>

        <div className="right">
          <div className="rightcolumn" style={{color:"white", lineHeight:"60px", textAlign:"center"}}>
              <h2>Look at the</h2>
              <h2>constellations</h2>
              <h2> tonight</h2>
          </div>

          <div className="imgcolumn">
            <img className="BigDipper" alt="1" src={BigDipper} style={{ height: "300px", width: "200px", borderRadius: "15px 0px 0px 15px / 15px 0px 0px 15px" }} />
          </div>
        </div>
      </div>

      <div className="blank" style={{ height: "207px" }}></div>

      <div className="footer">
        <div className="regionselect">
          <div className="currentDateColumn">
            <input className="currentDate" type="text" value={dateRegion} />
          </div>

          <div className="regionNameColumn">
            <select className="regionDrop" id="regionDrop" value={selectRegion} onChange={changeRegion}>
              <option className="regionDropOption" value="서울">서울</option>
              <option className="regionDropOption" value="수원">수원</option>
              <option className="regionDropOption" value="강릉">강릉</option>
              <option className="regionDropOption" value="동해">동해</option>
              <option className="regionDropOption" value="대구">대구</option>
              <option className="regionDropOption" value="광주">광주</option>
              <option className="regionDropOption" value="태백">태백</option>
              <option className="regionDropOption" value="서귀포">서귀포</option>
            </select>
          </div>

          <div className="regionWeatherResultColumn">{starResult === null ? <input class="MainPageUpdateIcon" type="text" value="업데이트중" /> : <input class="regionWeatherResult" type="text" value={starResult} />}</div>
          <div className="MainPageWeatherIconColumn">{weatherIcon[regionWeather]}</div>

          <div className="MainPageSelectButtonColumn">
            <button className="MainPageSelectButton" onClick={mainToDetail}>
              검색
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
