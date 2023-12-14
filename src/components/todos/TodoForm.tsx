//two input fields. One for title and one for an endDate
//console log the values of the input fields when the form is submitted

import { useState } from "react";
import Input from "../form/Input";
import { TodoItem } from "./TodoItem";
import axios from "axios";

type Props = {
  onUpdateTodo: (todo: TodoItem) => void;
};

function TodoForm({ onUpdateTodo }: Props) {
  const [form, setForm] = useState<Omit<TodoItem, "id">>({
    title: "",
    date: "",
    imgUrl: "",
    completed: false,
  });

  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const res = await axios.post<TodoItem>("http://localhost:3000/todos", form);
    onUpdateTodo(res.data);
  }

  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <Input
        label="Todo Title:"
        type="text"
        value={form.title}
        onHandleChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <Input
        label="End date:"
        type="date"
        value={form.date}
        onHandleChange={(e) => setForm({ ...form, date: e.target.value })}
      />
      <Input
        label="Image Url:"
        type="text"
        value={form.imgUrl}
        onHandleChange={(e) => setForm({ ...form, imgUrl: e.target.value })}
      />
      <button type="submit">submit</button>
    </form>
  );
}

export default TodoForm;
