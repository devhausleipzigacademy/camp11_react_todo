import ExampleHooks from "../../ExampleHooks";
import TodoItem from "./TodoItem";

function TodoList() {
  //fetch all Todos from db json server
  // loop through all todos and render TodoItem component

  return (
    <div className="bg-emerald-100 rounded-md py-6 px-4 shadow-sm">
      <h1 className="text-neutral-700 font-bold text-4xl">Todo List:</h1>
      <hr className="my-4 border-white" />
      <ul className="flex flex-col gap-2">No Todos yet</ul>
    </div>
  );
}

export default TodoList;
