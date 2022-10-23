const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const CrudRoutes = require("./Routes/Routes");

const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//Im telling app to use the crudRoutes imported at the top as the API calls
//For cleaner code I have placed them inside a different file
app.use("/desk", CrudRoutes);

//Connection to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("listening on port");
    });
  })
  .catch((err) => {
    console.log(err);
  });
