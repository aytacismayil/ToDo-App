import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./contant";

let todos =[];

export const reducer = (state = todos, action) => {
  switch (action.type) {
    case ADD_TODO:
      let newTodos = [...state];
      newTodos.push(action.payload);
      return newTodos;
    case DELETE_TODO:
      let deleteTodos = [...state];
      deleteTodos = deleteTodos.filter(todo =>todo.id !== action.payload);
      return deleteTodos;
    case UPDATE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            item: action.payload,
          };
        }
        return todo;
      });
    default:
  }
  return state;
};
