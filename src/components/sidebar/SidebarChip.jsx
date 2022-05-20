import React from "react";
import classes from "./Sidebar.module.css";

function SidebarChip(props) {
  const {
    name,
    handleChangeRestaurant,
    active,
    handleFoodSelect,
    getSearchKey,
    activeRestaurant,
  } = props;
  return (
    <div
      className={active === name ? classes.activeChip : classes.inActiveChip}
      onClick={() => {
        if (activeRestaurant !== name) {
          handleChangeRestaurant(name);
          handleFoodSelect([], true);
          getSearchKey("");
        }
      }}
    >
      {name}
    </div>
  );
}

export default SidebarChip;
