import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form.js";
import TodoList from "./components/TodoList.js";

function App() {
 
  let today = new Date();
  const tododate = today.getMonth() + 1 + "-" + today.getDate() + "-" + today.getFullYear();
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const[filteredTodos, setFilteredTodos]=useState([]);
  
  useEffect(()=>{
    getLocalTodos();
  },[]);
  useEffect(()=>{
    filterHandler();
    saveLocalTodos();
  }, [todos, filter]);
  
  const filterHandler = ()=>{
    switch (filter){
      case 'completed':
        setFilteredTodos(todos.filter(el=> el.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(el=> el.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () =>{
      localStorage.setItem('todos',JSON.stringify(todos));
  };

  const getLocalTodos = ()=>{
    if(localStorage.getItem('todos')==null){
      localStorage.setItem('todos',JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h2>Todo List {tododate}</h2>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setFilter ={setFilter}
      />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
