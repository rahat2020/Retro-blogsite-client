
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
import Contact from './components/Contact/Contact';
import AboutUs from './components/AboutUs/AboutUs';
import BlogDetails from './components/BlogDetails/BlogDetails';
// import Navbar from './components/Home/Navbar/Navbar';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({isSignedIn: false});
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          {/* <Navbar/> */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/contact">
              <Contact/>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/BlogDetails/:_id">
              <BlogDetails />
            </Route>
            <Route path="/about">
              <AboutUs/>
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
