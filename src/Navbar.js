import { Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/to-do"><h1>To-Do</h1></Link> {/* if we use Link, the links dont want Get request*/}
      <div className="links">
       <a href="https://github.com/hmtcelik/to-do">FORK ME!</a>
      </div>
    </nav>
  );
}
 
export default Navbar;