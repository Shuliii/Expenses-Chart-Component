const chartContainer = document.querySelector(".chart-container");

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    let max = Math.max(...data.map((el) => el.amount));
    let newData = data.map((el) => {
      console.log(el);
      if (el.amount === max) {
        height = 150;
        return `<div class="chart">
                <div class="chart-amount hidden">${el.amount}</div>
                <div class="block-high blue" style="height: ${height}px"></div>
                <p>${el.day}</p>
            </div>`;
      } else {
        height = (el.amount / max) * 150;
        return `<div class="chart">
            <div class="chart-amount hidden">${el.amount}</div>
                <div class="block" style="height: ${height}px"></div>
                <p>${el.day}</p>
            </div>`;
      }
    });
    console.log(newData);
    const insertHTML = newData.join("");
    chartContainer.innerHTML = insertHTML;
  })
  .catch((err) => {
    console.log(err);
  });
