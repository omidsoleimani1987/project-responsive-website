/*-------------------------------
------- favorite add 
-------------------------------*/

const addToFavorite = (ProductObject) => {
  if (localStorage.getItem('favorite') == null) {
    const favoriteArray = [];
    localStorage.setItem('favorite', JSON.stringify(favoriteArray));
  }

  const favorite = JSON.parse(localStorage.getItem('favorite'));
  let productExist = false;
  for (const item of favorite) {
    if (
      ProductObject.category == item.category &&
      ProductObject.id == item.id
    ) {
      productExist = true;
    }
  }

  if (!productExist) {
    favorite.push(ProductObject);
    localStorage.setItem('favorite', JSON.stringify(favorite));
  }

  showResultModal(true, 'added to favorites');
};

/*-------------------------------
------- favorite create menu
-------------------------------*/

const removeFromFavorite = (index) => {
  const favorite = JSON.parse(localStorage.getItem('favorite'));

  favorite.splice(index, 1);
  localStorage.removeItem('favorite');
  localStorage.setItem('favorite', JSON.stringify(favorite));

  createFavorite();

  showResultModal(true, 'removed from favorites');
};

// create chart in right menu content
const createFavorite = () => {
  if (localStorage.getItem('favorite') == null) {
    const favoriteArray = [];
    localStorage.setItem('favorite', JSON.stringify(favoriteArray));
  }

  const localFavorite = JSON.parse(localStorage.getItem('favorite'));

  const itemContainer = document.querySelector('.right-menu__content');

  itemContainer.innerHTML = '';

  localFavorite.forEach((item, index) => {
    const itemIndex = index;
    const itemCategory = item.category;
    const itemId = item.id;
    const itemImage = item.image;
    const itemPrice = item.price;
    const itemTitle = item.title;
    const itemCount = item.count;

    const itemObject = { ...item };
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

    // const spanCount = document.createElement('span');
    // spanCount.setAttribute('id', 'price__count');
    // spanCount.textContent = itemCount;
    // infoPrice.appendChild(spanCount);

    // infoPrice.innerHTML += ' x ';

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

    const chartIcon = document.createElement('i');
    chartIcon.classList.add('fas', 'fa-shopping-basket');

    removeDiv.appendChild(removeIcon);
    removeDiv.appendChild(chartIcon);

    removeIcon.addEventListener(
      'click',
      removeFromFavorite.bind(null, itemIndex)
    );
    chartIcon.addEventListener('click', addToChart.bind(null, itemObject, 1));

    itemDiv.appendChild(removeDiv);

    itemContainer.appendChild(itemDiv);
  });
};
