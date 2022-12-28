import React, { useState, useEffect } from "react";
import "../../css/Main.css";
import { BsFillCloudsFill, BsFillSunFill, BsFillCloudSunFill, BsFillCloudFill, BsFillCloudRainFill, BsFillCloudSnowFill, BsFillCloudLightningFill, BsStars } from "react-icons/bs"
import { WiFog } from "react-icons/wi"

function SummaryCard(props) {

    const weatherIcon = {
        "맑음": <BsFillSunFill class= 'summaryIcon' />,
        "구름조금": <BsFillCloudSunFill class= 'summaryIcon' />,
        "구름많음": <BsFillCloudFill class= 'summaryIcon' />,
        "흐림": <BsFillCloudsFill class= 'summaryIcon' />,
        "비": <BsFillCloudRainFill class= 'summaryIcon' />,
        "눈": <BsFillCloudSnowFill class= 'summaryIcon' />,
        "천둥번개": <BsFillCloudLightningFill class= 'summaryIcon' />,
        "안개": <WiFog class= 'summaryIcon'/>,
        "null": <input class="aaa4" type="text" value="업데이트중" style={{color:"rgb(72, 73, 130)", paddingBottom:"30%"}} />
      };

    const [time, setTime] = useState();

    const todayTime = () => {
        let now = new Date();
        let todayYear = now.getFullYear();
        let todayMonth = (now.getMonth() + 1) > 9 ? (now.getMonth() + 1) : "0" + (now.getMonth() + 1);
        let todayDate = now.getDate() > 9 ? now.getDate() : "0" + now.getDate();
        let hours = now.getHours() > 9 ? now.getHours() : "0" + now.getHours();

        return (
            setTime(todayYear + "-" + todayMonth + "-" + todayDate + "." + hours + "H")
        )  
    };

    useEffect(()=>{
        todayTime();
    },[]);

    return (
        <div class="summaryCard">
            <div style={{padding:"5%",fontSize:"25px"}}>
            <BsStars style={{color:"rgb(72, 73, 130)"}} />{" "}{props.data.이름}    
            </div>
            <div class="iconResult">
                <div>
                    {weatherIcon[props.data.현재일기]}
                </div>
                <div style={{fontSize:"50px", paddingTop:"10%"}}>
                {console.log(props.data.현재기온)}
                    {props.data.현재기온}℃
                </div>
            </div>
            <div style={{fontSize:"27px"}}>
                {
                    props.data.현재일기 === null
                    ? <input class="aaa4" type="text" value="업데이트중" style={{color:"rgb(72, 73, 130)", paddingBottom:"15%"}} />
                    : props.data.현재일기
                }
            </div>
            <div>
                {time}
            </div>
        </div>
    );
}

export default SummaryCard;