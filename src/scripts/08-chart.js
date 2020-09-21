/*-------------------------------
------- chart
-------------------------------*/

const addToChart = (ProductObject) => {
  if (localStorage.getItem('chart') == null) {
    const chartArray = [];
    localStorage.setItem('chart', JSON.stringify(chartArray));
  }

  const chart = JSON.parse(localStorage.getItem('chart'));
  let productExist = false;
  for (const item of chart) {
    if (
      ProductObject.category == item.category &&
      ProductObject.id == item.id
    ) {
      productExist = true;
    }
  }

  if (!productExist) {
    chart.push(ProductObject);
    localStorage.setItem('chart', JSON.stringify(chart));
  }
};
