const config = require('./config'),
mongoose = require('mongoose');

module.exports = function() {
const db = mongoose.connect(config.db);
require('../app/models/animal.server.model');
return db;
};