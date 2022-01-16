import React, { useState } from "react";
import { deleteTodo, updateTodo } from "../redux/actions";
import { useDispatch } from "react-redux";

const TodoItem = (props) => {
  const { todo } = props;
  const dispatch = useDispatch();
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(todo.name);
  console.log("TodoItem Component");
  return (
    <div className="row m-2">
      <div className="col-md-12 d-flex justify-content-between align-items-center border border-primary rounded">
        <div className="">#{todo.id.length > 1 ? todo.id[2] : todo.id}</div>
        <div className="">
          {editable ? (
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          ) : (
            <h4 className="mb-0">{todo.name}</h4>
          )}
        </div>
        <div>
          <button
            className=" btn btn-primary m-2"
            onClick={() => {
              dispatch(
                updateTodo({
                  ...todo,
                  name: "name",
                })
              );
              if (editable) {
                setName(todo.name);
              }
              setEditable(!editable);
            }}
          >
            {editable ? "Update" : "Edit"}
          </button>
          <button
            className=" btn btn-danger m-2"
            onClick={() => dispatch(deleteTodo(todo.id))}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
