/*-------------------------------
------- chart
-------------------------------*/

const addToChart = (ProductObject, count = 1) => {
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
    if (ProductObject.count != parseInt(count)) {
      ProductObject.count = parseInt(count);
    }
    chart.push(ProductObject);
    localStorage.setItem('chart', JSON.stringify(chart));
  }

  showResultModal(true, 'added to shopping chart');
};

const removeFromChart = (index) => {
  const chart = JSON.parse(localStorage.getItem('chart'));

  chart.splice(index, 1);
  localStorage.removeItem('chart');
  localStorage.setItem('chart', JSON.stringify(chart));

  createChart();
  calculateChart();

  showResultModal(true, 'removed from shopping chart');
};

// create chart in right menu content
const createChart = () => {
  if (localStorage.getItem('chart') == null) {
    const chartArray = [];
    localStorage.setItem('chart', JSON.stringify(chartArray));
  }

  const localChart = JSON.parse(localStorage.getItem('chart'));

  const itemContainer = document.querySelector('.right-menu__content');

  itemContainer.innerHTML = '';

  localChart.forEach((item, index) => {
    const itemIndex = index;
    const itemCategory = item.category;
    const itemId = item.id;
    const itemImage = item.image;
    const itemPrice = item.price;
    const itemTitle = item.title;
    const itemCount = item.count;

    // creating the DOM

    // item div
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('content__item');

    // image div:
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('item__image');
    imageDiv.style.backgroundImage = itemImage;
    itemDiv.appendChild(imageDiv);

    // info div
    const infoDiv = document.createElement('div');
    infoDiv.classList.add('item__info');

    const infoTitle = document.createElement('p');
    infoTitle.classList.add('item__info--title');
    infoTitle.textContent = itemTitle;
    infoDiv.appendChild(infoTitle);

    const infoPrice = document.createElement('p');
    infoPrice.classList.add('item__info--price');

    const spanCount = document.createElement('span');
    spanCount.setAttribute('id', 'price__count');
    spanCount.textContent = itemCount;
    infoPrice.appendChild(spanCount);

    infoPrice.innerHTML += ' x ';

    const spanPrice = document.createElement('span');
    spanPrice.setAttribute('id', 'price__number');
    spanPrice.textContent = itemPrice;
    infoPrice.appendChild(spanPrice);

    infoDiv.appendChild(infoPrice);

    itemDiv.appendChild(infoDiv);

    // remove div
    const removeDiv = document.createElement('div');
    removeDiv.classList.add('item__remove');

    const removeIcon = document.createElement('i');
    removeIcon.classList.add('fas', 'fa-trash-alt');

    removeDiv.appendChild(removeIcon);

    removeDiv.addEventListener('click', removeFromChart.bind(null, itemIndex));

    itemDiv.appendChild(removeDiv);

    itemContainer.appendChild(itemDiv);
  });
};

const calculateChart = () => {
  if (localStorage.getItem('chart') == null) {
    const chartArray = [];
    localStorage.setItem('chart', JSON.stringify(chartArray));
  }

  const localChart = JSON.parse(localStorage.getItem('chart'));

  let total = 0;
  for (const item of localChart) {
    let price = item.price;
    price = price.substring(1);
    price = price.trim();
    price = price.replace(',', '.');
    price = parseFloat(price);
    total += price * item.count;
  }
  const sum = document.getElementById('footer_total--sum');
  sum.innerHTML = '&euro; ';
  sum.innerHTML += total.toFixed(2);
};
