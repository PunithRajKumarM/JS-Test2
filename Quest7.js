//barChart
const barChartData = {
  labels: ["A", "B", "C"],
  datasets: [
    {
      label: "Bar chart",
      data: [10, 15, 20],
      borderWidth: 1,
      backgroundColor: [
        "rgba(255,99,132,0.2)",
        "rgba(75,192,192,0.2)",
        "rgba(54,162,235,0.2)",
      ],
      borderColor: [
        "rgba(255,99,132,1)",
        "rgba(75,192,192,1)",
        "rgba(54,162,235,1)",
      ],
    },
  ],
};

const barChart = new Chart(
  document.getElementById("barChart").getContext("2d"),
  {
    type: "bar",
    data: barChartData,
  }
);

//lineChart
const lineChartData = {
  labels: ["A", "B", "C", "D"],
  datasets: [
    {
      label: "Line chart",
      data: [10, 12, 17, 19],
      borderColor: "orange",
      fill: false,
    },
  ],
};

const lineChart = new Chart(
  document.getElementById("lineChart").getContext("2d"),
  {
    type: "line",
    data: lineChartData,
  }
);

//Histogram
const histogramChartData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "Histogram",
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1,
      backgroundColor: [
        "rgba(255,99,132,0.2)",
        "rgba(54,162,235,0.2)",
        "rgba(255,206,86,0.2)",
        "rgba(75,192,192,0.2)",
        "rgba(153,102,255,0.2)",
        "rgba(255,159,64,0.2)",
      ],
      borderColor: [
        "rgba(255,99,132,1)",
        "rgba(54,162,235,1)",
        "rgba(255,206,86,1)",
        "rgba(75,192,192,1)",
        "rgba(153,102,255,1)",
        "rgba(255,159,64,1)",
      ],
      barPercentage: 1,
      categoryPercentage: 1,
    },
  ],
};

const histogramChart = new Chart(
  document.getElementById("histogram").getContext("2d"),
  {
    type: "bar",
    data: histogramChartData,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  }
);

//treemap
const treemapData = {
  datasets: [
    {
      label: "Treemap",
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1,
    },
  ],
};

new Chart(document.getElementById("treemap"), {
  type: "treemap",
  data: treemapData,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

//heatmap

const heatmapData = [
  [1, 20, 30],
  [20, 1, 60],
  [30, 60, 1],
];

let heatmap = [
  {
    z: heatmapData,

    type: "heatmap",
    borderColor: "black",
  },
];

// let heatmap = document.getElementById("heatmap");

Plotly.newPlot("heatmap", heatmap);

//localStorage
localStorage.setItem("barChartData", JSON.stringify(barChartData));
localStorage.setItem("lineChartData", JSON.stringify(lineChartData));
localStorage.setItem("histogramChartData", JSON.stringify(histogramChartData));
localStorage.setItem("treemapData", JSON.stringify(treemapData));
localStorage.setItem("heatmapData", JSON.stringify(heatmapData));

const storedBarChartData = JSON.parse(localStorage.getItem("barChartData")) || {
  labels: [],
  datasets: [],
};

const storedLineChartData = JSON.parse(
  localStorage.getItem("lineChartData")
) || {
  labels: [],
  datasets: [],
};
const storedHistogramChartData = JSON.parse(
  localStorage.getItem("histogramChartData")
) || {
  labels: [],
  datasets: [],
};
const storedTreemapData = JSON.parse(localStorage.getItem("treemapData")) || {
  datasets: [],
};
const storedHeatmapData = JSON.parse(localStorage.getItem("heatmapData")) || [];
