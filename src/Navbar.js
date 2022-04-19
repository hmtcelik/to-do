import { Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/"><h1>To-Do</h1></Link>
      <div className="links">
        <Link to="/">Home</Link> {/* if we use Link, the links dont want Get request*/}
        <Link to="/create" style={{
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>New Task</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;