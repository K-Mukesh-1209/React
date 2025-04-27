import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () =>{
    const [btnName, setBtnName] = useState("Login");

    return(
        <div className="header">
            <div>
                <img className="main-logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <div className="login-container">
                <button className="login-btn" onClick={()=>{
                    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                }}>{btnName}</button>
                </div>
                </ul>
                
            </div>
            
        </div>
    );
};

export default Header;