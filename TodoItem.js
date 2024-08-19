// src/components/TodoItem.js
import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/actions';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.content}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default connect(null, { toggleTodo, deleteTodo })(TodoItem);
