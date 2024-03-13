// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.

function binToString(str) {
  let strArr = str.split(" ");
  let res = "";
  strArr.forEach((e) => {
    res += String.fromCharCode(parseInt(e, 2));
  });
  return res;
}
let res = binToString(
  "1101000 1100101 1101100 1101100 1101111 100000 1110111 1101111 1110010 1101100 1100100"
);

console.log(res);
