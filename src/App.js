import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
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
