import React, { useState } from "react";
import PropTypes from "prop-types";

function AddTodo({ addNewTodo }) {
  const [inputState, setInputState] = useState("");

  function handleInputChange(event) {
    setInputState(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (inputState.trim()) {
      addNewTodo(inputState);
      setInputState("");
    }
  }

  return (
    <form className="form-add-new" onSubmit={handleSubmit}>
      <input
        type="text"
        style={{ flexBasis: "80%", height: "1.5rem" }}
        value={inputState}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className="btn-add-new"
        style={{ flexBasis: "15%" }}
      >
        add new
      </button>
    </form>
  );
}

AddTodo.propTypes = {
  addNewTodo: PropTypes.func.isRequired,
};

export default AddTodo;
