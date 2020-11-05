import React, { useContext } from "react";
import { TodoContextFunc } from "../store/Provider";

const TodoListContext = () => {
  const { todos, setTodos, search, setSearch, term, setTerm } = useContext(
    TodoContextFunc
  );

  const addTodo = (term) => setTodos((prevState) => [...prevState, term]);

  return (
    <div>
      <div>
        <form className="App">
          <h5>search</h5>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </form>
      </div>
      <form
        className="App"
        onSubmit={(event) => {
          event.preventDefault();
          addTodo(term);
        }}
      >
        <h5>Add</h5>
        <input value={term} onChange={(event) => setTerm(event.target.value)} />
        <button>Add</button>
      </form>
      <div>
        Map
        {todos.map((t, index) => (
          <tb>
            <li>{t}</li>
          </tb>
        ))}
      </div>
      <div>
        Filter
        {todos
          .filter((todo) => todo.includes(search))
          .map((t, index) => (
            <tb>
              <li>{t}</li>
            </tb>
          ))}
      </div>
      <div>
        <li>Find</li>
        {todos.find((todo) => {
          return todo == search;
        })}
      </div>
    </div>
  );
};

export default TodoListContext;
