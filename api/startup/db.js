const mongoose = require('mongoose');
const config = require('config');
const debug = require('debug')('app:db'); // Import and configure debug

module.exports = async function() {
    try {
        await mongoose.connect(config.get('db'));
        debug('Connected to MongoDB...');
    } catch (err) {
        debug('Could not connect to MongoDB:', err.message);
      
    }
};