import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
export const Header = () => {
    const [btnname, setBtnname] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={()=>{
                        btnname === "Login"
                        ? setBtnname("Logout")
                        : setBtnname("Login");
                    }}>
                        {btnname}
                    </button>
                </ul>
            </div>
        </div>
    )
};

export default Header;