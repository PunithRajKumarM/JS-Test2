function comparePromises(p1, p2) {
  const racePromises = [p1, p2].map((p, index) =>
    p.then((value) => ({ index, value }))
  );

  return Promise.race(racePromises)
    .then((settled) => {
      console.log(racePromises);
      console.log(settled);
      return settled.index === 1;
    })
    .catch((err) => err);
}

let promise1 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 1"), 1000);
});

let promise2 = new Promise((resolve) => {
  setTimeout(() => resolve("Promise 2"), 500);
});

comparePromises(promise1, promise2).then((res) => console.log(res));
