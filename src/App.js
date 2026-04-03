import React, { useContext, useEffect } from "react";
import Navbar from "./components/Navbar";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Insights from "./components/Insights";
import Filter from "./components/Filter";
import { AppContext } from "./context/AppContext";
import "./styles.css";

function App() {

 const { darkMode } = useContext(AppContext);

  // ✅ APPLY DARK CLASS TO BODY
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);
  
  return (
    <div className="container">
      <Navbar />
      <Filter />
      <TransactionForm />
      <TransactionList />
      <Insights />
    </div>
  );
}

export default App;