import * as React from "react";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as d3 from "d3";
import { feature } from "topojson-client";
import Header from "../Header/Header";
import "../../css/chart.css";
import "../../css/site.css";
import korea from "../../geo/koreaTopo.json";

const featureData = feature(korea, korea.objects["korea"]);

const SiteMapListComponent = () => {
  const [siteList, setSiteList] = useState("");
  const navigate = useNavigate();

  const chart = useRef(null);

  const printD3 = () => {
    const width = 350;
    const height = 450;

    const projection = d3.geoMercator().scale(1).translate([0, 0]);
    const path = d3.geoPath().projection(projection);
    const bounds = path.bounds(featureData);

    const dx = bounds[1][0] - bounds[0][0];
    const dy = bounds[1][1] - bounds[0][1];
    const x = (bounds[0][0] + bounds[1][0]) / 2;
    const y = (bounds[0][1] + bounds[1][1]) / 2;
    const scale = 1 / Math.max(dx / width, dy / height);
    const translate = [width / 2 - scale * x, height / 2 - scale * y];

    projection.scale(scale).translate(translate);

    const svg = d3.select(chart.current).append("svg").attr("width", width).attr("height", height);

    const mapLayer = svg.append("g");

    const handleClick = (d) => {
      const region = d.properties.name;

      axios
        .get("/api/v1/observation-info/get-site", {
          params: {
            id: region,
          },
        })
        .then((response) => {
          if (response.data == 0) {
            console.log("데이터 없음");
          }
          setSiteList(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    mapLayer
      .selectAll("path")
      .data(featureData.features)
      .enter()
      .append("path")
      .attr("class", "country")
      .attr("d", path)
      .text((d) => d.properties.name)
      .attr("name", (d) => d.properties.name)
      .on("click", handleClick);
  };

  const clickDetail = (i) => {
    var id = i.target.id;

    siteList.forEach((site) => {
      if (site.siteId == id) {
        navigate(
          "/site/detail",
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
          { replace: false }
        );
      }
    });
  };

  useEffect(() => {
    printD3();
  }, []);

  return (
    <div>
      <Header></Header>
      <div className="blank" style={{ height: "120px" }} />
      <div className="detailCard">
        <div className="detailCard1">
          <div style={{ fontSize: "20px", color: "white", fontWeight: "bold", paddingTop: "5%", paddingLeft: "10%", textAlign: "left", lineHeight: "120%" }}>
            별 보기 좋은 명소
            <div className="blank" style={{ height: "25px" }} />
            <div ref={chart} />
          </div>
        </div>

        <div className="detailCard2">
          <div style={{ fontSize: "20px", color: "white", fontWeight: "bold", paddingTop: "5%", paddingLeft: "7%", textAlign: "left", lineHeight: "120%" }}>관측 명소 리스트</div>
          <div style={{ fontSize: "17px", color: "white", fontWeight: "bold", paddingTop: "10%", textAlign: "center", lineHeight: "120%" }}>
            {siteList.length == 0 ? (
              <p>원하는 지역을 클릭해보세요.</p>
            ) : (
              siteList.map((site) => (
                <div>
                  <div className="siteList" onClick={clickDetail} id={site.siteId}>
                    {site.siteName}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <div className="blank" style={{ height: "205px" }} />
    </div>
  );
};

export default React.memo(SiteMapListComponent);
