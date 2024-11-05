import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>  
            <Body/>   

        </div>
    );
};
const appRouter = createBrowserRouter([
    //takes a list of parsing
    {
        path: "/",
        element: <AppLayout/>, 
    },
    {
        path: "/about",
        element: <About/>,
    },
    {
        path: "/contact",
        element: <Contact/>,
    }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>); //renders the component

