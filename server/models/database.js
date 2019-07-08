
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://arun:7SIZLLS9Fsli9FcD@cluster0-xobaw.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("Admin").collection("admin");
  // perform actions on the collection object
  client.close();
});
