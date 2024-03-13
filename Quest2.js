// Create a function that is a Hashtag Generator by using the following rules:

// The output must start with a hashtag (#).
// Each word in the output must have its first letter capitalized.
// If the final result, a single string, is longer than 140 characters, the function should return false.
// If either the input (str) or the result is an empty string, the function should return false.

function generateHashTag(str) {
  let hashTag = "#";
  str = str
    .toLowerCase()
    .split(" ")
    .filter((e) => {
      return (hashTag += e.charAt(0).toUpperCase() + e.slice(1));
    });
  return hashTag.length < 140 ? hashTag : false;
}

let str = "helLo wOrld";
let res = generateHashTag(str);
console.log(res);
