const chartContainer = document.querySelector(".chart-container");

// let data = [
//   {
//     day: "mon",
//     amount: 17.45,
//   },
//   {
//     day: "tue",
//     amount: 34.91,
//   },
//   {
//     day: "wed",
//     amount: 52.36,
//   },
//   {
//     day: "thu",
//     amount: 31.07,
//   },
//   {
//     day: "fri",
//     amount: 23.39,
//   },
//   {
//     day: "sat",
//     amount: 43.28,
//   },
//   {
//     day: "sun",
//     amount: 25.48,
//   },
// ];

// let finalData;
// const highestAmount = Math.max(...data.map((el) => el.amount));
let newData;
fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    newData = data;
  })
  .catch((err) => {
    console.log(err);
  });

console.log(await newData);

// const newData = data.map((el) => {
//   if (el.amount === highestAmount) {
//     height = 150;
//     return `<div class="chart">
//         <div class="chart-amount hidden">${el.amount}</div>
//         <div class="block-high blue" style="height: ${height}px"></div>
//         <p>${el.day}</p>
//     </div>`;
//   } else {
//     height = (el.amount / highestAmount) * 150;
//     return `<div class="chart">
//     <div class="chart-amount hidden">${el.amount}</div>
//         <div class="block" style="height: ${height}px"></div>
//         <p>${el.day}</p>
//     </div>`;
//   }
// });

const insertHTML = newData.join("");
chartContainer.innerHTML = insertHTML;
