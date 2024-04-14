function TodoItems() {
  let todoName = "Buy Milk";
  let todoDate = "05/11/2024";
  return (
    <div class="container ">
      <div class="row custom-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger custom-btn">
            Delete
          </button>
        </div>
      </div>
      <div class="row custom-row">
        <div class="col-6">Go to College</div>
        <div class="col-4">05/11/2024</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger custom-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItems;
