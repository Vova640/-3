function invokeAfterDelay(callback, delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(callback());
    }, delay);
  });
}

invokeAfterDelay(() => Math.floor(Math.random() * 11), 1000)
  .then(result => console.log("Random:", result));
