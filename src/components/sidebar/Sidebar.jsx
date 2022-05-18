import React, { useState, useEffect } from "react";
import classes from "./Sidebar.module.css";
import { data } from "../constant";
import SidebarChip from "./SidebarChip";

function Sidebar(props) {
  const { getActiveRestaurant, handleFoodSelect, getSearchKey } = props;
  const [active, setActive] = useState("EATORAMA");

  useEffect(() => {
    getActiveRestaurant(active);
  }, [active]);

  const handleChangeRestaurant = (name) => {
    setActive(name);
  };

  return (
    <div className={classes.sidebarContainer}>
      {Object.keys(data.menuDetails).map((name) => (
        <SidebarChip
          key={name.split(" ").join("-")}
          name={name}
          active={active}
          handleChangeRestaurant={handleChangeRestaurant}
          handleFoodSelect={handleFoodSelect}
          getSearchKey={getSearchKey}
        />
      ))}
    </div>
  );
}

export default Sidebar;
