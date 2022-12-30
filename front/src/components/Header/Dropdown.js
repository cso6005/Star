import "../../css/Dropdown-menu.css"
import { Link } from "react-router-dom";


export default function Dropdown() {
    return (
        <>
            <div class="d-menu">
                <Link to="/observationSite" style={{ fontSize:"22px", padding: "5px 5px"}}>별 관측 명소</Link>
                <Link to="#" style={{ fontSize:"22px", padding: "5px 5px"}}>천문대</Link>
                <Link to="#" style={{ fontSize:"22px", padding: "5px 5px"}}>별자리</Link>
            </div>
        </>
    )
}