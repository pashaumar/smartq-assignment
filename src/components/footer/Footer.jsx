import React from "react";
import classes from "./Footer.module.css";

function Footer(props) {
  const { selectedFoodItems, setDetails, activeRestaurant, handleFoodSelect } =
    props;

  const handleAvailability = (available) => {
    setDetails((prevDetails) => {
      const availability = prevDetails[activeRestaurant].map((detail) => ({
        ...detail,
        outofstock: available,
      }));
      return {
        ...prevDetails,
        [`${activeRestaurant}`]: availability,
      };
    });
  };

  return (
    <div className={classes.footerContainer}>
      <button
        disabled={selectedFoodItems.length}
        onClick={() => handleAvailability(true)}
      >
        All Unavailable
      </button>
      <button
        disabled={selectedFoodItems.length}
        onClick={() => handleAvailability(false)}
      >
        All Available
      </button>
      <button
        disabled={!selectedFoodItems.length}
        onClick={() => {
          setDetails((prevDetails) => {
            const itemAvailability = prevDetails[activeRestaurant].map(
              (detail) => {
                const isFoodItemSelected = selectedFoodItems.find(
                  (item) => item.foodid === detail.foodid
                );

                if (isFoodItemSelected) {
                  return isFoodItemSelected;
                }
                return detail;
              }
            );
            return {
              ...prevDetails,
              [`${activeRestaurant}`]: itemAvailability,
            };
          });
          handleFoodSelect([], true);
        }}
      >
        Apply
      </button>
    </div>
  );
}

export default Footer;
