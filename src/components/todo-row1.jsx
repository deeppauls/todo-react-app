import { useState } from "react";

function TodoRow1({ onNewItem }) {
  let [toDoName, setToDoName] = useState();
  let [toDoDate, setToDoDate] = useState();
  function handleNameChange(event) {
    let name = event.target.value;
    setToDoName(name);
  }
  function handleDateChange(event) {
    let date = event.target.value;
    setToDoDate(date);
  }

  function handleAddButton() {
    onNewItem(toDoName, toDoDate);
    setToDoName("");
    setToDoDate("");
  }
  return (
    <div class="container">
      <div class="row sp-row">
        <div class="col-6">
          <input
            type="text"
            placeholder="Enter Todo here"
            value={toDoName}
            onChange={handleNameChange}
          />
        </div>
        <div class="col-4">
          <input type="date" value={toDoDate} onChange={handleDateChange} />
        </div>
        <div class="col-2">
          <button
            type="button"
            class="btn btn-success sp-button"
            onClick={handleAddButton}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoRow1;
