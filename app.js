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
  const {resData} = props;
  console.log(resData.data.cloudinaryImageId);
    return (
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img 
            className="res-logo"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ resData.data.cloudinaryImageId} 
              />
        <h3>{resData.data.name}</h3>
        <h4>{resData.data.avgRating}</h4>
        <h4>{resData.data.cuisines.join(' , ')}</h4>
        <h4>{resData.data.costForTwo/100} FOR TWO</h4>
        <h4>Delivery Time - {resData.data.maxDeliveryTime}minutes</h4>
        </div>
    );
}
const resObj = {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '121603',
      name: 'Kannur Food Point',
      uuid: '51983905-e698-4e31-b0d7-e376eca56320',
      city: '1',
      area: 'Tavarekere',
      totalRatingsString: '10000+ ratings',
      cloudinaryImageId: 'RX_THUMBNAIL/IMAGES/VENDOR/2024/9/9/b402af75-0a7e-4fa9-ae93-6a25f2ecaac9_8720.jpg',
      cuisines: ['Kerala', 'Chinese'],
      tags: [],
      costForTwo: 30000,
      costForTwoString: '₹300 FOR TWO',
      deliveryTime: 24,
      minDeliveryTime: 24,
      maxDeliveryTime: 24,
      slaString: '24 MINS',
      lastMileTravel: 3,
      slugs: {
        restaurant: 'kannur-food-point-btm',
        city: 'bangalore',
      },
      cityState: '1',
      address:
        '6/21,9TH CROSS ,1ST MAIN, VENKATESHWARA LAYOUT,SG PALYA, BENGALURU, - 560093',
      locality: 'SG Palya',
      parentId: 20974,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '50% off',
        shortDescriptionList: [
          {
            meta: '50% off on all orders',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off on all orders',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '50% OFF',
        shortDescriptionList: [
          {
            meta: '',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off on all orders',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      ribbon: [
        {
          type: 'PROMOTED',
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 3700,
            message: '',
          },
          {
            name: 'time',
            fee: 0,
            message: '',
          },
          {
            name: 'special',
            fee: 0,
            message: '',
          },
        ],
        totalFees: 3700,
        message: '',
        title: 'Delivery Charge',
        amount: '3700',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: 'cid=6274849~p=1~eid=00000187-2c1c-96f0-0062-eea200b00103',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '3 kms',
      hasSurge: false,
      sla: {
        restaurantId: '121603',
        deliveryTime: 24,
        minDeliveryTime: 24,
        maxDeliveryTime: 24,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: true,
      avgRating: '3.9',
      totalRatings: 10000,
      new: false,
    },
    subtype: 'basic',
  };
const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search Bar
            </div>
            <div className="res-container">
                <RestaurantCard resData = {resObj}/>
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

