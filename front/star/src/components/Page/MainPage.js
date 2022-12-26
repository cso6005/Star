import "../../css/Main.css";
import BigDipper from "../../image/BigDipper.jpg";
import React, { useState } from "react";

const Main = () => {

  const [selectRegion, setSelectRegion] = useState("강원도");

  const changeRegion = (e) => {
    setSelectRegion(e.target.value);
  };

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
            <input class="aa1" type="text" value="12/21/2022" />
          </div>
          <div class="a2">
            <select class="regiondrop" id="regiondrop" value={selectRegion} onChange={changeRegion}>
              <option class = "option1" value="강원도">강원도</option>
              <option class = "option1" value="대구">대구</option>
              <option class = "option1" value="서울">서울</option>
              <option class = "option1" value="제주도">제주도</option>
            </select>
          </div>
          <div class="a3">3</div>
          <div class="a4">4</div>
          <div class="a5">
            <button class='button1'>검색</button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Main;
