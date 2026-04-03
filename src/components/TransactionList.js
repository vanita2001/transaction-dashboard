import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const TransactionList = () => {
const { transactions, setTransactions, filter, role, setEditIndex } = useContext(AppContext);

const handleDelete = (index) => {
  const updated = transactions.filter((_, i) => i !== index);
  setTransactions(updated);
};

  // 🔹 Filter logic (safe)
  const filteredData =
    filter === "all"
      ? transactions
      : transactions.filter(
          (t) =>
            t.category?.toLowerCase().trim() ===
            filter.toLowerCase().trim()
        );

  // 🔹 Empty state
  if (filteredData.length === 0) {
    return <p>No transactions found</p>;
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {filteredData.map((t) => {

          // ✅ safer way to get correct index
          const realIndex = transactions.indexOf(t);

          return (
            <tr key={realIndex}>
              <td>{t.title}</td>
              <td>₹{t.amount}</td>
              <td style={{ textTransform: "capitalize" }}>
                {t.category}
              </td>

              <td>
  {role === "admin" ? (
    <div className="action-buttons">
  <button onClick={() => setEditIndex(realIndex)}>Edit</button>
  <button onClick={() => handleDelete(realIndex)}>Delete</button>
</div>
  ) : (
    "-"
  )}
</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionList;