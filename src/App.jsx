import Footer from "./components/Footer";
import Form from "./components/Form";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="bg-gradient-to-r from-slate-400 to-slate-300 h-screen p-10">
      <div className="shadow shadow-gray-200 md:w-1/2 mx-auto p-5 flex flex-col gap-10">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-[0.4rem] text-center uppercase text-yellow-700">Todo Application</h1>
        <Form></Form>
        <Todos></Todos>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
