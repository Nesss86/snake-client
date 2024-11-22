const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");

    const name = "ABC"; // Change this to any three-letter string
    conn.write(`Name: ${name}`);

    conn.write("Move: up");
  });

  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  return conn;
};


module.exports = connect;