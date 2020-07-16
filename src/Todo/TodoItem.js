import React, { useContext } from "react";
import PropTypes from "prop-types";
import TodoContext from "../todoContext";
// console.log(TodoContext);
// console.log(React);

function TodoItem({ todo, index, todoItemToggle }) {
  // console.log(useContext(TodoContext));
  const { todoItemRemove } = useContext(TodoContext);

  const styles = {
    li: {
      backgroundColor: "#eee",
    },
  };

  return (
    <li className="todo-item" style={todo.completed ? styles.li : null}>
      <span>
        <input
          type="checkbox"
          checked={todo.completed}
          className="todo-checkbox"
          onChange={() => {
            todoItemToggle(todo.id);
          }}
        />
        <strong>{index + 1}</strong>
        &nbsp;
        <span className={todo.completed ? "todo-done" : null}>
          {todo.title}
        </span>
      </span>
      <button
        type="button"
        className="btn-remove"
        // onClick={() => todoItemRemove(todo.id)}//визов функції при клікові через колбек
        onClick={todoItemRemove.bind(null, todo.id)} //привязка нульового контекста з необхідним аргументом до onClick!!
      >
        &times;
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default TodoItem;
