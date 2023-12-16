import { useEffect, useReducer } from "react";
import { createContext } from "react";
import { TodoReducer } from "./../reducer/TodoReducer";

const initialState = {
  todos: [],
};

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TodoReducer, initialState, () => {
    const storedTodos = localStorage.getItem("todos");
    return {
      ...initialState,
      todos: storedTodos ? JSON.parse(storedTodos) : initialState.todos,
    };
  });

  console.log(state);

  const data = {
    todos: state.todos,
    dispatch,
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }, [state.todos]);

  return <TodoContext.Provider value={data}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
