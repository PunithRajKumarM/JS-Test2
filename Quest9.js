// Write a function that removes all falsy values (false, null, 0, “”, undefined, and NaN) from an array.

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
