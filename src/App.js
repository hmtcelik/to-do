import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Create from './Create';
import TodoDetails from './TodoDetails';
import Four0Four from './404';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/"> {/* exact is very important  */}
            <Home />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route exact path="/todo/:id">
            <TodoDetails />
          </Route>
          <Route path="*">
            <Four0Four />
          </Route> 
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
