import { NavLink } from "react-router-dom";
import logo from "./logo.png";

function Navbar(){
    return(
<>
 <div class="navbar">
 <div class="logo">
       <img src={logo}></img>
      </div>
                <div>
                    <ul class="menu">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/About">About</NavLink></li>
                    <li><NavLink to="/Contact">Contact</NavLink></li>
                    </ul>
                </div>
            </div>
</>
    );
}

export default Navbar;