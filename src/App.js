
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
function App() {
  return (
    <div className="App">
          <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
       
          </Route>
          <Route path="/dashboard">
       
          </Route>
        </Switch>
     
    </Router>
    </div>
  );
}

export default App;
