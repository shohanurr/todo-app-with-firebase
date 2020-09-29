import React, { useState } from "react";
import {Button, FormControl, Input, InputLabel} from '@material-ui/core';
import Todo from './todo';
import "./App.css";

function App() {
  const [todos, setTodos] = useState(["Take dogs for a walk", "study ractjs"]);
  const [input, setInput] = useState("");

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, input]);
    setInput('');
  };
  return (
    <div className="App">
      <h1>Hello world 🚀 ! </h1>
      <form>
        <FormControl>
          <InputLabel >Write a Todo</InputLabel>
          <Input  value={input}
          onChange={(event) => setInput(event.target.value)}
          />
          
        </FormControl>
        

        <Button disabled = {!input} type= "submit" onClick = {addTodo} variant="contained" color="primary">
          Add TODO
        </Button>
      
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
