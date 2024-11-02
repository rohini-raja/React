import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search Bar
            </div>
            <div className="res-container">
              {
                resList.map((restaurant)=>(
                <RestaurantCard key={restaurant.info.id} resData = {restaurant}/>)
                )
              } 
            </div>
        </div>
    );
};

export default Body;
