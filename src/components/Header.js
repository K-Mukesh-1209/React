import { LOGO_URL } from "../utils/constants";
import { use, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () =>{
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return(
        <div className="flex justify-between bg-red-50 shadow-lg p-5">
            <div>
                <img className="w-20" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex items-center space-x-4 p-10">
                    <li>
                        {onlineStatus ? "Online" : "Offline"}
                    </li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li>Contact Us</li>
                    <li><Link to="/Grocery">Grocery</Link></li>
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