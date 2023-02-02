import * as React from 'react'
import { useEffect, useRef, useState } from 'react'

import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import purify from "dompurify";

import * as d3 from 'd3'
import { feature } from 'topojson-client'

import '../../css/chart.css'
import "../../css/site.css";

import korea from '../../geo/koreaTopo.json' 
import Header from "../Header/Header";
import BackIcon from '../../image/back-icon.png';


const featureData = feature(korea, korea.objects['korea'])

const ObservatoryComponent = () => {

    const chart = useRef(null)


    const [map, setMap] = useState([
        {
            "lat" : "",
            "lon" : ""
        }
        ] )


    const [site, setSite] = useState([{ siteName: "과학동아천문대", siteX:"37.533658", siteY:"126.963113", siteAddress:"서울시 용산구 청파로 109 7층"},
                                         { siteName: "중미산천문대", siteX:"37.581810", siteY:"127.459358", siteAddress:"경기도 양평군 옥천면 중미산로 1268"},
                                         { siteName: "시민천문대", siteX:"", siteY:"", siteAddress:"대전광역시 유성구 과학로 213-48"},
                                         { siteName: "별마로천문대", siteX:"", siteY:"", siteAddress:"강원도 영월군 영월읍 천문대길 397"},
                                         { siteName: "섬진강천문대", siteX:"", siteY:"", siteAddress:"전라남도 구례군 구례읍 섬진강로 1234"},
                                         { siteName: "보현산천문과학관", siteX:"", siteY:"", siteAddress:"경상북도 영천시 화북면 별빛로 681-32"},

        ]);


    

    const handleClick = (o) => {

        setMap([
            {
                "lat" : site[o.target.id].siteX,
                "lon" : site[o.target.id].siteY
            }
            ] )

        console.log(map);
 
      } 
 
    const printD3 = () => {

        const width = 350
        const height = 400
     
        const projection = d3.geoMercator().scale(1).translate([0, 0])
        const path = d3.geoPath().projection(projection)
        const bounds = path.bounds(featureData)
        
        const dx = bounds[1][0] - bounds[0][0]
        const dy = bounds[1][1] - bounds[0][1]
        const x = (bounds[0][0] + bounds[1][0]) / 2
        const y = (bounds[0][1] + bounds[1][1]) / 2
        const scale = 1 / Math.max(dx / width, dy / height)
        const translate = [width / 2 - scale * x , height / 2 - scale * y ]
     
        projection.scale(scale).translate(translate)

        const svg = d3
        .select(chart.current)
        .append('svg')
        .attr('width', width)
        .attr('height', height);
   
  
        const mapLayer = svg.append('g')

        mapLayer
        .selectAll('path')
        .data(featureData.features)
        .enter().append('path') 
        .attr('class', 'country')
        .attr('d', path)
        .attr('name', d => d.properties.name)

        const marker = svg.append('g').selectAll('svg')


        marker
        .data(map)
        .enter()  
        .append("svg:image")
        .attr("width", 10)
        .attr("height", 10)
        .attr('x' ,  d=> projection([d.lon, d.lat])[0])
        .attr('y' ,  d=> projection([d.lon, d.lat])[1] - 100)
        .attr('opacity', 0)
        .attr("xlink:href", require("../../image/maker.png")) 
        .on('click', d =>{
        console.log(d)
        })
        .transition()
        .ease(d3.easeElastic)
        .duration(2000)
        .delay((d, i)=> i * 50)
        .attr('opacity', 1)
        .attr('y' ,  d=> projection([d.lon, d.lat])[1] - 5)

    }

    useEffect(() => {
        console.log(map);
 
        printD3(); 
      },[map])    

    return(
        
        <div>
            <Header/>
            <div className="blank" style={{ height: "120px" }} />
            <div className="detailCard">
                <div className="detailCard1">
                <div className="back-icon"><Link to="/observationSite"><img src={BackIcon} /></Link></div>

                    <div style={{fontSize:"20px", color:"white", fontWeight:"bold", paddingTop:"5%", paddingLeft:"10%", textAlign:"left", lineHeight:"120%"}}>
                            별 보기 좋은 천문대
                            <div className="blank" style={{ height: "25px" }} />

                            <div ref={chart} />
 
                            {/* {map.lat === undefined ? (
                                "클릭"
                            ): (
                                <div ref={chart}></div>
                            )}   */}

                            
                    </div>
                    
                </div>
                <div className="detailCard2">
                    <div className="detailCard3">
                        <div className="detailCard3ColumnLeft" >
                            <div id={"0"} onClick={handleClick}>{site[0].siteName}</div>
                            <div id={"1"} onClick={handleClick}>{site[1].siteName}</div>
                            <div id={"2"} onClick={handleClick}>{site[2].siteName}</div>
                            <div id={"3"} onClick={handleClick}>{site[3].siteName}</div>
                            <div id={"4"} onClick={handleClick}>{site[4].siteName}</div>
                            <div id={"5"} onClick={handleClick}>{site[5].siteName}</div>
                        </div>
                        <div className="detailCard3ColumnRight">
                            <div id={"0"} onClick={handleClick}>{site[0].siteAddress}</div>
                            <div id={"1"} onClick={handleClick}>{site[1].siteAddress}</div>
                            <div id={"2"} onClick={handleClick}>{site[2].siteAddress}</div>
                            <div id={"3"} onClick={handleClick}>{site[3].siteAddress}</div>
                            <div id={"4"} onClick={handleClick}>{site[4].siteAddress}</div>
                            <div id={"5"} onClick={handleClick}>{site[5].siteAddress}</div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="blank" style={{ height: "205px" }} />







        
            


        </div>

    );

    
    
};


export default React.memo(ObservatoryComponent);
