import "./App.css";
import Api from "./component/Api";
import Counter from "./component/Counter";
import Random from "./component/Random";
import TodoListContext from "./component/TodoListContext";

function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <TodoListContext />
      <h1>API</h1>
      <Api />
      <h1>Couter</h1>
      <Counter />
      <h1>Random</h1>
      <Random />
    </div>
  );
}

export default App;
