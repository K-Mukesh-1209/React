import { LOGO_URL } from "../utils/constants";

const Header = () =>{
    return(
        <div className="header">
            <div>
                <img className="main-logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;