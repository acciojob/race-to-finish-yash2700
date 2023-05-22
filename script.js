function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min) * 1000; // Convert to milliseconds
}

const promises = [];
for (let i = 0; i < 5; i++) {
  const promise = new Promise((resolve) => {
    const time = getRandomTime(1, 5);
    setTimeout(() => {
      resolve(`Promise ${i + 1} resolved after ${time / 1000} seconds`);
    }, time);
  });
  promises.push(promise);
}

Promise.any(promises)
  .then((result) => {
    const output = document.getElementById("output");
    output.innerText = result;
  })
  .catch((error) => {
    console.log(error);
  });
