import "../../css/Main.css";
import BigDipper from "../../image/BigDipper.jpg";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { WiDaySunny, WiDaySunnyOvercast, WiCloud, WiCloudy, WiRain, WiThunderstorm, WiSnow, WiFog } from "react-icons/wi"

const Main = () => {

  const [selectRegion, setSelectRegion] = useState("서울");
  const [dateRegion, setDateRegion] = useState();
  const [regionWeather, setRegionWeather] = useState();
  const [starResult, setStarResult] = useState();

  const weatherIcon = {
    "맑음": <WiDaySunny className= 'aa4' />,
    "구름조금": <WiDaySunnyOvercast className= 'aa4'/>,
    "구름많음": <WiCloud className= 'aa4'/>,
    "흐림": <WiCloudy className= 'aa4'/>,
    "비": <WiRain className= 'aa4'/>,
    "눈": <WiSnow className= 'aa4'/>,
    "천둥번개": <WiThunderstorm className= 'aa4'/>,
    "안개": <WiFog className= 'aa4'/>,
    "null": <input class="aaa4" type="text" value="업데이트중" />
  }

  const getWeather = async () => {
    await axios
    .get("http://127.0.0.1:80/elk/getWeather", {
      params: {
        id: selectRegion
      }
    })
    .then((response) => {
      setDateRegion(response.data.date)
      setStarResult(response.data.starResult)
      setRegionWeather(response.data.weather)
      console.log(response.data);
    })
  }

  const changeRegion = (e) => {
    setSelectRegion(e.target.value);
  };

  useEffect(() => {
    getWeather();
  });

  return (
    <div className="App" >

      <div class="blank" style={{ height: "180px" }}></div>

      <div class="row">
        <div class="leftcolumn">
            <h2>홈페이지 소개</h2>
            <h5>콕콕콕라면콕</h5>
            <div class="fakeimg" style={{ height: "100px" }} />
        </div>

        <div class="right">

          <div class="rightcolumn">
            <div class="card">

              <h2>별자리</h2>
              <h5>별 보고 싶당</h5>

              {/* <div class="icon"  /> */}
            </div>
          </div>

          <div class="imgcolumn">
            <img className="BigDipper" alt="1" src={BigDipper} style={{ height: "300px", width: "200px", borderRadius: "15px 0px 0px 15px / 15px 0px 0px 15px"    }}/>
          </div>

        </div>

      </div>

      <div class="blank" style={{ height: "530px" }}>

      </div>

      <div class="footer">
        <div class="regionselect">
          <div class="a1">
            <input class="aa1" type="text" value={dateRegion} />
          </div>
          <div class="a2">
            <select class="regiondrop" id="regiondrop" value={selectRegion} onChange={changeRegion}>
              <option class = "option1" value="서울">서울</option>
              <option class = "option1" value="수원">수원</option>
              <option class = "option1" value="강릉">강릉</option>
              <option class = "option1" value="동해">동해</option>
              <option class = "option1" value="대구">대구</option>
              <option class = "option1" value="광주">광주</option>
              <option class = "option1" value="태백">태백</option>
              <option class = "option1" value="서귀포">서귀포</option>
            </select>
          </div>
          <div class="a3">
            {
              starResult === null
              ? <input class="aaa4" type="text" value="업데이트중" />
              : <input class="aa3" type="text" value={starResult} />
            }
          </div>
          <div class="a4">{
            weatherIcon[regionWeather]
            }
          </div>
          <div class="a5">
            <button class='button1'>검색</button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Main;
