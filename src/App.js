import React, { useState, useEffect } from "react";
import TodoContext from "./Todo/todoContext";
import TodoList from "./Todo/TodoList";
import AddTodo from "./Todo/AddTodo";
import Loader from "../src/Loader";

function App() {
  //статична інфа
  // const todos = [
  //   { id: 1, completed: false, title: "buy food" },
  //   { id: 2, completed: true, title: "get a ride" },
  //   { id: 3, completed: false, title: "help home" },
  // ];
  // const TodoListLazy = React.lazy(() => import("./Todo/TodoList"));

  const [todosState, setTodosState] = useState([]);
  const [loaderState, setLoaderState] = useState(true);

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

  function createNewTodo(title) {
    const updatedTodos = [
      ...todosState,
      { id: todosState.length + 1, title, completed: false },
    ];

    setTodosState(updatedTodos);
  }

  function getTodos() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((res) => res.json())
      .then((data) => {
        setTodosState(data);
        setLoaderState(false);
      });
  }

  useEffect(() => getTodos(), []);

  return (
    <TodoContext.Provider value={{ todoItemRemove }}>
      <div className="container">
        <h1>Todo list</h1>
        <AddTodo addNewTodo={createNewTodo} />
        {/* <React.Suspense fallback={<Loader />}>
          <TodoListLazy todos={todosState} todoItemToggle={todoItemToggle} />
        </React.Suspense> */}
        {loaderState && <Loader />}
        {todosState.length ? (
          <TodoList todos={todosState} todoItemToggle={todoItemToggle} />
        ) : (
          loaderState || <p>Todo list is empty</p>
        )}
      </div>
    </TodoContext.Provider>
  );
}

export default App;
