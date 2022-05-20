import React from "react";
import classes from "./Food.module.css";

function FoodChip(props) {
  const {
    detail: { foodname, outofstock },
    handleFoodSelect,
  } = props;
  return (
    <div>
      <div
        style={{
          backgroundColor: outofstock ? "#d63031" : "#78e08f",
        }}
        className={classes.foodChip}
        onClick={(event) => {
          const { backgroundColor } = event.target.style;
          const outofstock = backgroundColor === "rgb(120, 224, 143)";
          event.target.style.backgroundColor = outofstock
            ? "rgb(214, 48, 49)"
            : "rgb(120, 224, 143)";
          event.target.style.border = "1px dashed black";
          handleFoodSelect({ ...props.detail, outofstock });
        }}
      >
        {foodname}
      </div>
    </div>
  );
}

export default FoodChip;
