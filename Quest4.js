const missingBasePair = (str) => {
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  return str.split("").map((e) => [e, pairs[e]]);
};

const res = missingBasePair("GCG");
console.log(res);
