import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState(''); //bu method bize dinamik bi sekilde yazilani kontrol etmeyi sagliyor (cok iyi)
    const [body, setBody] = useState('');
    const [auth, setAuth] = useState('User2');

    return (
        <div className="create"> 
            <h2>Create a New Todo</h2>
            <form>
                <label>Title:</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
            
                <label>Body:</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>

                <label>Author:</label>
                <select value={auth} onChange={(e) => setAuth(e.target.value)}>
                    <option value="User1">User1</option>
                    <option value="User2">User2</option>
                </select>

                <button>Create</button>
            </form>
            <h3>{title}</h3>
            <p>{body}</p>
            <i>{ auth }</i>
        </div>
        
    );
}
 
export default Create;