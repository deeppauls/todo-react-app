import AppName from "./components/appName";
import TodoRow1 from "./components/todo-row1";
import TodoItems from "./components/todo-items";
import "./App.css";
function App() {
  let todoItems = [
    {
      todoName: "Buy Milk",
      tododate: "4/10/2023",
    },
    {
      todoName: "Go to college",
      tododate: "4/10/2023",
    },
    {
      todoName: "Learn React",
      tododate: "4/10/2023",
    }
  ];
  return (
    <div className="todo-container">
      <AppName />
      <TodoRow1 />
      <TodoItems todoItems={todoItems}></TodoItems>
    </div>
  );
}

export default App;
