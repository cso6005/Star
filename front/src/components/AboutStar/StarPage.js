import React, { useState } from "react";
import Header from "../Header/Header";
import "../../css/Main.css";
import "../../css/Star.css";
import 우리은하 from "../../image/우리은하.png";
import { AiOutlineArrowLeft } from "react-icons/ai";

const StarPage = () => {
  const [currentState, setCurrentState] = useState("별이란");
  const [currentState2, setCurrentState2] = useState("온도와 광도");

  const data2 = {
    "온도와 광도": (
      <div>
        <h2 style={{ fontWeight: "700", fontSize: "20px", paddingTop: "2%" }}>온도와 강도에 따른 별 분류</h2>
        <div style={{ fontWeight: "500", fontSize: "15px", lineHeight: "23px" }}>
          Harvard 스펙트럼 분류로 알려져 있으며 XNUMX 세기 후반 Harvard University에서 개발 된 이름에서 유래되었습니다.<br />
          이 분류는 천문학 자들이 가장 일반적으로 사용하는 것입니다. 그것은 온도와 그들이주는 광도에 따라 모든 별들을 나누는 역할을합니다.<br />
          별의 일곱 가지 주요 유형 인 O, B, A, F, G, K 및 M이 포함되며 색상은 파란색에서 빨간색까지 다양합니다.<br /><br />
          Yerkes 스펙트럼 분류와 같은 다른 유형의 별 분류가 있습니다. 이 분류는 Harvard의 분류보다 늦었으며 별 분류와 관련하여 더 구체적인 모델이 있습니다.<br />
          이 분류는 별의 온도와 각 별의 표면 중력을 고려합니다. 여기에 다음과 같은 XNUMX 가지 유형의 별이 있습니다.<br /><br />
          ● 0-극대 거성<br />
          ● Ia-매우 빛나는 초거성<br />
          ● Ib-낮은 광도의 초거성<br />
          ● II-빛나는 거인<br />
          ● III-거인<br />
          ● IV-자이언트<br />
          ● V-드워프 주 계열성<br />
          ● VI-수 베나 나<br />● VII-백색 왜성<br />
        </div>
      </div>
    ),
    "빛과 열": (
      <div>
        <h2 style={{ fontWeight: "700", fontSize: "20px", paddingTop: "2%" }}>빛과 열에 따른 별 분류</h2>
        <div style={{ fontWeight: "500", fontSize: "15px", lineHeight: "23px" }}>
          ● 극대 거성 별: 우리 태양 질량의 100 배에 달하는 질량을 가진 것들입니다. 그들 중 일부는 이론적 인 질량 한계 인 120M에 접근하고있었습니다. 1M은 우리 태양과 동일한 질량입니다. 이 측정 수준은
          별의 크기와 질량을 훨씬 더 잘 비교하는 데 사용됩니다.<br /><br />
          ● 초거성 : 이것들은 10에서 50M 사이의 질량과 우리 태양의 1000 배를 초과하는 크기를 가지고 있습니다. 우리의 태양은 거대해 보이지만 작은 별들의 무리에서 나온 것입니다.<br /><br />
          ● 거대한 별 : 그들은 보통 태양 반경의 10 배에서 100 배 사이의 반경을 가지고 있습니다.<br /><br />
          ● 자이언트 별:이 유형의 별은 핵의 모든 수소가 융합되어 형성된 별입니다. 그들은 주 계열 왜성보다 훨씬 더 밝은 경향이 있습니다. 그 광채는 난쟁이 별과 거성 사이에있었습니다.<br /><br />
          ● 드워프 별 : 그들은 메인 시퀀스의 일부입니다. 이 시퀀스는 우주에서 발견되는 대부분의 별을 포함하는 시퀀스입니다. 우리 태양계 모양의 태양은 노란색 왜성입니다.<br /><br />
          ● 아 드워프 별 : 그것의 광도는 메인 시퀀스보다 1.5에서 2 사이이지만 스펙트럼 유형은 동일합니다.<br /><br />
          ● 백색 왜성 : 이 별들은 핵연료가 부족한 다른 별들의 잔재입니다. 이 유형의 별은 적색 왜성과 함께 전체 우주에서 가장 많습니다. 알려진 별의 97 %가이 단계를 거치는 것으로 추정됩니다. 일찍이 모든
          별은 연료가 부족하여 결국 백색 왜성이됩니다.<br />
        </div>
      </div>
    ),
  };

  const data = {
    별이란: (
      <div>
        <h2 style={{ fontWeight: "700", fontSize: "25px" }}>별 이란?</h2>
        <h2 style={{ fontWeight: "550", fontSize: "22px" }}>“행성, 위성, 혜성, 유성을 제외한 스스로 빛을 내는 천체.”</h2>
        <div style={{ fontWeight: "500", fontSize: "19px", lineHeight: "32px", paddingTop: "1%" }}>
          천문학에서는 태양처럼 스스로 빛을 내는 항성을 별이라 하며, 항성의 빛을 반사하여 빛나는 행성·위성·혜성 등과 구별한다.<br /><br />
          중심의 온도와 압력이 대단히 높기 때문에 수소원자가 서로 결합하여 헬륨원자가 되는 이른바 핵융합반응을 통해서 생성되는 막대한 에너지로 빛이나 열을 발산하여 빛을 낸다.<br /><br />
          별의 지름은 적어도 지구의 100배 정도이며, 우리 태양계에서 이런 크기에 빛과 열을 내는 별로서는 태양이 있을 뿐이다. 태양이 밤하늘에 보이는 무수히 많은 별과 조금도 다르지 않은 천체임에도
          불구하고 다른 별과 다르다고 생각되는 이유는 다만 우리와의 거리가 대단히 가깝다는 이유 때문이다.<br /><br />
          항성은 그 거리가 너무 멀기 때문에 하늘에서 위치가 변하지 않는 것처럼 보이며 우리는 편의 상 별자리를 만들어 그 위치를 나타내지만 사실은 각기 다른 방향으로 운동하고 있다.<br /><br />
          따라서 오랜 세월이 지나면 그 위치에 변화가 나타나고, 별자리의 형태도 달라진다.
        </div>
      </div>
    ),
    "별의 탄생과 죽음": (
      <div>
        <h2 style={{ fontWeight: "700", fontSize: "20px", paddingTop: "2%" }}>별의 탄생</h2>
        <div style={{ fontWeight: "500", fontSize: "15px", lineHeight: "23px" }}>
          별(항성)은 수소, 헬륨 및 기타 중원소와 먼지 등으로 이루어진 거대한 성간 분자 구름(성운)에서 탄생한다. 성운은 일반적인 우주 물질 밀도의 수백만 배에 달하는 상당히 조밀한 밀도를 자랑한다.<br />
          위 성운이 어떤 임계 질량(진스 질량: Jeans mass)을 초과하면 다른 힘이 붕괴를 저지시킬 때까지 폭주하며 수축하는 과정을 시작하게 된다.<br /><br />
          예를 들면 구름의 질량이나 밀도가 클수록, 크기가 작을수록, 온도가 상대적으로 낮을수록 물질들의 운동에너지가 적어진다. <br />
          따라서, 위 진스 질량은 낮아지게 되어 중력 붕괴가 일어나기 쉬워지고 결국 성운에서 별이 태어나기 쉬워진다.
        </div>
        
        <h2 style={{ fontWeight: "700", fontSize: "20px", paddingTop: "2%" }}>별의 진화</h2>
        <div style={{ fontWeight: "500", fontSize: "15px", lineHeight: "23px" }}>
          원시별 단계 -{">"} 전주계열성 단계 -{">"} 주계열성 단계 -{">"} 후주계열성 단계
        </div>
        
        <h2 style={{ fontWeight: "700", fontSize: "20px", paddingTop: "2%" }}>별의 죽음</h2>
        <div style={{ fontWeight: "500", fontSize: "15px", lineHeight: "23px" }}>
          4가지 큰 진화 단계를 거쳐서 별은 결국 길고 긴 일생을 마무리하기 시작한다. 별의 최후는 보통 별 내부 물질의 밀도가 보통의 별보다 압도적으로 높은 별들,<br /> 즉 밀집성으로 불리는 천체들로 맞이하게 된다. 이들은 크게 3~4가지의 형태로 나누어지는데 보통 백색왜성, 초신성, 중성자별, 그리고 블랙홀 등이 있으며 항성의 연료가 전부 소모되어 핵융합
          반응이 더이상 일어나지 않는다.<br /><br />
          항성이 더 이상 핵융합을 일으킬 수 없게 되면서 중력에 대항하는 복사압이 사라지게 되고, 따라서 항성의 중심핵은 급격히 수축하게 된다.<br />
          중심부의 밀도와 질량에 따라서 백색왜성이나 중성자별, 혹은 블랙홀 등으로 진화하게 되며 다만 초기 질량이 작은 적색왜성 같은 경우는 밀집성으로의 진화가 존재하지 않는다.
        </div>
      </div>
    ),
    "별의 종류": (
      <div className="starKinds">
        <div className="starKindsTop">
          <button className="starKindsButton" onClick={() => setCurrentState2("온도와 광도")}>
            온도와 광도
          </button>
          <button className="starKindsButton" onClick={() => setCurrentState2("빛과 열")}>
            빛과 열
          </button>
          <hr style={{ position: "absolute", width: "100%", top: "90%" }} />
        </div>
        {data2[currentState2]}
      </div>
    ),
    "우리 은하": (
      <div>
        <h2 style={{ fontWeight: "700", fontSize: "20px", paddingTop: "2%" }}>우리 은하</h2>
        <div style={{ fontWeight: "500", fontSize: "15px", lineHeight: "23px" }}>
          우리 은하는 우주에서 상당히 큰 은하에 속한다. 특히 가스가 풍부한 나선 은하 중에서는 질량이나 항성 숫자로 봤을 때 안드로메다 은하와 우리 은하만큼 거대한 은하가 희귀하다.<br />
          가까운 은하들 중에서는 정상나선은하인 바람개비 은하가 반지름에서 우리 은하를 능가하지만, 총 질량은 비슷한 수준이다.<br /><br />
          우리 은하의 지름은 약 10만 광년 정도이고 중심핵의 직경은 약 1만 광년, 두께는 1만 5천 광년 정도이다. 나선팔 부분, 항성이 집중된 영역의 두께는 1천~2천 광년 정도의 크기인 것으로 추산되며, 그
          외의 가스층까지 포함하면 디스크의 두께는 1만 광년이 넘는다.<br /><br />
          태양계가 은하의 구석진 변두리라는 인식이 있지만 이 정도 거리는 변두리는 아니고 중간 지점 쯤 된다. 이는 관측적 사실로도 알 수 있는데 은하수를 하늘에서 거의 1년 내내 볼 수 있다.<br />
          정말로 태양계가 은하의 변두리에 있었다면 1년 중 절반 정도는 은하수가 거의 보이지 않을 것이다.<br />
          또한 은하수는 천구를 거의 정확하게 절반으로 나누며 지나가는데 이는 우리 태양계가 은하의 공전면에 아주 가깝게 붙어 있음을 알 수 있다.<br /><br />
          지구에서 가장 가까운 은하이지만, 아이러니하게도 우리 은하의 전체 모습을 관측하는 것은 현재 기술로썬 불가능하다.<br />
          아직 인류의 활동 범위는 은하 원반은커녕 인공물이 태양계를 겨우 벗어나는 수준이기 때문에,<br />
          우리 은하를 외부에서 촬영한 사진은 존재하지 않는다. 우리 은하의 지름이 대략 10만 광년이기 때문에, 이 광경을 찍으려면 못 해도 몇 만 광년 너머에서 찍어야 하고,<br />
          설사 여차저차해서 찍을 수 있더라도, 정보 전달 속도 역시 빛의 속도를 초과할 수는 없으므로, 사진 정보를 수신하는 데에만 몇 만 년이 걸릴 것이기 때문이다.<br />
          과거에는 안드로메다 은하와 모습이 완전히 닮은 정상나선은하로 간주하여, 우리 은하는 중심의 은하핵과 4개의 나선팔을 가진 형태로 그려지는 경우가 많았다.<br />
          그러나 2005년 스피처 우주 망원경으로 관측해, 우리 은하 중심부의 막대구조를 공식 확인했다. 그리고 우리 은하의 팔도 막대구조 끝에서 뻗어나온 2개의 나선팔이 있고,<br />
          여기서 가지치기한 2개의 나선팔이 더 있는 전형적인 막대나선은하(허블 분류에 따르면 SBbc형) 형태임이 드러났다.
        </div>

        <div style={{ paddingTop: "2%" }}>
          <button className="GalaxyImgButton" onClick={() => setCurrentState("은하 사진")}>
            우리 은하 상상도
          </button>
        </div>
      </div>
    ),
    "은하 사진": (
      <div style={{ paddingLeft: "15%", paddingTop: "3%" }}>
        <img className="galaxyImage" alt="https://namu.wiki/w/%EC%9A%B0%EB%A6%AC%20%EC%9D%80%ED%95%98" src={우리은하} />
        <AiOutlineArrowLeft style={{ paddingLeft: "3%", fontSize: "100px" }} onClick={() => setCurrentState("우리 은하")} />
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
            별 Star
          </div>
          
          <div className="starBoxTopRight" style={{ paddingRight: "15%" }}>
            <button className="starButton" onClick={() => setCurrentState("별이란")}>
              별 이란?
            </button>
            <button className="starButton" onClick={() => setCurrentState("별의 탄생과 죽음")}>
              별의 탄생과 죽음
            </button>
            <button className="starButton" onClick={() => setCurrentState("별의 종류")}>
              별의 종류
            </button>
            <button className="starButton" onClick={() => setCurrentState("우리 은하")}>
              우리 은하
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

export default StarPage;
