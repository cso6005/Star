import "../../css/Main.css";
import BigDipper from "../../image/BigDipper.jpg";
import { Link } from "react-router-dom";


const Main = () => {
  return (
    <div className="App" >

      <div class="blank" style={{ height: "180px" }}></div>

      <div class="row">
        <div class="leftcolumn">
            <h2>홈페이지   소개</h2>
            <h5>콕콕콕라면콕</h5>
            <div class="fakeimg" style={{ height: "100px" }} />
        </div>

        <div class="right">
          <Link to = "/constellations">
            <div class="rightcolumn">
              <div class="card">
                <h2>별자리</h2>
                <h5>별 보고 싶당</h5>
              </div>
            
            </div>
          

            <div class="imgcolumn">
              <img className="BigDipper" alt="1" src={BigDipper} style={{ height: "300px", width: "200px", borderRadius: "15px 0px 0px 15px / 15px 0px 0px 15px"    }}/>
            </div>
          
          </Link>

        </div>

      </div>

      <div class="blank" style={{ height: "150px" }}>

      </div>

      <div class="footer">
        <h1>별 볼 수 있나아아ㅏ</h1>
      </div>
    </div>
  );
};


export default Main;
