import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import ObservationSiteComponent from './components/ObservationSite/observationSiteComponent';
import SiteDetailComponent from './components/ObservationSite/SiteDetailComponent'
import ConstellationsComponent from './components/Constellations/ConstellationsComponent';

import reportWebVitals from './reportWebVitals';
import "./index.css"
import { BrowserRouter, Route, Routes} from "react-router-dom";
import background from './image/backgroundStar.jpg'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <div>

    <div className="App" style={{ backgroundImage: `url(${background})` ,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    backgroundColor: 'rgba( 255, 255, 255, 0.5 )',
    }}>

  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<App />} />
      <Route path="/observationSite" exact element={<ObservationSiteComponent />} />
      <Route path="/site/detail" exact element={< SiteDetailComponent/>} />
      <Route path="/constellations" exact element={< ConstellationsComponent/>} />


    </Routes>
  </BrowserRouter>
</div>
</div>

);


reportWebVitals();
