import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <h1>Friends App</h1>
        <h2>
            <Link to="/login"> Login </Link> 
        </h2>
        <h2>
            <Link to="/protected"> Friends </Link>
        </h2>
        </div>
        <Switch>
          <PrivateRoute path="/friends" component={FriendsList} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
