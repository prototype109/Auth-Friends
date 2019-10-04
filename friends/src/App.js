import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <Route path='/' component={LoginForm} />
    </div>
  );
}

export default App;
