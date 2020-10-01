import React from "react";
import uuid from "react-uuid";

const Form = ({ inputText, todos, setTodos, setInputText, setFilter}) => {
  //Js code
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault(); //prevent the refresh
    setTodos([...todos, { text: inputText, completed: false, id: uuid() }]);
    setInputText(""); //empty the text area
  };

  const filterHandler = (e)=>{
    setFilter(e.target.value);
  }
  return (
    <form>
      <input
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
        value={inputText}
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={filterHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
