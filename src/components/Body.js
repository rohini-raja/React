import RestaurantCard from "./RestaurantCard";
import {resList} from "../utils/mockdata";
import { useState } from "react";
const Body = () => {
    console.log(resList);
    const [listOfRestaurants,setListofRestaurants] = useState(resList);
    console.log("listofres:", listOfRestaurants);
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
                listOfRestaurants.map((restaurant)=> {
                    if(!restaurant.info) {
                        console.log("restaurant.info is undefined");
                        return null;
                    }
                    return (
                        <RestaurantCard key={restaurant.info.id} resData = {restaurant}/>
                    );
                })

                // listOfRestaurants.map((restaurant)=>(
                // <RestaurantCard key={restaurant.info.id} resData = {restaurant}/>)
                // )
              } 
            </div>
        </div>
    );
};

export default Body;
