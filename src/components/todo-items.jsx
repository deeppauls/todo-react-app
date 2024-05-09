import TodoItem from "./todo-item";

function TodoItems({ todoItems }) {
  return (
    <>
      <div className="items-container">
        {todoItems.map((item) => (
            <TodoItem todoName={item.todoName} tododate={item.tododate}></TodoItem>
        ))}
      </div>
    </>
  );
}

export default TodoItems;
