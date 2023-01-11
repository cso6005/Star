import {Link}  from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import purify from "dompurify";

import Header from "../Header/Header";
import Dropdown from "./Dropdown";

import '../../css/constellation.css'

const ConstellationsComponent = () => {

  const [constellationList, setConstellationList] = useState("");
  const [constellation, setConstellation] = useState("");
  const [check, setCheck] = useState(0);
  const [season, setSeason] = useState("봄");

  const [view, setView] = useState(false); 

  let contentsColumns = ["정보", "전설"];
  let seasonColumns = ["봄", "여름", "가을", "겨울"];

  const seasonDefalut = () => {

    axios.get("/api/v1/observation-info/get-constellation-list", {
      params: {
        id: "봄"
      }
    })
    .then((response) => {

      console.log(response.data)
      setConstellationList(response.data)

    }).catch((error) => {
      console.log(error);
    });
  };

  const seasonClick = (o) => {

    setCheck(0);    
    
    const oId = o.target.id;

    axios.get("/api/v1/observation-info/get-constellation-list", {
      params: {
        id: oId
      }
    })
    .then((response) => {

      console.log(o.target.id)

      setConstellation("");
      console.log(response.data);
      setConstellationList(response.data);
      console.log(constellationList);
      

    }).catch((error) => {
      console.log(error);
    }).finally (() => {
      setSeason(oId);
    });
  };

  const getConstellation = (id) => {

    console.log(id);

    setCheck(0)

    axios.get("/api/v1/observation-info/get-constellation", {
      params: {
        id: id
      }
    })
    .then((response) => {

      console.log(response.data)
      setConstellation(response.data)

    }).catch((error) => {
      console.log(error);
    });


  };

  const contentsClick = (o) => {

    let oId = o.target.id;

    console.log(oId)

    if(oId == 1) {
      
      console.log("전설")
      setCheck(1)
      console.log(check)


    } else  {
      console.log("정보")
      setCheck(0);
      console.log(check)

    }


  };


  useEffect(() => {
    seasonDefalut()
  }, [])

  return (
    
    <div>
    <Header/>
    <div className="blank" style={{ height: "120px" }} />

    <div className="card">
        <div className="card1">
     
            <div style={{fontSize:"18px", color:"white", fontWeight:"bold", paddingTop:"0%", paddingLeft:"1%", textAlign:"left"}}>
              
              <span className="seasonCard">
                <span style={{fontSize:"21px"}}>별자리</span>
                {/* <span id="봄" onClick={seasonClick}>봄</span>
                <span id="여름" onClick={seasonClick}>여름</span>
                <span id="가을" onClick={seasonClick}>가을</span>
                <span id="겨울" onClick={seasonClick}>겨울</span> */}
                
                {seasonColumns.map((item) => {
                return (
                  <>
                    <span
                      id={item}
                      className={"season" + (item != season ? "active" : "")}
                      onClick={seasonClick}
                    >
                      {item}
                    </span>
                  </>
                );
              })}

              </span>
             <hr style={{border: "0", height: "1.5px", width: "70%", margin: "auto 19%" , background: "#f5f5f56e"}}/>

           </div>  

        </div>

        <div className="card2">            
        
          <div className="card2ColumnLeft">

            <div style={{fontSize:"14px", color:"white", fontWeight:"bold"}}>          
                
                <div className="dropdown">
                  <ul onClick={() => {setView(!view)}}> 
                    별자리 선택 {" "}
                    {view && <Dropdown data={constellationList} getConstellation={getConstellation}/>} 
                  </ul>
                </div>

                <div className="imageColumn">

                {constellationList.length === 0 ? (
                        <p>업데이트 중 입니다.</p>
                      ) : constellation.length === 0 ? (      

                        <div >
                          <img alt="1" src={'image/' + constellationList[0].constellationName + '.gif'} style={{ width:"350px", height:"300px",  borderRadius: "10px 10px 10px 10px"    }}/>
                        </div>

                      ) : (

                        <div>
                          <img alt="2" src={'image/' + constellation.constellationName + '.gif'} style={{ width:"350px", height:"300px", borderRadius: "10px 10px 10px 10px"    }}/>
                        </div>


                      )}

                </div>

            </div>
          </div>
         
          <div className="card2ColumnRight">

            <span className="detailTitle">
              {/* <span id="info" onClick={contentsClick}>설명</span>
              <span id="legend" onClick={contentsClick}>전설</span> */}
              {contentsColumns.map((item, idx) => {
                return (
                  <>
                    <span
                      id={idx}
                      className={"title" + (idx != check ? "active" : "")}
                      onClick={contentsClick}
                    >
                      {item}
                    </span>
                  </>
                );
              })}
            </span>

            <hr style={{border: "0", height: "1.5px", width: "104%", margin: "auto -3%" , background: "#f5f5f56e"}}/>

            <div className="detailContents" >

            {constellationList.length === 0 ? (
                        <p>업데이트 중 입니다.</p>
                      ) : constellation.length === 0 ? (    
                        
                        check === 1 ? (
                          <div>
                            {constellationList[0].constellationLegend}
                          </div>
                        ) : (
                          <div>
                            {constellationList[0].constellationInfo}
                          </div>
                        )

                      ) : (

                        check === 0 ? (
                          <div>
                            {constellation.constellationInfo}
                          </div>
                        ) : (
                          <div>
                            {constellation.constellationLegend}
                          </div>
                        )
                      )}
            
              </div>

            </div>
          
        </div>

    </div>
<div className="blank" style={{ height: "205px" }} />

</div>
  );
};


export default ConstellationsComponent;
