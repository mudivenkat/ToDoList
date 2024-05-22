import React from "react";

function InputContainer({ inputVal, writeTodoInput, addTodos }) {
  return (
    <div className="inputContainer">
      <input type="text" value={inputVal} onChange={(e) => writeTodoInput(e)} />
      <button onClick={() => addTodos()}>+</button>
    </div>
  );
}

export default InputContainer;
