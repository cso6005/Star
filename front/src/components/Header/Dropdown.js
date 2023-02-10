import "../../css/Dropdown-menu.css";
import { Link } from "react-router-dom";

export default function Dropdown() {
  return (
    <>
      <div className="d-menu">
        <Link to="/observation-info/observation/site" style={{ fontSize: "20px", padding: "4px 4px" }}>
          별 관측 명소
        </Link>
        <Link to="/observation-info/observatory/site" style={{ fontSize: "20px", padding: "4px 4px" }}>
          천문대
        </Link>
        <Link to="/camera" style={{ fontSize: "20px", padding: "4px 4px" }}>
          별 촬영 Tip
        </Link>
      </div>
    </>
  );
}
