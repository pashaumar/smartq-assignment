import React, { useState } from "react";
import Search from "./search/Search";
import classes from "./index.module.css";
import Sidebar from "./sidebar/Sidebar";
import Food from "./foodItems/Food";
import Footer from "./footer/Footer";
import { data } from "./constant";

function Details() {
  const [activeRestaurant, setActiveRestaurant] = useState("EATORAMA");
  const [details, setDetails] = useState(data.menuDetails);
  const [selectedFoodItems, setSelectedFoodItems] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const getActiveRestaurant = (restaurant) => {
    setActiveRestaurant(restaurant);
  };

  const handleFoodSelect = (selectedFoodItem, reset) => {
    if (reset) {
      setSelectedFoodItems([]);
      return;
    }
    setSelectedFoodItems((prevSelectedItems) => {
      const isFoodItemPresent = prevSelectedItems.find(
        (item) => item.foodid === selectedFoodItem.foodid
      );
      if (isFoodItemPresent) {
        return prevSelectedItems.map((item) => {
          if (item.foodid === isFoodItemPresent.foodid)
            return isFoodItemPresent;
          return item;
        });
      }
      return [...prevSelectedItems, selectedFoodItem];
    });
  };

  const getSearchKey = (key) => {
    setSearchKey(key);
  };

  return (
    <div className={classes.container}>
      <Search getSearchKey={getSearchKey} searchKey={searchKey} />
      <div className={classes.details}>
        <Sidebar
          getActiveRestaurant={getActiveRestaurant}
          handleFoodSelect={handleFoodSelect}
          getSearchKey={getSearchKey}
          activeRestaurant={activeRestaurant}
        />
        <Food
          details={details[activeRestaurant]}
          handleFoodSelect={handleFoodSelect}
          searchKey={searchKey}
        />
      </div>
      <Footer
        selectedFoodItems={selectedFoodItems}
        setDetails={setDetails}
        activeRestaurant={activeRestaurant}
        handleFoodSelect={handleFoodSelect}
      />
    </div>
  );
}

export default Details;
