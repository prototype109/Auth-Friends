import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={LoginForm} />
      <PrivateRoute path='/friends' 
                    component={FriendsList} />
    </div>
  );
}

export default App;
