import { Link } from "react-router-dom";

const TodoList = ({todos, title}) => {
    return ( 
        <div className="blog-list">
            <h1>{title}</h1>
            {todos.map(todo => (
            <div className="blog-preview" key={todo.id} >
                <Link to={`/todo/${todo.id}`}>
                    <h2>{ todo.title }</h2>
                    <p>Written by { todo.author }</p>
                </Link>
            </div>
        ))}
        </div>
    );
}
 
export default TodoList;