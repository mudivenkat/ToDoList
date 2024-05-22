import { useState } from "react";
import "./App.css";
import InputContainer from "./Components/InputContainer";
import TaskBarContainer from "./Components/TaskBarContainer";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState([]);
  const [showTaskBarContainer, setShowTaskBarContainer] = useState(false);
  function writeTodoInput(e) {
    setInputVal(e.target.value);
  }
  function addTodos() {
    if (inputVal !== "") {
      setTodos((prevTodos) => [...prevTodos, inputVal]);
      setShowTaskBarContainer(true);
      setInputVal("");
    }
  }
  function deleTodos(index) {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodos, i) => {
        return i != index;
      })
    );
  }
  return (
    <main>
      <h1>To Do List</h1>
      <InputContainer
        writeTodoInput={writeTodoInput}
        inputVal={inputVal}
        addTodos={addTodos}
      />
      {showTaskBarContainer && (
        <TaskBarContainer todos={todos} deleTodos={deleTodos} />
      )}
    </main>
  );
}

export default App;
