import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const styles = {
  ul: {
    margin: 0,
    padding: 0,
  },
};

function TodoList(props) {
  return props.todos.length ? (
    <ul style={styles.ul}>
      {props.todos.map((item, index) => {
        return (
          <TodoItem
            todo={item}
            key={item.id}
            index={index + 1}
            todoItemToggle={props.todoItemToggle}
          />
        );
      })}
    </ul>
  ) : (
    <p>Todo list is empty</p>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
