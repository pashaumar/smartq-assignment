import React from "react";
import classes from "./Search.module.css";

function Search(props) {
  const { getSearchKey, searchKey } = props;
  return (
    <div className={classes.header}>
      <input
        type="search"
        className={classes.searchInput}
        placeholder="Search..."
        onChange={(e) => {
          const { value } = e.target;
          getSearchKey(value);
        }}
        value={searchKey}
      />
    </div>
  );
}

export default Search;
