import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
//import {resList} from "../utils/mockdata";
import Shimmer from "./Shimmer";
const Body = () => {
   // console.log(resList);
    const [listOfRestaurants,setListofRestaurants] = useState([]);
    console.log("listofres:", listOfRestaurants);
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
        };
    if(listOfRestaurants.length == 0){
        return <Shimmer/>
            // console.log("Loading...");
            // return <h1>Loading...</h1>;
    
    }
    return (
        <div className="body"> 
            <div className="filter">
                <button className="filter-btn" onClick={(res)=>{
                    const filteredlist = listOfRestaurants.filter((res) => res.info.avgRating > 4.2);
                    setListofRestaurants(filteredlist);
                }
                }>Top-Rated Restaurants</button>
            </div>
            <div className="res-container">
              {
                listOfRestaurants.map((restaurant)=>(
                <RestaurantCard key={restaurant.info.id} resData = {restaurant}/>)
                )
              } ;
            </div>
        </div>
    );
};

export default Body;
