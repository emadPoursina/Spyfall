const {uriMongo: dbUrl} = require('./db');
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);
  console.log('Connected to mongodb');
}