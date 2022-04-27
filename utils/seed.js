const connection = require('../config/connection');
const { User, Thought} = require('../models');
const USERS = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  await User.deleteMany({});
  await Thought.deleteMany({});

  await User.insertMany(USERS)

  console.info('Seeding complete!');
  process.exit(0);
});