import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const TodoDetails = () => {
    const { id } = useParams();
    const { data: todo, isPending, error} = useFetch('http://localhost:9000/blogs/' + id);

    return (
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{error}</div>}
            { todo && (
                <article>
                    <h2>{ todo.title }</h2>
                    <p>Written by {todo.author}</p>
                    <div>{todo.body}</div>
                </article>
            )}
        </div>
    );
}

export default TodoDetails;