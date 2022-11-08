// function setWeekDays() {
//   fetch("data.json")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     });
// }
// setWeekDays();
let finalData;

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    finalData = data;
  })
  .catch((err) => {
    console.log(err);
  });

console.log(finalData);
