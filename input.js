let connection;


const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  if (key === "\u0003") {
    process.exit();
  }


  if (key === 'w') {
    console.log("Move: up");
    connection.write("Move: up");
  } else if (key === 'a') {
    console.log("Move: left");
    connection.write("Move: left");
  } else if (key === 's') {
    console.log("Move: down");
    connection.write("Move: down");
  } else if (key === 'd') {
    console.log("Move: right");
    connection.write("Move: right");
  }

  if (key === "1") {
    console.log("Say: What's Up Everyone?");
    connection.write("Say: What's Up Everyone?");
  } else if (key === "2") {
    console.log("Say: Guess who?!");
    connection.write("Say: Guess who?!");
  }
};



module.exports = setupInput;