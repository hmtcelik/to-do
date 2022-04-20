import { useState } from "react";
import TodoList from "./TodoList";

const Home = () => {
  const [ todos, setTodos] = useState([
    {title: 'My First Task', body:'Yeah! This is my first task', id:1}
  ]);

  const handleDelete = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }

  return (
    <div className="home">
      { todos && <TodoList todos={todos} title="Your Tasks!" deleteFunc={handleDelete}/> }
    </div>
  );
}
 
export default Home;