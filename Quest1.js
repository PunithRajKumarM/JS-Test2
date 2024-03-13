// Create a function that takes two dates and returns the number of days between the first and second date.


function calcDays(date1, date2) {
  const parseDate = (date) => {
    const [year, month, day] = date.split("-").map(Number);
    return new Date(year, month - 1, day) / (1000 * 60 * 60 * 24);
  };

  const totalDay = Math.abs(parseInt(parseDate(date1) - parseDate(date2)));
  return totalDay;
}

const getElement = (id) => document.getElementById(id);

const date1 = getElement("date1");
const date2 = getElement("date2");
const dateSubmit = getElement("dateSubmit");
const dateResult = getElement("dateResult");

dateSubmit.addEventListener("click", () => {
  const date1Value = date1.value;
  const date2Value = date2.value;

  if (date1Value && date2Value) {
    const res = calcDays(date1Value, date2Value);
    dateResult.classList.remove("hidden");
    dateResult.innerHTML =
      res > 1
        ? `
    <h5 class="black">Total days between ${date1Value} and ${date2Value} :</h5>
    ${res} days
    `
        : `
        <h5 class="black">Total day between ${date1Value} and ${date2Value} :</h5>
        ${res} day
        `;
    date1.value = "";
    date2.value = "";
  } else {
    alert("Select the date");
  }
});
