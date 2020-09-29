import React from 'react';
import './Todo.css';
import {List, ListItem, ListItemText,Button } from '@material-ui/core';
import db from './firebase';
function Todo(props) {
    return (
        <List className = "todo-list">
          <ListItem>
             <ListItemText primary = {props.todo} secondary ="Deadline : 🙂 " />
          </ListItem>
        </List>
    )
}

export default Todo