import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
//import {resList} from "../utils/mockdata";
import Shimmer from "./Shimmer";
const Body = () => {
   // console.log(resList);
   // whenever the state variable updates, react will re-render the component - reconciliation cycle.
    const [listOfRestaurants,setListofRestaurants] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);
    const [searchText,setSearchText] = useState("");
    console.log("listofres:", listOfRestaurants);
    console.log("searchText:", searchText);
    console.log("Rendering now");
    useEffect(
        () => {
            console.log("UseEffect called");
            fetchData();
        },[]);
        const fetchData = async () => {
           const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9709162&lng=80.2467688&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
          // https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
           //const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0832022&lng=80.27552519999999&collection=138501&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
            const json = await data.json(); //convert the data to json
            console.log("json :", json);
            setListofRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        };

// Conditional rendering
// Ternary operator
    return listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className="body"> 
            <div className="filter">
                <button className="filter-btn" onClick={(res)=>{
                    const filteredlist = listOfRestaurants.filter((res) => res.info.avgRating > 4.5);
                    setListofRestaurants(filteredlist);
                }
                }>Top-Rated Restaurants</button>
            </div>
            <div className="search">
                <input type="text" placeholder="Search for restaurants" value={searchText} 
                onChange={(e)=> {
                    setSearchText(e.target.value);
                }}/>
                <button 
                onClick=
                    {()=>{
                    //Write logic to search for restaurants and update ui
                    //search text - get this variable to a local state variable
                        const filteredRes = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurants(filteredRes);
                }}>Search</button>
            </div>
            <div className="res-container">
              {
                filteredRestaurants.map((restaurant)=>(
                <RestaurantCard key={restaurant.info.id} resData = {restaurant}/>)
                )
              } ;
            </div>
        </div>
    );
};

export default Body;
