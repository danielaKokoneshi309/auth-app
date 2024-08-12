
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './componetes/Login';
import Register from './componetes/Register';
import React from 'react';

function App() {
  return (
    <Routes>
    <>
      
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        
    
      
        </>
  </Routes>
  );
}

export default App;
