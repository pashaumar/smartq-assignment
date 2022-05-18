import React from "react";
import classes from "./Sidebar.module.css";

function SidebarChip(props) {
  const {
    name,
    handleChangeRestaurant,
    active,
    handleFoodSelect,
    getSearchKey,
  } = props;
  return (
    <div
      className={active === name ? classes.activeChip : classes.inActiveChip}
      onClick={() => {
        handleChangeRestaurant(name);
        handleFoodSelect(null);
        getSearchKey("");
      }}
    >
      {name}
    </div>
  );
}

export default SidebarChip;
