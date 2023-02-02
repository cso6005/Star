import * as React from 'react'
import { useEffect, useRef, useState } from 'react'

import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import purify from "dompurify";

import * as d3 from 'd3'
import { feature } from 'topojson-client'

import "../../css/site.css";
import '../../css/site-detail.css'
import '../../css/chart.css'

import korea from '../../geo/koreaTopo.json' 
import Header from "../Header/Header";
import BackIcon from '../../image/back-icon.png';

const featureData = feature(korea, korea.objects['korea'])

const ObservatoryDetailComponent = () => {

    const location = useLocation();

    const [siteId, setSiteId] = useState(location.state.siteId);
    const [siteName, setSiteName] = useState(location.state.siteName);
    const [siteInfo, setSiteInfo] = useState(location.state.siteInfo);
    const [siteX, setSiteX] = useState(location.state.siteX);
    const [siteY, setSiteY] = useState(location.state.siteY);
    const [siteAddress, setSiteAddress] = useState(location.state.siteAddress);

    
    const chart = useRef(null)
 
    const printD3 = () => {
   
      const width = 350
      const height = 450
   
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
      .text(d => d.properties.name)
      .attr('name', d => d.properties.name)

      const marker = svg.append('g').selectAll('svg')

      const mapInfo = [
        {
          "name": siteName,
          "lat" : siteX,
          "lon" : siteY
        }
      ] 

      marker
      .data(mapInfo)
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
        printD3()
      }, [])    

    return(
        
        <div>
            <Header/>
            <div className="blank" style={{ height: "120px" }} />
            <div className="detailCard">
                <div className="detailCard1">
                <div className="back-icon"><Link to="/observatory"><img src={BackIcon} /></Link></div>
                    <div style={{fontSize:"20px", color:"white", fontWeight:"bold", paddingTop:"5%", paddingLeft:"10%", textAlign:"left", lineHeight:"120%"}}>
                      별 보기 좋은 천문대
                      <div className="blank" style={{ height: "25px" }} />
                      <div ref={chart} />
                    </div>
                </div>

                <div className="detailCard2">
                  <div style={{fontSize:"14px", color:"white", fontWeight:"bold", paddingTop:"3%", textAlign:"center", lineHeight:"120%"}}>
                    <h2>{siteName}</h2> {siteAddress}
                  
                  </div>
                  
                 
                  <div class="info" dangerouslySetInnerHTML={{ __html: purify.sanitize(siteInfo) }} style={{fontSize:"16px", color:"white", fontWeight:"bold", paddingTop:"0%", paddingLeft:"4%", paddingRight:"4%", textAlign:"center"}}/>

                  <div style={{fontSize:"10px", color:"white", fontWeight:"bold", textAlign:"left", lineHeight:"120%"}}>
                    
                  </div>
                  
                  


                </div>

            </div>
        <div className="blank" style={{ height: "205px" }} />
      </div>

    );

    
    
};


export default React.memo(ObservatoryDetailComponent);
