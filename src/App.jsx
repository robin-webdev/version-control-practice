import React, { useEffect } from "react";
import "./App.css";
import { data } from "./Context";
import { useState } from "react";
import Header from "../components/Header";
import Main from "../Components/Main";

const App = () => {
  const tasks = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks[0]));
  }, [tasks[0]]);

  return (
    <>
      <div className="container">
        <Header />
        <data.Provider value={tasks}>
          <Main />
        </data.Provider>

      </div>
    </>
  );
};

export default App;