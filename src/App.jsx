import AppName from "./components/appName";
import TodoRow1 from "./components/todo-row1";
import TodoItems from "./components/todo-items";
import "./App.css";
import { useState } from "react";
function App() {
  // let todoItems = [
  //   {
  //     todoName: "Buy Milk",
  //     tododate: "4/10/2023",
  //   },
  //   {
  //     todoName: "Go to college",
  //     tododate: "4/10/2023",
  //   },
  //   {
  //     todoName: "Learn React",
  //     tododate: "4/10/2023",
  //   }
  // ];
  let [todoItems, setToDoItems] = useState([]);

  function onNewItem(itemName, ItemDuedate) {
    // alert(`Item added ${itemName} and ${ItemDuedate}`);
    let newToDoItem = [
      ...todoItems,
      { todoName: itemName, tododate: ItemDuedate },
    ];
    setToDoItems(newToDoItem);
  }

  function handleDeleteButton(toDoName) {
    let newToDoItems = todoItems.filter((item) => item.todoName !== toDoName); //filter returns a new array of the true value of condition (it will return the elements that satisfies the condition)
    setToDoItems(newToDoItems);
  }

  return (
    <div className="todo-container">
      <AppName />
      <TodoRow1 onNewItem={onNewItem}></TodoRow1>
      {todoItems.length === 0 && (
        <h3 className="initial-text">Start Adding Your Todos!</h3>
      )}
      <TodoItems
        todoItems={todoItems}
        handleDeleteButton={handleDeleteButton}
      ></TodoItems>
    </div>
  );
}

export default App;
