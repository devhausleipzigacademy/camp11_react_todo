import { useEffect, useState } from "react";
import TodoItem, { type TodoItem as TodoItemType } from "./TodoItem";
import axios from "axios";
import TodoForm from "./TodoForm";
import { useQuery } from "../../hooks/useQuery";

function TodoList() {
  //fetch all Todos from db json server
  // loop through all todos and render TodoItem component
  const { data, error, isError, isLoading } = useQuery<TodoItemType[]>(
    "http://localhost:3000/todos"
  );
  console.log({ data, error, isError, isLoading });

  const [todos, setTodos] = useState<TodoItemType[]>([]);

  useEffect(() => {
    if (data) {
      setTodos(data);
    }
  }, [data]);

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
      <TodoForm
        onUpdateTodo={(todo) => {
          setTodos([...todos, todo]);
        }}
      />
    </div>
  );
}

export default TodoList;
