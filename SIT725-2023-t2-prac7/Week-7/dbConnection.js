const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://s222357806:sharmaji222@vishnu.mmg1wjx.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

client.connect();

module.exports = client;