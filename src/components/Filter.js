import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Filter = () => {

  const { filter, setFilter } = useContext(AppContext);

  return (
    <div className="filter-container">
      <select
        className="filter-select"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">All Transactions</option>
        <option value="food">Food</option>
        <option value="shopping">Shopping</option>
      </select>
    </div>
  );
};

export default Filter;