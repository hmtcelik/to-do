import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const TodoDetails = () => {
    const { id } = useParams();
    const { data: todo, isPending, error} = useFetch('http://localhost:9000/blogs/' + id);
    const redirect = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:9000/blogs/' + todo.id, {
            method: 'DELETE'
        }).then(() => {
            redirect.push('/');
        })
    }

    return (
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{error}</div>}
            { todo && (
                <article>
                    <h2>{ todo.title }</h2>
                    <p>Written by {todo.author}</p>
                    <div>{todo.body}</div>
                    <button className="create button" onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default TodoDetails;