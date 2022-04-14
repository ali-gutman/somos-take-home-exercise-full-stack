const dotenv = require("dotenv");
dotenv.config();

const config = {
  DB: {
    MONGO_DATABASE: process.env.MONGO_DATABASE || "somosdb",
    MONGO_USER: process.env.MONGO_USER || "somosUser",
    MONGO_PASSWORD: process.env.MONGO_PASSWORD || "xyz123",
    MONGO_HOST: process.env.MONGO_HOST || "localhost",
    MONGO_PORT: process.env.MONGO_PORT || "27017",
  },
  PORT: process.env.PORT || 4000,
};

module.exports = config;
