/*-------------------------------
------- sending request and creating the modal elements
-------------------------------*/
const itemsContainer = document.querySelector('.modal__items');
const singleItemContainer = document.querySelector('.single-product');

// set a function to send a GET request to the api and read records from database with fetch api method
function sendHttpRequest(method, url, data) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else {
        return response.json().then((error) => {
          showResultModal(false, error);
          throw new Error('Server-side problem!');
        });
      }
    })
    .catch((error) => {
      showResultModal(false, error);
      throw new Error('Something went wrong!');
    });
}

async function getProduct(category) {
  try {
    const ourResponse = await sendHttpRequest(
      'GET',
      `https://www.omid-soleimani.com/projects/davici/api/product/read.php?tn=${category}`
    );
    // first clear the container
    itemsContainer.innerHTML = '';
    for (const product of ourResponse) {
      // define a variable for each response property
      const productId = product['id'];
      const productTitle = product['product-title'];
      const productPrice = product['product-price'];
      const productSize = product['product-size'];
      const productDescription = product['product-description'];
      const imageUrlOne = product['product-image-one'];
      const imageUrlTwo = product['product-image-two'];
      const imageUrlThree = product['product-image-three'];
      const imageUrlFour = product['product-image-four'];

      const itemObject = {
        category: category,
        id: productId,
        title: productTitle,
        price: productPrice,
        image: imageUrlOne,
        count: 1
      };
      // * first to preview in all products modal section
      // creating the element
      const item = document.createElement('div');
      item.classList.add('modal__item');
      item.style.backgroundImage = imageUrlOne;

      // creating the "item" element children

      const itemIcons = document.createElement('div');
      itemIcons.classList.add('item__icons');
      item.appendChild(itemIcons);

      // div for icon preview
      const itemPreview = document.createElement('div');
      itemPreview.setAttribute('id', 'item-preview');
      itemIcons.appendChild(itemPreview);

      const itemPreviewIcon = document.createElement('i');
      itemPreviewIcon.classList.add('fas', 'fa-search');
      itemPreview.appendChild(itemPreviewIcon);

      // div for icon favorite
      const itemFavorite = document.createElement('div');
      itemFavorite.setAttribute('id', 'item-favorite');
      itemIcons.appendChild(itemFavorite);

      itemFavorite.addEventListener('click', () => {
        addToFavorite(itemObject);
      });

      const itemFavoriteIcon = document.createElement('i');
      itemFavoriteIcon.classList.add('far', 'fa-heart');
      itemFavorite.appendChild(itemFavoriteIcon);

      // div for icon add to card
      const itemCard = document.createElement('div');
      itemCard.setAttribute('id', 'item-card');
      itemIcons.appendChild(itemCard);

      itemCard.addEventListener('click', () => {
        addToChart(itemObject);
      });
      const itemCardIcon = document.createElement('i');
      itemCardIcon.classList.add('fas', 'fa-shopping-cart');
      itemCard.appendChild(itemCardIcon);

      // then append all to the container
      itemsContainer.appendChild(item);
      item.addEventListener('mouseenter', (e) => {
        e.currentTarget.style.backgroundImage = imageUrlThree;
      });
      item.addEventListener('mouseout', (e) => {
        e.currentTarget.style.backgroundImage = imageUrlOne;
      });

      // ! then to preview each product separately in another modal section
      itemPreview.addEventListener(
        'click',
        () => {
          // set the local storage active object
          const activeProduct = {
            category: category,
            id: productId,
            title: productTitle,
            price: productPrice,
            image: imageUrlOne,
            count: 1
          };
          setActiveProduct(activeProduct);
          // ******************

          singleItemContainer.classList.add('single-product--open');

          const productMainImage = document.querySelector(
            '.product__images--main'
          );
          const productMainOne = document.querySelector(
            '.thumbnail-image__one'
          );
          const productMainTwo = document.querySelector(
            '.thumbnail-image__two'
          );
          const productMainThree = document.querySelector(
            '.thumbnail-image__three'
          );
          const productMainFour = document.querySelector(
            '.thumbnail-image__four'
          );

          const singleProductTitle = document.querySelector(
            '.product__info h2'
          );
          const singleProductPrice = document.querySelector(
            '.product__info h3'
          );
          const singleProductSize = document.querySelector('.product__info h4');
          const singleProductDescription = document.querySelector(
            '.product__info p'
          );

          // ! amount action + button handler start
          const singleProductCount = document.querySelector('.actions__amount');
          singleProductCount.textContent = '1';

          const actionAdd = document.querySelector('.actions__change--add');
          const actionSub = document.querySelector('.actions__change--remove');

          actionAdd.addEventListener('click', () => {
            let count = parseInt(singleProductCount.textContent);

            count++;

            singleProductCount.textContent = count;
          });

          actionSub.addEventListener('click', () => {
            let count = parseInt(singleProductCount.textContent);

            count--;

            if (count < 1) {
              count = 1;
            }

            singleProductCount.textContent = count;
          });

          // ! amount action + button handler end

          productMainImage.style.backgroundImage = imageUrlOne;
          productMainOne.style.backgroundImage = imageUrlOne;
          productMainTwo.style.backgroundImage = imageUrlTwo;
          productMainThree.style.backgroundImage = imageUrlThree;
          productMainFour.style.backgroundImage = imageUrlFour;
          singleProductTitle.textContent = productTitle;
          singleProductPrice.textContent = productPrice;
          singleProductSize.textContent = productSize;
          singleProductDescription.textContent = productDescription;

          const thumbnailImages = document.querySelector(
            '.product__images--thumbnail'
          );
          thumbnailImages.addEventListener('click', (e) => {
            if (e.target.className != 'product__images--thumbnail') {
              const backgroundImage = e.target.style.backgroundImage;
              productMainImage.style.backgroundImage = backgroundImage;
            }
          });
        },
        true
      );
    }
  } catch (error) {
    showResultModal(false, error.message);
  }
}

