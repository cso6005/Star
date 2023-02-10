import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Header/Header"
import "../../css/Main.css";
import { TfiLocationPin } from "react-icons/tfi"
import { BsFillCloudsFill, BsFillSunFill, BsFillCloudSunFill, BsFillCloudFill, BsFillCloudRainFill, BsFillCloudSnowFill, BsFillCloudLightningFill, BsStars } from "react-icons/bs"
import { WiFog } from "react-icons/wi"

const DetailRegion = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const [time, setTime] = useState();
    const [starResult, setStarResult] = useState();

    let now = new Date();
    const week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    let dayOfWeek = week[now.getDay()];

    const weatherIcon = {
        "맑음": <BsFillSunFill className= 'summaryIcon2' />,
        "구름조금": <BsFillCloudSunFill className= 'summaryIcon2' />,
        "구름많음": <BsFillCloudFill className= 'summaryIcon2' />,
        "흐림": <BsFillCloudsFill className= 'summaryIcon2' />,
        "비": <BsFillCloudRainFill className= 'summaryIcon2' />,
        "눈": <BsFillCloudSnowFill className= 'summaryIcon2' />,
        "천둥번개": <BsFillCloudLightningFill className= 'summaryIcon2' />,
        "안개": <WiFog className= 'summaryIcon'/>,
        "null": <input className="aaa4" type="text" value="업데이트중" style={{color:"rgb(72, 73, 130)", paddingBottom:"30%"}} />
      };

    const todayTime = () => {
        const month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        let now = new Date();
        let todayYear = now.getFullYear();
        let todayMonth = month[now.getMonth()];
        let todayDate = now.getDate() > 9 ? now.getDate() : "0" + now.getDate();

        return (
            setTime(todayDate + " " + todayMonth + " " + todayYear)
        )  
    };

    const getWeatherResult = async () => {
        await axios
        .get("/api/v1/observing-info/region", {
          params: {
            id: location.state.data.이름
          }
        })
        .then((response) => {
          setStarResult(response.data.starResult)
        })
      }

    useEffect(()=>{
        todayTime();
        getWeatherResult();
    },[]);

    return (
        <div>
            <Header />
            <div className="blank" style={{ height: "120px" }} />
            <div className="detailCard">
                <div className="detailCard1">
                    <div style={{fontSize:"37px", color:"white", fontWeight:"bold", paddingTop:"5%", paddingLeft:"10%", textAlign:"left", lineHeight:"120%"}}>
                        {dayOfWeek}
                        <div style={{fontSize:"22px", fontWeight:"normal"}}>
                            {time}
                        </div>
                        <div style={{fontSize:"20px", fontWeight:"normal"}}>
                            <TfiLocationPin />{location.state.data.이름}
                        </div>
                        <div style={{paddingTop:"3%", paddingLeft:"26%"}}>
                            {weatherIcon[location.state.data.현재일기]}
                        </div>
                        <div style={{textAlign:"center", paddingRight:"8%", paddingTop:"3%"}}>
                            {location.state.data.현재기온} ℃
                        </div>
                        <div style={{fontSize:"23px", textAlign:"center", paddingRight:"10%", paddingTop:"3%" }}>
                            {starResult}
                        </div>
                    </div>
                </div>
                <div className="detailCard2">
                    <div className="detailCard3">
                        <div className="detailCard3ColumnLeft" >
                            현재날씨<br/>
                            운량(Tenth)<br/>
                            중하운량<br/>
                            시정거리<br/>
                            체감온도<br/>
                            습도<br/>
                        </div>
                        <div className="detailCard3ColumnRight">
                            {location.state.data.현재일기}<br />
                            {location.state.data.운량}<br />
                            {location.state.data.중하운량}<br />
                            {location.state.data.시정} km<br />
                            {location.state.data.체감온도} ℃<br />
                            {location.state.data.습도} %<br />
                        </div>
                    </div>
                <div className="detailCard2Row">
                    <div className="moon"></div>
                    <div >
                        <button className="detailSumarryButton" onClick={()=>{
                            navigate("/summary")
                        }}><TfiLocationPin /> Change Location</button>
                    </div>
                </div>
                </div>
            </div>
            <div className="blank" style={{ height: "205px" }} />
        </div>
    );
};

export default DetailRegion;