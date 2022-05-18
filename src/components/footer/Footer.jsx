import React from "react";
import classes from "./Footer.module.css";

function Footer(props) {
  const { selectedFood, setDetails, activeRestaurant, handleFoodSelect } =
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
      <button disabled={selectedFood} onClick={() => handleAvailability(true)}>
        All Unavailable
      </button>
      <button disabled={selectedFood} onClick={() => handleAvailability(false)}>
        All Available
      </button>
      <button
        disabled={!selectedFood}
        onClick={() => {
          setDetails((prevDetails) => {
            const itemAvailability = prevDetails[activeRestaurant].map(
              (detail) => {
                if (detail.foodid === selectedFood.foodid) {
                  return {
                    ...detail,
                    outofstock: !detail.outofstock,
                  };
                }
                return detail;
              }
            );
            return {
              ...prevDetails,
              [`${activeRestaurant}`]: itemAvailability,
            };
          });
          handleFoodSelect(null);
        }}
      >
        Apply
      </button>
    </div>
  );
}

export default Footer;
