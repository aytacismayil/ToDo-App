import React, { useState } from "react";
import { v1 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

const TodoInput = () => {
  const [name, setName] = useState();
  const dispatch = useDispatch();
  console.log("TodoInput Component");
  return (
    <React.Fragment>
      <div className="row m-2  pt-2 pb-2">
        <input
          type="text"
          className="col form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="col-md-2 btn btn-primary"
          onClick={() => {
            dispatch(
              addTodo({
                id: uuid(),
                name: name,
              })
            );
            setName("");
          }}
        >
          Add
        </button>
      </div>
    </React.Fragment>
  );
};

export default TodoInput;
