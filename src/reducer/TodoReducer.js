export const TodoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "CHECK_TODO":
      return {
        ...state,
        todos: state.todos?.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isChecked: !todo.isChecked,
            };
          }
          return todo;
        }),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "DELETE_ALL":
      return {
        ...state,
        todos: [],
      };
    default:
      return state;
  }
};
