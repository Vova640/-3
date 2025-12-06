function logCall(callback) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Time:", new Date().toLocaleTimeString());
      resolve(callback());
    }, 1000);
  });
}

function test() {
  console.log("Callback executed");
}

logCall(test)
  .then(() => logCall(test))
  .then(() => logCall(test))
  .then(() => logCall(test));
