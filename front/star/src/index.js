import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
// import './css/Main.css'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import background from './image/backgroundStar2.jpg'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <div>
    <div className="App" style={{ backgroundImage: `url(${background})` ,
    backgroundPosition: 'top center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    // backgroundColor: 'rgba( 255, 255, 255, 0.3 )',
    }}>

  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<App />} />
    </Routes>
  </BrowserRouter>
{/* </div> */}
</div>
</div>

);


reportWebVitals();