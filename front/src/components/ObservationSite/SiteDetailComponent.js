import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../../css/site-detail.css'

import Header from "../Header/Header";


const SiteDetailComponent = () => {
    const location = useLocation();

    const [siteId, setSiteId] = useState(location.state.siteId);
    const [siteName, setSiteName] = useState(location.state.siteName);
    const [siteInfo, setSiteInfo] = useState(location.state.siteInfo);
    const [siteX, setSiteX] = useState(location.state.siteX);
    const [siteY, setSiteY] = useState(location.state.siteY);
    const [siteAddress, setSiteAddress] = useState(location.state.siteAddress);

  
    return(
        
        <div>
            <Header></Header>
            <br/><br/><br/>

            <div className="site-info">
                <h3>관측 명소 정보</h3>

                <div class="name">{siteName}</div><br/>

                <div>{siteInfo}</div><br/>

                <div>{siteAddress}</div>
            </div>
            <br/><br/><br/>



        </div>

    );

    
    
};


export default React.memo(SiteDetailComponent);
