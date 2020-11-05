import React, { createContext, useState } from "react";

export const GetUserApiFunc = createContext({});
export const TodoContextFunc = createContext({});

export const Provider = ({ children }) => {
  const [list, setList] = useState([]);

  return (
    <GetUserApiFunc.Provider value={{ list, setList }}>
      {children}
    </GetUserApiFunc.Provider>
  );
};

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState();
  const [term, setTerm] = useState();

  return (
    <TodoContextFunc.Provider
      value={{ todos, setTodos, search, setSearch, term, setTerm }}
    >
      {children}
    </TodoContextFunc.Provider>
  );
};
