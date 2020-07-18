import React, { useState } from "react";
import TodoContext from "./todoContext";
import TodoList from "./Todo/TodoList";
import AddTodo from "./Todo/AddTodo";

// console.log(TodoContext);

function App() {
  const todos = [
    { id: 1, completed: false, title: "buy food" },
    { id: 2, completed: true, title: "get a ride" },
    { id: 3, completed: false, title: "help home" },
  ];

  const [todosState, setTodosState] = useState(todos);

  // console.log(React.useState(1));
  // console.log(todosState);

  function todoItemToggle(id) {
    console.log("todo id", id);
    let changedTodos = todosState.map((el) => {
      if (el.id === id) {
        el.completed = !el.completed;
      }
      return el;
    });

    setTodosState(changedTodos);
  }

  function todoItemRemove(id) {
    let updatedTodos = todosState.filter((el) => {
      return el.id !== id;
    });

    setTodosState(updatedTodos);
  }

  function addNewTodo(title) {
    const updatedTodos = [
      ...todosState,
      { id: todosState.length + 1, title, completed: false },
    ];

    setTodosState(updatedTodos);
  }

  return (
    <TodoContext.Provider value={{ todoItemRemove }}>
      <div className="container">
        <h1>Todo list</h1>
        <AddTodo addNewTodo={addNewTodo} />
        <TodoList todos={todosState} todoItemToggle={todoItemToggle} />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
