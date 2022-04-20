import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState(''); //bu method bize dinamik bi sekilde yazilani kontrol etmeyi sagliyor (cok iyi)
    const [body, setBody] = useState('');
    const [auth, setAuth] = useState('User2');
    const [isPending, setIsPending] = useState(false)
    const lastPages = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const todo = {title, body, auth};
        
        setIsPending(true);

        fetch('http://localhost:9000/todos/', {
            method: 'POST',
            headers: { 'Content-Type':'application/json' },
            body: JSON.stringify(todo)
        }).then(() => {
            setIsPending(false);
            //lastPages.go(-1); //going last page (-1)
            lastPages.push('/') //redirect to '/'
        });
    }

    return (
        <div className="create"> 
            <h2>Create a New Todo</h2>
            <form on onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
            
                <label>Body:</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>

                <label>Author:</label>
                <select value={auth} onChange={(e) => setAuth(e.target.value)}>
                    <option value="User1">User1</option>
                    <option value="User2">User2</option>
                </select>

                { !isPending && <button>Create</button> }
                { isPending && <button>Creating...</button> }
            </form>
        </div>
    );
}
 
export default Create;