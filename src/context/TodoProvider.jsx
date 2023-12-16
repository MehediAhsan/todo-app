import { useReducer } from "react";
import { createContext } from "react";
import { TodoReducer } from './../reducer/TodoReducer';

const initialState = {
    todos: []
}

export const TodoContext = createContext();

const TodoProvider = ({children}) => {
    const [state, dispatch] = useReducer(TodoReducer, initialState);

    console.log(state)

    const data = {
        todos: state.todos,
        dispatch
    }

    return (
        <TodoContext.Provider value={data}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;