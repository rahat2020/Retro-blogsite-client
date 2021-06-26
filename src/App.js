
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import { createContext, useState } from 'react';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
