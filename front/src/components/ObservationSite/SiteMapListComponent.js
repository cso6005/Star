import * as React from 'react'
import { useEffect, useRef, useState } from 'react'

import axios from "axios";
import { useNavigate } from "react-router-dom";

import * as d3 from 'd3'
import { feature } from 'topojson-client'
import '../../css/chart.css' 
import korea from '../../geo/koreaTopo.json' 
 
const featureData = feature(korea, korea.objects['korea'])

const SiteMapListComponent = () => {
 
  const [siteList, setSiteList] = useState("");
  const navigate = useNavigate();

  const chart = useRef(null)
 
  const printD3 = () => {
 
    // 지도 svg의 너비와 높이
    const width = 500
    const height = 500
 
 
    // 메르카토르 투영법 설정
    const projection = d3.geoMercator().scale(1).translate([0, 0])
    const path = d3.geoPath().projection(projection)
    const bounds = path.bounds(featureData)
    
    // svg의 크기에 따른 지도의 크기와 위치값을 설정
    const dx = bounds[1][0] - bounds[0][0]
    const dy = bounds[1][1] - bounds[0][1]
    const x = (bounds[0][0] + bounds[1][0]) / 2
    const y = (bounds[0][1] + bounds[1][1]) / 2
    const scale = 0.9 / Math.max(dx / width, dy / height)
    const translate = [width / 2 - scale * x, height / 2 - scale * y]
 
    projection.scale(scale).translate(translate)
 
    // svg를 만들고
    const svg = d3
      .select(chart.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    const mapLayer = svg.append('g')


    const handleClick = (d) => {

      const region = d.properties.name;


      axios.get("http://localhost:8080/observation-info/get-stie", {
        params: {
          id: region 
        }
      })
      .then((response) => {

        if (response.data == 0) {

          console.log("데이터 없음")
          console.log(response.data)

        }

        setSiteList(response.data)


      }).catch((error) => {

        console.log(error)

      });
 
      

      };
    
  var mapLayer1 = mapLayer
      .selectAll('path')
      .data(featureData.features)
      .enter().append('path') 
      .attr('class', 'country')
      .attr('d', path)
      .text(d => d.properties.name)
      .attr('name', d => d.properties.name)
      .on('click', handleClick)

  
  

  }

  const clickDetail = (i) => {

    var id = i.target.id

    siteList.forEach((site) => {

      if (site.siteId == id) {

        console.log(id)
        console.log(site)

        navigate(
          '/site/detail',
          {
            state: {
              siteId: site.siteId,
              siteName: site.siteName,
              siteInfo: site.siteInfo,
              siteX: site.siteX,
              siteY: site.siteY,
              siteAddress: site.siteAddress,
            },
          },
          { replace: false}
        );


      }
    }

    );


    



    }


  
 
  useEffect(() => {
    printD3()
  }, [])
 
  return (
    <div >


    <div className='map'>

        <div ref={chart}></div>

    </div>  
      
      <div class='site-list'>

        <h3>관측 명소 리스트</h3>
        
        {siteList.length === 0 ? (

          <div>원하는 지역을 클릭해보세요.</div>

        ) : (        
          
          siteList.map((site) => (
          <div>
            <div className='siteList' onClick={clickDetail} id={site.siteId}>{site.siteName}</div> 
          </div>
        ))

        )}

    <div class="blank" style={{ height: "150px" }}></div>

    </div>
    </div>
  )
}
 
export default React.memo(SiteMapListComponent); 