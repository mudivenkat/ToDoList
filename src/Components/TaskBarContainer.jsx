import React from "react";
import Todo from "./Todo";
function TaskBarContainer({ todos, deleTodos }) {
  return (
    <div className="TaskContainer">
      {todos.map((todo, index) => {
        return <Todo todo={todo} index={index} deleTodos={deleTodos} />;
      })}
    </div>
  );
}

export default TaskBarContainer;
