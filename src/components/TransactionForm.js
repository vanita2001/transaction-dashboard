import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const TransactionForm = () => {

  const {
    role,
    transactions,
    setTransactions,
    editIndex,
    setEditIndex
  } = useContext(AppContext);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  // 🔹 Load data when editing
  useEffect(() => {
    if (editIndex !== null && transactions[editIndex]) {
      const t = transactions[editIndex];
      setTitle(t.title);
      setAmount(t.amount);
      setCategory(t.category);
    }
  }, [editIndex, transactions]);

  // 🔴 Restrict viewer
  if (role !== "admin") return <p>Switch to Admin to add data</p>;

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submitted"); // 🔥 debug

    // ✅ validation
    if (!title || !amount || !category) {
      alert("Fill all fields");
      return;
    }

    const newTransaction = {
  title: title.trim(),
  amount: Number(amount),   // 🔥 MUST convert to number
  category: category.toLowerCase().trim()
};

    if (editIndex !== null) {
      // 🔥 UPDATE
      const updatedList = [...transactions];
      updatedList[editIndex] = newTransaction;
      setTransactions(updatedList);
    } else {
      // ➕ ADD
      setTransactions([...transactions, newTransaction]);
    }

    // 🔥 RESET EVERYTHING
    setTitle("");
    setAmount("");
    setCategory("");
    setEditIndex(null);
  };

  return (
    <form onSubmit={handleSubmit} className="form">

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        <option value="food">Food</option>
        <option value="shopping">Shopping</option>
      </select>

      <button type="submit">
        {editIndex !== null ? "Update" : "Add"}
      </button>

    </form>
  );
};

export default TransactionForm;