import React, { useState, useEffect } from "react";
import Search from "./search/Search";
import classes from "./index.module.css";
import Sidebar from "./sidebar/Sidebar";
import Food from "./foodItems/Food";
import Footer from "./footer/Footer";
import { data } from "./constant";

function Details() {
  const [activeRestaurant, setActiveRestaurant] = useState("EATORAMA");
  const [details, setDetails] = useState(data.menuDetails);
  const [selectedFood, setSelectedFood] = useState(null);
  const [searchKey, setSearchKey] = useState("");

  const getActiveRestaurant = (restaurant) => {
    setActiveRestaurant(restaurant);
  };

  const handleFoodSelect = (selectedFood) => {
    setSelectedFood(selectedFood);
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
        />
        <Food
          details={details[activeRestaurant]}
          handleFoodSelect={handleFoodSelect}
          selectedFood={selectedFood}
          searchKey={searchKey}
        />
      </div>
      <Footer
        selectedFood={selectedFood}
        setDetails={setDetails}
        activeRestaurant={activeRestaurant}
        handleFoodSelect={handleFoodSelect}
      />
    </div>
  );
}

export default Details;
