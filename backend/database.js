const mongoose = require("mongoose");
const config = require("./config");

const MONGODB_URI = `mongodb://${config.DB.MONGO_USER}:${config.DB.MONGO_PASSWORD}@${config.DB.MONGO_HOST}:${config.DB.MONGO_PORT}/${config.DB.MONGO_DATABASE}`;

mongoose
  .connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((db) => console.log("Datadase is connected"))
  .catch((err) => console.log(err));
