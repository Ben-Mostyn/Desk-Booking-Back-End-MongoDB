const { MongoClient } = require("mongodb");

let dbConnection;

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect("mongodb://localhost:27017/deskBook")
      // MongoClient.connect("localhost:3000/deskBook")

      //Inside this .then, we get access to the client object, where we use .db() to interface with the db
      .then((client) => {
        dbConnection = client.db();
        return cb();
      })
      .catch((err) => {
        console.log(err);
        return cb(err);
      });
  },
  getDb: () => dbConnection,
};
