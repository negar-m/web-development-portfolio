document.addEventListener("DOMContentLoaded", () => {
  async function api() {
    const api_url = "https://api.exir.io/v2/constants";
    const response = await fetch(api_url);
    const data = await response.json();
    currencyAll(data);
    tableTrade(data);
  }

  let myTable = document.querySelector(".myTable");
  let chartInstance = null; 

  function currencyAll(data) {
    let coinss = data.coins;
    for (const [key, value] of Object.entries(coinss).slice(0, 12)) {
      let div = document.createElement("div");
      let name = document.createElement("span");
      let br = document.createElement("br");
      let marketCap = document.createElement("p");
      let img = document.createElement("img");
      div.className = "details-div";
      name.className = "fs";
      name.innerHTML = `${value.fullname}`;
      if (value.market_cap) {
        const len = Math.floor(value.market_cap).toString().length;
        const multi = len - 3;
        marketCap.innerHTML = `${Math.floor(
          value.market_cap / Math.pow(10, multi)
        )}`;
      }
      img.setAttribute("src", `${value.logo}`);
      div.append(name, br, marketCap, img);
      details.appendChild(div);
    }
  }

  function tableTrade(data) {
    let coinss = data.coins;
    let pairs = data.pairs;

    for (const [k, v] of Object.entries(pairs).slice(0, 12)) {
      let logo1;
      let logo2;

      for (const [key, value] of Object.entries(coinss)) {
        if (`${value.code}` === `${v.pair_base}`) {
          logo1 = `${value.logo}`;
        }
        if (`${value.code}` === `${v.pair_2}`) {
          logo2 = `${value.logo}`;
        }
      }

      let tr = document.createElement("tr");
      tr.addEventListener("click", function (e) {
        e.preventDefault();
        currencyChart(v.name);
      });

      let tdName1 = document.createElement("td");
      let tdName2 = document.createElement("td");
      let tdLogo1 = document.createElement("td");
      let logo1Img = document.createElement("img");
      let tdLogo2 = document.createElement("td");
      let logo2Img = document.createElement("img");
      let minPrice = document.createElement("td");
      let Maxprice = document.createElement("td");

      tdName1.innerHTML = `${v.pair_base}`;
      tdName2.innerHTML = `${v.pair_2}`;
      logo1Img.setAttribute("src", logo1);
      logo1Img.className = "tdImg";
      tdLogo1.append(logo1Img);
      logo2Img.setAttribute("src", logo2);
      logo2Img.className = "tdImg";
      tdLogo2.append(logo2Img);
      minPrice.innerHTML = `${v.min_price}`;
      Maxprice.innerHTML = `${v.max_price}`;

      tr.append(tdName1, tdName2, tdLogo1, tdLogo2, minPrice, Maxprice);
      myTable.appendChild(tr);
    }
  }

  api();

  function currencyChart(name) {
    let fromDate = document.getElementById("fromDate");
    let toDate = document.getElementById("toDate");
    let fromEpoch;
    let toEpoch;
  
    fromDate.addEventListener("change", function (e) {
      fromEpoch = moment(e.target.value).unix();
      if (!toEpoch) {
        toEpoch = moment(toDate.value || "2021-04-28").unix();
      }
      apiChart(name, fromEpoch, toEpoch);
    });
  
    toDate.addEventListener("change", function (e) {
      toEpoch = moment(e.target.value).unix();
      if (!fromEpoch) {
        fromEpoch = moment(fromDate.value || "2021-04-16").unix();
      }
      apiChart(name, fromEpoch, toEpoch);
    });
  
    
    let inputFromDate = moment("2021-04-16").unix();
    let inputToDate = moment("2021-04-28").unix();
  
    apiChart(name, inputFromDate, inputToDate);
  }
  

  function convertSecondsToDate(seconds) {
    const date = new Date(seconds * 1000);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  async function apiChart(name, fromDate, toDate) {
    const api_url =
      "https://api.exir.io/v2/chart?symbol=" +
      name +
      "&resolution=1D&from=" +
      fromDate +
      "&to=" +
      toDate;
    const response = await fetch(api_url);
    const data = await response.json();
    let xValues = [];
    let yValues = [];
    let xDate = [];
    let selectBox = document.getElementById("timeFrame"); // 🔑 تغییر به timeFrame

    if (!Array.isArray(data)) {
      console.error("API returned invalid data", data);
      return;
    }

    data.splice(3, 3);

    function drawChart() {
      let rangeUser = Number(selectBox.value);
      xValues = [];
      yValues = [];
      xDate = [];
    
      for (const [key, val] of Object.entries(data)) {
        const today = moment(val.time);
        xDate.push(today.format("YYYY-MM-DD"));
      }
    
      let dayToSec = 24 * 60 * 60;
      let range = rangeUser * dayToSec;
      let result = [];
    
      for (let start = fromDate; start < toDate; start = start + range) {
        let end = start + range;
        let span = { start, end };
        span.arr = [];
    
        for (let i = 0; i < data.length; i++) {
          let m = moment(data[i].time).unix();
          if (start < m && m < end) {
            span.arr.push(data[i]);
          }
        }
        result.push(span);
      }
    
      for (let i = 0; i < result.length; i++) {
        let span = result[i];
        let sum = 0;
        for (let j = 0; j < span.arr.length; j++) {
          sum += span.arr[j].volume;
        }
        let mid = sum / span.arr.length;
        xValues.push(convertSecondsToDate(result[i].start));
        yValues.push(mid);
      }
    
      
      if (chartInstance) {
        chartInstance.destroy();
      }
    
    
      chartInstance = new Chart(document.getElementById("myChart"), {
        type: "line",
        data: {
          labels: xValues,
          datasets: [
            {
              fill: false,
              tension: 0.1,
              borderColor: "rgba(0,0,255,0.8)",
              backgroundColor: "rgba(0,0,255,0.3)",
              data: yValues,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false },
          },
          scales: {
            x: {
              type: "category",
              ticks: {
                autoSkip: false,   
                maxRotation: 90,  
                minRotation: 45,   
              },
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
    

    drawChart();
    selectBox.addEventListener("change", drawChart);
  }
});
