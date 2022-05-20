import React from "react";
import classes from "./Food.module.css";
import FoodChip from "./FoodChip";

function Food(props) {
  const { details, handleFoodSelect, selectedFoodItems, searchKey } = props;
  const searchedFood =
    details &&
    details.filter((detail) => {
      if (detail.foodname.toLowerCase().includes(searchKey.toLowerCase())) {
        return true;
      }
      return false;
    });
  return (
    <div className={classes.foodContainer}>
      {searchedFood.length > 0 ? (
        searchedFood.map((detail) => (
          <FoodChip
            detail={detail}
            key={detail.foodid}
            handleFoodSelect={handleFoodSelect}
            selectedFoodItems={selectedFoodItems}
          />
        ))
      ) : (
        <div className={classes.noFood}>No Food Found</div>
      )}
    </div>
  );
}

export default Food;