/*-------------------------------
------- all products modal section
-------------------------------*/

// opening and closing the product modal element
const modalContainer = document.querySelector('.modal');
const closeModalIcon = document.getElementById('close-modal-icon');

const openModalHandler = () => {
  modalContainer.style.display = 'block';
  setTimeout(() => {
    modalContainer.style.opacity = 1;
  }, 500);

  // for small screens to close the sidenav too
  const sideNav = document.getElementById('header-navigation');
  if (sideNav.classList.contains('sideNav-open')) {
    sideNav.classList.remove('sideNav-open');
  }
};

const closeModalHandler = () => {
  modalContainer.style.opacity = 0;
  setTimeout(() => {
    itemsContainer.innerHTML = '';
    modalContainer.style.display = 'none';
  }, 600);
};

closeModalIcon.addEventListener('click', closeModalHandler);

// add listener to the products list items in
const previewProduct = (category) => {
  const currentModalCategory = document.getElementById(
    'modal-current-category'
  );
  currentModalCategory.textContent =
    category.charAt(0).toUpperCase() + category.slice(1);
  getProduct(category);
};

// in navbar - need to open modal:
document.querySelector('.products__list').addEventListener('click', (e) => {
  if (e.target.tagName == 'A') {
    let text = e.target.textContent.toLowerCase();
    text = text.replace(' ', '');
    openModalHandler();
    previewProduct(text);
  }
});

// in products modal (categories) - do NOT need to open modal
document.querySelector('.modal__categories').addEventListener('click', (e) => {
  if (e.target.tagName == 'P') {
    let text = e.target.textContent.toLowerCase();
    text = text.replace(' ', '');
    previewProduct(text);
  }
});

const setActiveProduct = (ProductObject) => {
  if (localStorage.getItem('activeProduct') != null) {
    localStorage.removeItem('activeProduct');
  }

  localStorage.setItem('activeProduct', JSON.stringify(ProductObject));
};

/*-------------------------------
------- single product modal section
-------------------------------*/

// closing the single product modal
const SingleProductCloseIcon = document.querySelector(
  '.single-product__close-button'
);

SingleProductCloseIcon.addEventListener('click', () => {
  singleItemContainer.classList.remove('single-product--open');

  localStorage.removeItem('activeProduct');
});

// add to favorite
const SingleProductFavoriteIcon = document.querySelector('.actions__favorite');

SingleProductFavoriteIcon.addEventListener('click', () => {
  const activeProduct = JSON.parse(localStorage.getItem('activeProduct'));

  addToFavorite(activeProduct);
});

// add to chart
const SingleProductChartIcon = document.querySelector('.actions__chart');

SingleProductChartIcon.addEventListener('click', () => {
  let productCount = document.querySelector('.actions__amount');
  productCount = parseInt(productCount.textContent);

  const activeProduct = JSON.parse(localStorage.getItem('activeProduct'));
  addToChart(activeProduct, productCount);
});
