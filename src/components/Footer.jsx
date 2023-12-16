import { useContext } from "react";
import { TodoContext } from './../context/TodoProvider';
import { toast } from 'react-hot-toast';

const Footer = () => {
  const { dispatch, todos } = useContext(TodoContext);

  const clearAll = () => {
    dispatch({ type: "DELETE_ALL" });
    toast.success("All Todo deleted Successfully", {
      style: {
        color: "#ff0000",
      },
      iconTheme: {
        primary: "#ff0000"
      },
    });
  };

  return (
    <section className="flex justify-between">
      <p className="font-semibold text-sky-800">
        <span>{todos.length}</span> items left
      </p>
      {todos.length > 0 && (
        <>
          <div className="text-red-600 font-semibold">
            <button className="" onClick={clearAll}>
              Clear All Items
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default Footer;
