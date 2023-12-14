import React from "react";
import { useState, useEffect } from "react";

function ExampleHooks() {
  const [inputVal, setInputVal] = useState({
    firstName: "",
    lastName: "",
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        return res.json();
      })
      .then((todos) => {
        console.log(todos);
      });
  }, []);

  function onSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(inputVal); // here object send to db
  }

  return (
    <div>
      <h1 className="text-4xl">Hello Hooks</h1>
      <p className="text-3xl">{inputVal.firstName}</p>
      <p className="text-3xl">{inputVal.lastName}</p>
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <input
          type="text"
          value={inputVal.firstName}
          onChange={(e) =>
            setInputVal({
              ...inputVal,
              firstName: e.target.value,
            })
          }
        />
        <input
          type="text"
          value={inputVal.lastName}
          onChange={(e) =>
            setInputVal({
              ...inputVal,
              lastName: e.target.value,
            })
          }
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ExampleHooks;
