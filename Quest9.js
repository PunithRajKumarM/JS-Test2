function removeFalsyValue(arr) {
  return arr.filter((e) => {
    if (e) {
      return e;
    }
  });
}

let arr = [10, "Hello", 0, false, "New", NaN, "", "World"];
let res = removeFalsyValue(arr);
console.log(res);
