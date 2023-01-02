import "../../css/Main.css";
import Header from "../Header/Header"
import React, { useState, useEffect } from "react";
import axios from "axios";
import SummaryCard from "./SummaryCard";

function SelectRegion() {

    const [summaryWeather, setSummaryWeather] = useState([{
        0:{},
        1:{},
        2:{},
        3:{},
        4:{},
        5:{},
        6:{},
        7:{}
    }]);

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

    const data = async() => {
        await axios
        .get("/api/v1/elk/getWeatherAll")
        .then((response) => {
            setSummaryWeather(response.data);
            console.log(response.data)
        })
    };

    useEffect(()=>{
        data();
        todayTime();
    },[]);

    return (
        <div>
            <Header />
            <div className="App">
                <div className="blank" style={{ height: "50px" }} />
                <div className="summaryRow" >
                    {summaryWeather.map((i) => (
                        <SummaryCard data={i} date={{time}} key={i.이름} />
                    ))}
                </div>
                <div className="blank" style={{ height: "150px" }} />
            </div>
        </div>
    );
}

export default SelectRegion;