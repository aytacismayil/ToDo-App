import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  console.log("TodoList Component");

  const todos = useSelector((state) => state);

  return (
    <div className="my-3">
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default TodoList;
