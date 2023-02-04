import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import background from './image/backgroundStar2.jpg'
import DetailRegion from './components/DetailInfo/DetailRegionPage';
import SelectRegion from './components/SelectCity/SelectRegionPage';
import SiteMapListComponent from './components/ObservationSite/SiteMapListComponent';
import SiteDetailComponent from './components/ObservationSite/SiteDetailComponent'
import ConstellationsComponent from './components/Constellations/ConstellationsComponent';
import StarPage from './components/AboutStar/StarPage';
import Camera from './components/ObservationSite/Camera';

import ObservatoryComponent from './components/Observatory/ObservatoryListComponent';
import ObservatoryDetailComponent from './components/Observatory/ObservatoryDetailComponent';

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
          <Route path="/aboutStar" exact element={<StarPage />} />
          <Route path="/summary" exact element={<SelectRegion />} />
          <Route path="/detailRegion" exact element={<DetailRegion />} />
          <Route path="/siteMapList" exact element={<SiteMapListComponent />} />
          <Route path="/site/detail" exact element={< SiteDetailComponent/>} />
          <Route path="/constellations" exact element={< ConstellationsComponent/>} />
          <Route path="/camera" exact element={< Camera/>} />
          <Route path="/observatory" exact element={< ObservatoryComponent/>} />
          <Route path="/observatory/detail" exact element={< ObservatoryDetailComponent/>} />
        </Routes>
      </BrowserRouter>
    </div>
  </div>

);


reportWebVitals();
