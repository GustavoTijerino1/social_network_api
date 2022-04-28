const { connect, connection } = require('mongoose');

// Creates a db called potato
const connectionString =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/potatoDB';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
