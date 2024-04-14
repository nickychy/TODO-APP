function TodoItem({ todoName, todoDate }) {
  return (
    <div className="container ">
      <div className="row custom-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" class="btn btn-danger custom-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
