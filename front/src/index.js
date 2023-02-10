import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import background from './image/backgroundStar2.jpg'

import DetailRegion from './components/DetailInfo/DetailRegionPage';
import SelectRegion from './components/SelectCity/SelectRegionPage';
import ObservationSite from './components/ObservationSite/SiteMapListComponent';
import ObservationSiteDetail from './components/ObservationSite/SiteDetailComponent'
import Constellations from './components/Constellations/ConstellationsComponent';
import Star from './components/AboutStar/StarPage';
import Camera from './components/ObservationSite/Camera';
import ObservatorySite from './components/Observatory/ObservatoryListComponent';
import ObservatorySiteDetail from './components/Observatory/ObservatoryDetailComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <div>
    <div className="App" style={{ backgroundImage: `url(${background})` ,
      backgroundPosition: 'top center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed'
    }}>                                                                                      
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<App />} />
          <Route path="/star" exact element={<Star />} />
          <Route path="/observing/region/all" exact element={<SelectRegion />} />
          <Route path="/observing/region" exact element={<DetailRegion />} />
          <Route path="/observation-info/observation/site" exact element={<ObservationSite />} />
          <Route path="/observation-info/observation/site/detail" exact element={<ObservationSiteDetail />} />
          <Route path="/observation-info/observatory/site" exact element={<ObservatorySite />} />
          <Route path="/observation-info/observatory/site/detail" exact element={<ObservatorySiteDetail />} />
          <Route path="/constellations" exact element={<Constellations />} />
          <Route path="/camera" exact element={<Camera />} />
        </Routes>
      </BrowserRouter>
    </div>
  </div>

);


reportWebVitals();
