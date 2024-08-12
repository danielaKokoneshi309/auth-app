
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './componetes/Login';
import Register from './componetes/Register';
import React from 'react';

function App() {
  return (
    <Router>
    <div>
      
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        
    
      
    </div>
  </Router>
  );
}

export default App;
