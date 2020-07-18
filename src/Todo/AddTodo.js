import React, { useState } from "react";
import PropTypes from "prop-types";

//кастомний хук для інпута
function useInputValue(defaultVal = "") {
  //Реакт хук зміни стейта
  const [inputState, setInputState] = useState("");

  return {
    input: {
      value: inputState,
      onChange: (event) => setInputState(event.target.value),
    },
    clearInput: () => setInputState(""),
  };
}

//компонент форми додавання нової задачі
function AddTodo({ addNewTodo }) {
  //деструктуризація кастомного хука
  const { input, clearInput } = useInputValue("");

  function handleSubmit(event) {
    event.preventDefault();

    if (input.value.trim()) {
      addNewTodo(input.value); //підйом значення з інпута в App, для зміни стейта
      clearInput(); //звернення до виклика стейт хука
    }
  }

  return (
    <form className="form-add-new" onSubmit={handleSubmit}>
      <input
        type="text"
        style={{ flexBasis: "80%", height: "1.5rem" }}
        {...input}
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
//валідація пропсів
AddTodo.propTypes = {
  addNewTodo: PropTypes.func.isRequired,
};

export default AddTodo;
