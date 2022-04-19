import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: todos, isPending, error} = useFetch('http://localhost:9000/blogs')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { todos && <TodoList todos={todos} title="Your Tasks!"/> }
    </div>
  );
}
 
export default Home;