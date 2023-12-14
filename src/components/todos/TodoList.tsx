import { useEffect, useState } from "react";
import TodoItem, { type TodoItem as TodoItemType } from "./TodoItem";
import axios from "axios";
import TodoForm from "./TodoForm";

function TodoList() {
  //fetch all Todos from db json server
  // loop through all todos and render TodoItem component
  const [todos, setTodos] = useState<TodoItemType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get<TodoItemType[]>("http://localhost:3000/todos")
      .then((res) => {
        setTodos(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);

        setError(err.message);
      });
  }, []);

  return (
    <div className="bg-emerald-100 rounded-md py-6 px-4 shadow-sm">
      <h1 className="text-neutral-700 font-bold text-4xl">Todo List:</h1>
      <hr className="my-4 border-white" />
      <ul className="flex flex-col gap-2 mb-6">
        {isLoading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <TodoForm />
    </div>
  );
}

export default TodoList;
