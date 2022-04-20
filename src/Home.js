import { useState } from "react";
import TodoList from "./TodoList";

const Home = () => {
  const [ todos, setTodos ] = useState([
    {title: 'My First Task', body:'Yeah! This is my first task', id:1}
  ]);
  const [showCreate, setShowCreate] = useState(false);
  const [showCreateBtn, setShowCreateBtn] = useState(true);
  
  const handleDelete = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
    setShowCreate(false)
  }
  
  const [title, setTitle] = useState(''); //bu method bize dinamik bi sekilde yazilani kontrol etmeyi sagliyor (cok iyi)
  const [body, setBody] = useState('');
  const [id, setId ] = useState(2); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {title: title, body: body, id: id};
    const newTodos = todos.slice();
    newTodos.push(todo);
    setTodos(newTodos);

    //reseting form jobs
    setId(id+1);
    setTitle('');
    setBody('');
    setShowCreate(false);
    setShowCreateBtn(true)
  }

  const openCreate = () => {
    setShowCreate(true);
    setShowCreateBtn(false)
  }
  const cancelCreate = () => {
    setTitle('');
    setBody('');
    setShowCreate(false);
    setShowCreateBtn(true)
  }
    
  return (
    <div className="home">
      { todos && <TodoList todos={todos} title="Your Tasks!" deleteFunc={handleDelete}/> }
        { showCreate && <div className="create">
            <form onSubmit={handleSubmit}>
              <label>Title:</label><input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
              <label>Body:</label><textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
              <button type="submit">Create</button> {'\u00A0'}
              <button onClick={cancelCreate} style={{background:"gray"}}>Cancel</button>
            </form>
          </div> }
          { showCreateBtn && <div className="create-content"><button className="create-button" onClick={openCreate}><strong style={{color:'white'}}>+</strong></button></div> }
    </div>
  );
}
 
export default Home;