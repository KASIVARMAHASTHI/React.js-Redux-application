// src/components/TodoList.js
import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => {
  const { todos, filter } = state;
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'ALL') return true;
    if (filter === 'ACTIVE') return !todo.completed;
    if (filter === 'COMPLETED') return todo.completed;
    return true;
  });
  return { todos: filteredTodos };
};

export default connect(mapStateToProps)(TodoList);
