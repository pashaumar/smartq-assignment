import React from "react";
import classes from "./Food.module.css";

function FoodChip(props) {
  const {
    detail: { foodname, outofstock, foodid },
    handleFoodSelect,
    selectedFood,
  } = props;
  return (
    <div>
      <div
        style={{
          backgroundColor: outofstock ? "#d63031" : "#78e08f",
          border:
            selectedFood && selectedFood.foodid === foodid
              ? "1px dashed black"
              : "none",
        }}
        className={classes.foodChip}
        onClick={() => {
          if (!selectedFood) {
            handleFoodSelect(props.detail);
          } else {
            handleFoodSelect(null);
          }
        }}
      >
        {foodname}
      </div>
    </div>
  );
}

export default FoodChip;
