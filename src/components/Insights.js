import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Insights = () => {

  const { transactions, filter } = useContext(AppContext);

  const filteredData =
    filter === "all"
      ? transactions
      : transactions.filter(
          (t) =>
            t.category.toLowerCase().trim() ===
            filter.toLowerCase().trim()
        );

  const total = filteredData.reduce(
    (sum, t) => sum + Number(t.amount),
    0
  );

  // Highest spending category
  const categoryMap = {};
  transactions.forEach(t => {
    categoryMap[t.category] =
      (categoryMap[t.category] || 0) + t.amount;
  });

  const highestCategory =
    Object.keys(categoryMap).length > 0
      ? Object.keys(categoryMap).reduce((a, b) =>
          categoryMap[a] > categoryMap[b] ? a : b
        )
      : "N/A";

  return (
    <div className="insights">

  <div className="insight-item">
    <p>Total Spending</p>
    <h3>₹ {total}</h3>
  </div>

  <div className="insight-item">
    <p>Highest Category</p>
    <h3>{highestCategory}</h3>
  </div>

  <div className="insight-item">
    <p>Transactions</p>
    <h3>{filteredData.length}</h3>
  </div>

</div>
  );
};

export default Insights;