// function logError(message) {
//   console.log("Error  : ", message);
// }

// function logSuccess(message) {
//   console.log("Log  : ", message);
// }

// function logWarning(message) {
//   console.log("Warning  : ", message);
// }

// logWarning("This is message");
// logSuccess("This is message");
// logError("This is message");

function createLogger(type) {
  function loggingFunction(message) {
    if (type == "e") console.log("Error", message);
    if (type == "s") console.log("Logger", message);
    if (type == "w") console.log("Warning", message);
  }

  return loggingFunction;
}

const error = createLogger("e");
const logger = createLogger("s");
const warning = createLogger("w");

error("Logging.."); // type e
error("Logging..");

logger("Simmple"); // type s
warning("Warning mesage"); // type w
