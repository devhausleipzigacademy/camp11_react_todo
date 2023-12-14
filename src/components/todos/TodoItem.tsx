import { cn } from "../../utils/utils";

export type TodoItem = {
  id: number;
  imgUrl: string;
  title: string;
  completed: boolean;
  date: string;
};

type Props = {
  todo: TodoItem;
};

function TodoItem({ todo }: Props) {
  return (
    <li className="bg-white rounded-md shadow-sm py-2 px-6 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <img
          src={todo.imgUrl}
          alt={todo.title}
          className="rounded-full w-[80px] aspect-square object-cover object-center"
        />
        <h3 className="text-2xl font-semibold">{todo.title}</h3>
      </div>
      <div className="flex items-center gap-6">
        <p
          className={cn(
            "text-white  rounded-full shadow-sm py-2 w-[200px] text-center",
            todo.completed ? "bg-green-500" : "bg-red-500"
          )}
        >
          {todo.completed ? "completed" : "not completed"}
        </p>
        <p>{todo.date}</p>
      </div>
    </li>
  );
}

export default TodoItem;
