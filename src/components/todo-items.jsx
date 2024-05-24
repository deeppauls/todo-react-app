import TodoItem from "./todo-item";

function TodoItems({ todoItems, handleDeleteButton }) {
  return (
    <>
      <div className="items-container">
        {todoItems.map((item) => (
          <TodoItem
            todoName={item.todoName}
            tododate={item.tododate}
            handleDeleteButton={handleDeleteButton}
          ></TodoItem>
        ))}
      </div>
    </>
  );
}

export default TodoItems;
