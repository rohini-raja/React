import React from "react";
import ReactDOM from "react-dom/client";
/*
Components for a Food ordering app
-- Header
    -Logo
    -Nav Items (Home, About, CART?)
-- Body
    -Search
    -Restaurants container
        - Restaurant cards
            -Image
            -Name
            -Rating
            -Delivery Time
            -Cost for 2
            -Cuisine
            -Discount
            -Offer
            -Button (Order Now)
--Footer
    -Copyright
    -Links
    -Address
    -Contact
*/

// Main Component
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=large" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const stylecard = {
    backgroundColor: "lightpink",
}
const RestaurantCard = (props) => {
    console.log(props);
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img 
            className="res-logo"
            alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/auczcmkdvvxzt2mswvcc"/>
        <h3>{props.resname}</h3>
        <h4>{props.resrating}</h4>
        <h4>{props.resdeltime}</h4>
        <h4>Cost for 2: Rs. 200</h4>
        </div>
    );
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search Bar
            </div>
            <div className="res-container">
                <RestaurantCard resname="Icecream Cravings" resrating="4.5" resdeltime="38 minutes"/>
                <RestaurantCard resname="KFC" resrating="4.1" resdeltime="40 minutes"/>
                <RestaurantCard resname="Domino's Pizza" resrating="3.9" resdeltime="30 minutes"/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    );
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>  
            <Body/>   
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>); //renders the component

