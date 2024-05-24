function TodoItem({ todoName, tododate, handleDeleteButton }) {
  return (
    <div class="container">
      <div class="row sp-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{tododate}</div>
        <div class="col-2">
          <button
            type="button"
            class="btn btn-danger sp-button"
            onClick={() => handleDeleteButton(todoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
