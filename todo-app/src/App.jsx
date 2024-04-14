import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import TodoItem from "./Components/TodoItem";
import TodoItems from "./Components/TodoItems";
import "./App.css";
function App() {
  const todoItems = [
    { name: "Learn React", dueDate: "4/8/2024" },
    { name: "Make Projects", dueDate: "4/10/2024" },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;
