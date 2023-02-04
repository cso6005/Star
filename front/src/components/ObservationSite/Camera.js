import React, { useState } from "react";
import Header from "../Header/Header";
import "../../css/Main.css";
import "../../css/Star.css";

const Camera = () => {
  const [currentState, setCurrentState] = useState("설정");

  const data = {
    설정: (
      <div style={{ overflowY: "scroll", height: "580px", width: "105%" }}>
        <h2 style={{ fontWeight: "700", fontSize: "20px", paddingTop: "2%" }}>노출 길이(셔터스피드)</h2>
        <div style={{ fontWeight: "500", fontSize: "15px", lineHeight: "23px" }}>
          어두운 대상을 촬영하는 데에 있어서 가장 웅요한 것은 바로 노출이다. 노출의 길이는 셔터 스피드로 바꿔서 표현할 수도 있다.<br />
          노출 즉 셔터 스피드란 카메라가 빛을 받아들이는 시간의 길이를 말한다.<br /><br />
          별 사진 촬영을 할 때는 당연히 노출시간이 길어야 더 많은 별을 밝게 담기에 유리하다. 딱 정해진 셔터 스피드는 없다.<br />
          다만 셔터 속도가 1초보다 어두우면 별 사진이 거의 안나온다고 보면 되고, 너무 길어지면 렌즈의 화각에 따라 다르겠지만, 별이 점으로 나오는 것이 아니라 지구의 자전에 의해서 별이 1자 모양으로
          흐르게 촬영한다.<br /><br />
          예를 들어, 24mm 화각으로 촬영할 경우 보통 15초를 안 넘겨 촬영을 한다.</div>

        <h2 style={{ fontWeight: "700", fontSize: "20px", paddingTop: "2%" }}>카메라 고정(삼각대 필수)</h2>
        <div style={{ fontWeight: "500", fontSize: "15px", lineHeight: "23px" }}>
          노출이 길다라는 얘기는 그만큼 오랜 시간 동안 카메라도 확실히 고정되어 있어야 한다는 뜻이다.<br />
          별 사진 촬영에 있어서 절대적으로 확보되어야 하는 것이 카메라의 확실한 고정이다. 카메라를 손으로 들고 제대로 된 밤하늘을 찍는 건 불가능 하다. <br />
          따라서 튼튼한 삼각대가 있으면 좋다. 최대한 잘 고정해서 몇 초 내지는 수심 초가 되는 시간 동안 카메라가 조금이라도 흔들이지 않도록 해주면 된다.</div>
        
        <h2 style={{ fontWeight: "700", fontSize: "20px", paddingTop: "2%" }}>조리개 값</h2>
        <div style={{ fontWeight: "500", fontSize: "15px", lineHeight: "23px" }}>
          조리개 값 즉 F값이 낮을수록 빛을 모으는 조리개가 더 크게 개방되고 따라서 더 많은 빛이 렌즈로 유입된다.<br />
          따라서 같은 셔터스피드로 별사진을 찍는다고 가정했을 때, 조리개 값을 더 낮게 설정해야 더 많은 별을 더 밝게 찍을 수 있다. <br /><br />
          보통 렌즈 최대 밝기에서 1~3단계 정도 조리개를 조여서 촬영한다.<br />
          만약 F1.4값을 가진 렌즈로 촬영한다면 조리개 값을 F1.4보다는 F1.8이나 F2.2, F2.8정도로 설정한다.<br />
          바로 위에서 설명한 셔터 스피드를 충분히 길게 해준다면 조리개 값이 높아도(어두워도) 좋은 사진을 찍을 수 있다.
        </div>
        
        <h2 style={{ fontWeight: "700", fontSize: "20px", paddingTop: "2%" }}>ISO</h2>
        <div style={{ fontWeight: "500", fontSize: "15px", lineHeight: "23px" }}>
          셔터 스피드와 조리개 값과 함께 사진의 노출 및 밝기에 관여하는 또 하나의 요소가 있는데 바로 ISO이다.<br />
          ISO값은 높이면 높일수록 더 밝은 사진을 찍을 수 있다. 다만 수치가 높아질수록 사진에 노이즈가 많이 생기게 된다. 그래서 양날의 검이라 할 수 있다.<br /><br />
          ISO는 조리개값이나 셔터 스피드를 더 이상 조정하기 곤란할떄 많이 사용한다. 조정이 불가할때 셔터 스피드를 다시 별이 흐르지 않는 시간까지 내려주고, ISO값을 올려주면 된다.<br />
          ISO값은 카메라 마다 다르지만 1600까지는 무난하게 찍힌다. 그 이상 올려버리면 너무 노출이 높아져서 하늘이 하얘지거나 노이즈가 많이 생겨버려서 사진을 망치게 될 수 있다.
        </div>
        
        <h2 style={{ fontWeight: "700", fontSize: "20px", paddingTop: "2%" }}>초점</h2>
        <div style={{ fontWeight: "500", fontSize: "15px", lineHeight: "23px" }}>
          별 사진 찍는법 중 가장 어려운 부분이자 중요한 부분이 바로 초점이다. 별 사진을 찍을 때는 무조건 MF, 수동 초점 모드로 촬영해야 한다.<br />
          렌즈에 있는 포커스 링을 적절히 돌려서 별에 초점을 맞춰줘야 하는데, 2가지 방법이 있다.<br /> <br />
          일단 육안으로 볼 때 가장 커 보이는 별을 찾아 카메라 렌즈를 그쪽으로 향한다. 그러면 LCD 화면에 그 별이 희미하게 보이는데 그 희미한 별을 최대한 작은 점이 되도록 초점 링을 돌려준다.<br />
          또한 지상에 있지만 최대한 멀리 있는 가로등이나 불빛을 대상으로 초점을 맞출 수도 있다. 
          앞에서 큰 별을 보고 초점을 맞춘것과 동일하게 지상에 있는 불빛이 최대한 선명하게 나올때까지 초점을 조절해준다.
        </div>
      </div>
    ),
    갤럭시: (
      <div style={{ overflowY: "scroll", height: "580px", width: "105%" }}>
        <h2 style={{ fontWeight: "700", fontSize: "25px", paddingTop: "2%" }}>갤럭시</h2>
        <div style={{ fontWeight: "500", fontSize: "18px", lineHeight: "32px" }}>
          1. “더보기”를 클릭.<br /> <br />
          2. “프로” 모드를 클릭.<br /> <br />
          3. IOS 값은 3200정도로 세팅.<br />
          &nbsp; &nbsp; &nbsp; &nbsp; ● 너무 밝게 나오면 ISO 값을 더 내려서 촬영<br />
          &nbsp; &nbsp; &nbsp; &nbsp; ● 너무 어둡게 나오면 ISO 값을 더 올려서 촬영<br /><br />
          4. 조리개 열고 촬영하는 시간을 30초로 바꾼다.<br />
          &nbsp; &nbsp; &nbsp; &nbsp; ● 이렇게 되면 30초동안 촬영하게 된다.<br />
          &nbsp; &nbsp; &nbsp; &nbsp; ● 스마트폰이 30초동안 움직이지 않아야 한다.<br /><br />
          5. WB값은 6800정도로 한다.<br />
          &nbsp; &nbsp; &nbsp; &nbsp; ● 이 값은 색감을 조정하는데 필요.<br />
          &nbsp; &nbsp; &nbsp; &nbsp; ● 촬영해보면서 값을 조정.<br /> <br />
          6. 촬영을 타이머 모드 “2초” 정도로 변경.<br /> <br />
          7. 촬영버튼을 누른다.<br /> <br />
          8. 스마프폰을 평평한 곳에 엎어 놓는다.<br />
          &nbsp; &nbsp; &nbsp; &nbsp; ● 삼각대가 없으면 그냥 바닥이나 돌 같은 곳에 뒷면이 하늘을 향하게 엎어 놓는다. 스마트폰 터치하는 화면부분이 바닥을 향하게 한다.<br />
          &nbsp; &nbsp; &nbsp; &nbsp; ● 삼각대가 있으면 하늘을 향하게 거치해도 된다.<br /> <br />
          9. 타이머 2초가 경과된후에 30초간 촬영.<br />
          &nbsp; &nbsp; &nbsp; &nbsp; ● 30초간 빛을 받아들이기 때문에 촬영이 가능한 원리.<br /> <br />
          10. 촬영된 사진을 확인하고 세팅값을 조정해보면서 촬영.<br /> <br />
        </div>
      </div>
    ),
    아이폰: (
      <div style={{ overflowY: "scroll", height: "580px", width: "105%" }}>
        <h2 style={{ fontWeight: "700", fontSize: "25px", paddingTop: "2%" }}>아이폰</h2>
        <div style={{ fontWeight: "500", fontSize: "18px", lineHeight: "32px" }}>
          1. 야간모드 설정.<br /><br />
          2. 노출 시간 설정.<br />
          &nbsp; &nbsp; &nbsp; &nbsp; ● 최대한으로 설정<br />
          &nbsp; &nbsp; &nbsp; &nbsp; ● 단, 20초 이상 X <br /><br />
          3. 보정 작업에서 전체 밝기를 높이고, 밝은 영역을 낮게, 어두운 영역을 높게 설정<br /><br />
          4. '카메라-포맷'으로 들어가 Apple ProRAW 설정 활성화.<br /><br />
          5. 삼각대를 사용하여 촬영.<br /> <br />
        </div>
      </div>
    ),
  };

  return (
    <div>
      <Header />
      <div className="blank" style={{ height: "80px" }} />

      <div className="starBox">
        <div className="starBoxTop">
          <div className="starBoxTopLeft" style={{ textAlign: "left", paddingLeft: "10%", fontWeight: "bold", fontSize: "40px", paddingTop: "6%" }}>
            촬영 Tip
          </div>

          <div className="starBoxTopRight" style={{ paddingRight: "15%" }}>
            <button className="starButton" onClick={() => setCurrentState("설정")}>
              설정
            </button>
            <button className="starButton" onClick={() => setCurrentState("갤럭시")}>
              갤럭시
            </button>
            <button className="starButton" onClick={() => setCurrentState("아이폰")}>
              아이폰
            </button>
            <hr style={{ position: "absolute", width: "82%", top: "80%", right: "3%" }} />
          </div>
        </div>

        <div className="starBoxContents">
          <div style={{ paddingLeft: "5%", paddingRight: "5%", paddingTop: "1%", color: "white", textAlign: "left" }}>{data[currentState]}</div>
        </div>
      </div>
      <div className="blank" style={{ height: "50px" }} />
    </div>
  );
};

export default Camera;
