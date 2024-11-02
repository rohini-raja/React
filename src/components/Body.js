import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState } from "react";
const Body = () => {
    const [listofRestaurants,setListofRestaurants] = useState([
        {
            "info": {
              "id": "125369",
              "name": "LunchBox - Meals and Thalis",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/16/7166536a-01d5-4119-a1b7-35bc39e363b0_125369.jpg",
              "costForTwo": "₹200 for two",
              "cuisines": [
                "Biryani",
                "North Indian",
                "Punjabi",
                "Healthy Food",
                "Desserts",
                "Beverages"
              ],
              "avgRating": 4.4,
              "sla": {
                "deliveryTime": 30,
              },
          },
        }
    ]);
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={(res)=>{
                    const filteredlist = listofRestaurants.filter((res) => res.info.avgRating > 4.3);
                    setListofRestaurants(filteredlist);
                }
                }
                    >Top-Rated Restaurants</button>
            </div>
            <div className="res-container">
              {
                listofRestaurants.map((restaurant)=>(
                <RestaurantCard key={restaurant.info.id} resData = {restaurant}/>)
                )
              } 
            </div>
        </div>
    );
};

export default Body;
