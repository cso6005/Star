import "../../css/Main.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div class="App" >

      <div class="topnav" >

        <Link to="/"><span class = "logo">STAR</span></Link>

        <div class="menu">
          <Link to="#">About Star</Link>
          <Link to="/summary">Observing Stars</Link>
          <Link to="#">About Constellations</Link>
          <Link to="#">Observation Info</Link>
        </div>  

        
      </div>
      <hr></hr>

    </div>

  );
};


export default Header;
