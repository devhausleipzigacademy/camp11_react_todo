import React from "react";

function TodoList() {
  const todos = [
    {
      id: 1,
      imgUrl: "https://source.unsplash.com/random/250x250",
      title: "Todo 1",
      completed: false,
      date: "02.02.2021",
    },
    {
      id: 2,
      imgUrl: "https://source.unsplash.com/random/250x250",
      title: "Todo 2",
      completed: true,
      date: "02.12.2023",
    },
    {
      id: 3,
      imgUrl: "https://source.unsplash.com/random/250x250",
      title: "Todo 3",
      completed: false,
      date: "01.05.2000",
    },
    {
      id: 4,
      imgUrl: "https://source.unsplash.com/random/250x250",
      title: "Todo 4",
      completed: true,
      date: "12.11.2022",
    },
  ];

  return (
    <div className="bg-emerald-100 rounded-md py-6 px-4 shadow-sm">
      <h1 className="text-neutral-700 font-bold text-4xl">Todo List:</h1>
      <hr className="my-4 border-white" />
      <ul></ul>
    </div>
  );
}

export default TodoList;
