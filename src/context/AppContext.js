import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  // 🔹 Role state
  const [role, setRole] = useState("viewer");

  // 🔹 Dark mode
  const [darkMode, setDarkMode] = useState(false);

  // 🔹 Transactions state
  const [transactions, setTransactions] = useState([]);

  // 🔹 Filter state
  const [filter, setFilter] = useState("all");

  // 🔹 Edit state
  const [editIndex, setEditIndex] = useState(null);

  // 🔹 Load from local storage (ONLY ONCE)
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("transactions"));
    if (data) setTransactions(data);
  }, []);

  useEffect(() => {
  localStorage.setItem("darkMode", JSON.stringify(darkMode));
}, [darkMode]);
  
  useEffect(() => {
  const savedMode = localStorage.getItem("darkMode");
  if (savedMode) {
    setDarkMode(JSON.parse(savedMode));
  }
}, []);

  useEffect(() => {
  try {
    const data = JSON.parse(localStorage.getItem("transactions"));
    if (data && Array.isArray(data)) {
      setTransactions(data);
    }
  } catch (error) {
    console.log("Error loading transactions", error);
  }
}, []);

  return (
    <AppContext.Provider value={{
      role,
      setRole,
      transactions,
      setTransactions,
      filter,
      setFilter,
      editIndex,
      setEditIndex,
      darkMode,       // ✅ ADD THIS
      setDarkMode
    }}>
      {children}
    </AppContext.Provider>
  );
};