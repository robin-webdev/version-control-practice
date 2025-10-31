import React, { useRef, useState } from "react";
import { useContext } from "react";
import { data } from "../src/Context";

const Main = () => {
  const [tasks, setTasks] = useContext(data);

  return (
    <main>
      {tasks.length !== 0 &&
        tasks.map((task, index) => {
          return (
            <div className="task-box" key={index}>
              <div className="task-cont">
                <div className="checkbox"></div>
                <div className="task">{task.body}</div>
                <div className="nocut"></div>
              </div>
              <div className="delete-button">
                <i className="fa-solid fa-trash"></i>
              </div>
            </div>
          );
        })}
    </main>
  );
};

export default Main;
