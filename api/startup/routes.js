const express = require('express');

const register = require('../routes/register');
const login = require('../routes/login');


module.exports = function(app) {
    app.use(express.json());
 
    app.use('/api/register', register);
    app.use('/api/login',login);

    
  
  }