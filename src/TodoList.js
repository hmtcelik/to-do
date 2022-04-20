import { Link } from "react-router-dom";

    const TodoList = ({todos, title}) => {
    const isAnyTodo = todos.length; // if any todo, then this variable will be true (1,2,3...etc). Otherwise it will be false (0)

    return ( 
        <div className="blog-list">
            <h1>{title}</h1>
            {todos.map(todo => (
            <div className="blog-preview" key={todo.id} >
                <Link to={`/todo/${todo.id}`}>
                    <h2>{ todo.title }</h2>
                    <p>Written by { todo.auth }</p>
                </Link>
            </div>
        ))}
            {!isAnyTodo && <p className="empty-message">Wow! It's such an empty</p>}
        </div>
    );
}
 
export default TodoList;