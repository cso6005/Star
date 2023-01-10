import React, { useState } from "react";
import Header from "../Header/Header"
import "../../css/Main.css";

const StarPage = () => {

    const data = {
        '별이란':  <div>
                        <h2 style={{fontWeight:"700", fontSize:"25px"}}>별 이란?</h2>
                        <h2 style={{fontWeight:"550", fontSize:"22px"}}>“행성, 위성, 혜성, 유성을 제외한 스스로 빛을 내는 천체.”</h2>
                        <div style={{fontWeight:"500", fontSize:"19px", lineHeight:"32px", paddingTop:"1%"}}>
                            천문학에서는 태양처럼 스스로 빛을 내는 항성을 별이라 하며, 
                            항성의 빛을 반사하여 빛나는 행성·위성·혜성 등과 구별한다.
                            <br /><br />
                            중심의 온도와 압력이 대단히 높기 때문에 수소원자가 서로 결합하여 
                            헬륨원자가 되는 이른바 핵융합반응을 통해서 생성되는 막대한 에너지로 빛이나 열을 발산하여 빛을 낸다.
                            <br /><br />
                            별의 지름은 적어도 지구의 100배 정도이며, 우리 태양계에서 이런 크기에 빛과 열을 내는 별로서는 태양이 있을 뿐이다. 
                            태양이 밤하늘에 보이는 무수히 많은 별과 조금도 다르지 않은 천체임에도 불구하고 
                            다른 별과 다르다고 생각되는 이유는 다만 우리와의 거리가 대단히 가깝다는 이유 때문이다.
                            <br /><br />
                            항성은 그 거리가 너무 멀기 때문에 하늘에서 위치가 변하지 않는 것처럼 보이며 
                            우리는 편의 상 별자리를 만들어 그 위치를 나타내지만 사실은 각기 다른 방향으로 운동하고 있다.
                            <br /><br />
                            따라서 오랜 세월이 지나면 그 위치에 변화가 나타나고, 별자리의 형태도 달라진다.
                        </div>
                    </div>,
        '별의 탄생과 죽음': <div>
                                <h2 style={{fontWeight:"700", fontSize:"20px", paddingTop:"2%"}}>별의 탄생</h2>
                                <div style={{fontWeight:"500", fontSize:"15px", lineHeight:"23px"}}>
                                    별(항성)은 수소, 헬륨 및 기타 중원소와 먼지 등으로 이루어진 거대한 성간 분자 구름(성운)에서 탄생한다.
                                    성운은 일반적인 우주 물질 밀도의 수백만 배에 달하는 상당히 조밀한 밀도를 자랑한다.<br />
                                    위 성운이 어떤 임계 질량(진스 질량: Jeans mass)을 초과하면 다른 힘이 붕괴를 저지시킬 때까지 폭주하며 수축하는 과정을 시작하게 된다.
                                    <br /><br />
                                    예를 들면 구름의 질량이나 밀도가 클수록, 크기가 작을수록, 온도가 상대적으로 낮을수록 물질들의 운동에너지가 적어진다. <br />
                                    따라서, 위 진스 질량은 낮아지게 되어 중력 붕괴가 일어나기 쉬워지고 결국 성운에서 별이 태어나기 쉬워진다.
                                </div>
                                <h2 style={{fontWeight:"700", fontSize:"20px", paddingTop:"2%"}}>별의 진화</h2>
                                <div style={{fontWeight:"500", fontSize:"15px", lineHeight:"23px"}}>
                                    원시별 단계 -{">"} 전주계열성 단계 -{">"} 주계열성 단계 -{">"} 후주계열성 단계  
                                </div>
                                <h2 style={{fontWeight:"700", fontSize:"20px", paddingTop:"2%"}}>별의 죽음</h2>
                                <div style={{fontWeight:"500", fontSize:"15px", lineHeight:"23px"}}>
                                    4가지 큰 진화 단계를 거쳐서 별은 결국 길고 긴 일생을 마무리하기 시작한다. 별의 최후는 보통 별 내부 물질의 밀도가 보통의 별보다 압도적으로 높은 별들,<br /> 즉 밀집성으로 불리는 천체들로 맞이하게 된다. 
                                    이들은 크게 3~4가지의 형태로 나누어지는데 보통 백색왜성, 초신성, 중성자별, 그리고 블랙홀 등이 있으며 항성의 연료가 전부 소모되어 핵융합 반응이 더이상 일어나지 않는다.<br /><br />
                                    항성이 더 이상 핵융합을 일으킬 수 없게 되면서 중력에 대항하는 복사압이 사라지게 되고, 따라서 항성의 중심핵은 급격히 수축하게 된다.<br /> 중심부의 밀도와 질량에 따라서 백색왜성이나 중성자별, 혹은 블랙홀 등으로 진화하게 되며 다만 초기 질량이 작은 적색왜성 같은 경우는 밀집성으로의 진화가 존재하지 않는다.
                                </div>

        </div>
        
    };

    const [currentState, setCurrentState] = useState('별이란');

    return(
        <div>
            <Header />
            <div className="blank" style={{ height: "80px" }} />
            <div className="starBox">
                <div className="starBoxTop">
                    <div className="starBoxTop1" style={{textAlign:"left", paddingLeft:"10%", fontWeight:"bold",
                fontSize:"40px", paddingTop:"6%"}}>별 Star</div>
                    <div className="starBoxTop2" style={{paddingRight:"15%"}}>
                        <button className="starButton" onClick={()=>(
                            setCurrentState('별이란')
                        )}>별 이란?</button>
                        <button className="starButton" onClick={()=>(
                            setCurrentState('별의 탄생과 죽음')
                        )}>별의 탄생과 죽음</button>
                        <button className="starButton" onClick={()=>(
                            setCurrentState('별의 종류')
                        )}>별의 종류</button>
                        <button className="starButton" onClick={()=>(
                            setCurrentState('우리 은하의 별')
                        )}>우리 은하의 별</button>
                        <hr style={{position:"absolute",width:"82%", top:"80%", right:"3%"}}/>
                    </div>
                </div>
                <div className="starBoxContents">
                    <div style={{paddingLeft:"5%", paddingRight:"5%", paddingTop:"1%", color:"white", textAlign:"left"}}>
                        {data[currentState]}
                    </div>
                </div>
            </div>
            <div className="blank" style={{ height: "50px" }} />
        </div>
    )
}

export default StarPage;