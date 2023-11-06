const fetchData = () => {
  let res = fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => console.log("Fetched data", data.slice(0, 10)))
    .catch((err) => console.error("Error ", err));
};

let intervalID = setInterval(fetchData, 10000);

setTimeout(() => {
  clearInterval(intervalID);
}, 50000);
