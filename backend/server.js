const app = require("./app");
const http = require("http");

const server = http.createServer(app);
require("./database");

server.listen(app.get("port"), () => {
  console.log(`Express App Listening on Port ${app.get("port")}`);
});
