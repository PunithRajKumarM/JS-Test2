// Given two promises, create a function to determine whether the second promise is faster than the first. If it is, return true. Otherwise, return false.
let p1 = new Promise((res, rej) => {
  if (1 < 10) {
    setTimeout(() => {
      res("P1 resolved");
    }, 3000);
  }
});
let p2 = new Promise((res, rej) => {
  if (1 < 10) {
    setTimeout(() => {
      res("P2 resolved");
    }, 1000);
  }
});

function anyPromise(p1, p2) {
  return Promise.any([p1, p2]).then((data) => {
    return Promise.resolve(p2).then((value) => {
      return value === data;
    });
  });
}

anyPromise(p1, p2).then((res) => console.log(res));
