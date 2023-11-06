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
