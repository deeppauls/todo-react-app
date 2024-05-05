import AppName from "./components/appName";
import TodoRow1 from "./components/todo-row1";
import TodoRow2 from "./components/todo-row2";
import TodoRow3 from "./components/todo-row3";
import "./App.css";
function App() {
  return (
    <div className="todo-container">
      <AppName />
      <TodoRow1 />
      <div className="items-container">
        <TodoRow2 />
        <TodoRow3 />
      </div>
    </div>
  );
}

export default App;
