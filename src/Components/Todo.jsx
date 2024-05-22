import React from 'react'

function Todo({todo,index,deleTodos}) {
  return (
      <div className="todo" key={index}>
      <p>{todo}</p>
      <div className="actions">
        <input type="checkbox" />
        <button onClick={()=>deleTodos(index)}>Delete</button>
      </div>
    </div>
  )
}

export default Todo