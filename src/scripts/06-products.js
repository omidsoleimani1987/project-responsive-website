/*-------------------------------
------- products modal section
-------------------------------*/
const itemsContainer = document.querySelector('.modal__items');

// set a function to send a GET request to the api and read records from database with fetch api method
function sendHttpRequest(method, url) {
  return fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else {
        return response.json().then((error) => {
          console.log(error);
          throw new Error('Server-side problem!');
        });
      }
    })
    .catch((error) => {
      console.log(error);
      throw new Error('Something went wrong!');
    });
}

async function getProduct(category) {
  try {
    const ourResponse = await sendHttpRequest(
      'GET',
      `http://localhost/api/product/read.php?tn=${category}`
    );
    // first clear the container
    itemsContainer.innerHTML = '';
    for (const product of ourResponse) {
      const imageUrl = product['product-image-one'];
      createProductItem(imageUrl);
    }
  } catch (error) {
    console.log(error.message);
  }
}

const createProductItem = (imageUrl) => {
  const item = document.createElement('div');
  item.classList.add('modal__item');
  item.style.backgroundImage = imageUrl;
  item.innerHTML =
    '<div class="item__icons"><div id="item-preview"><i class="fas fa-search"></i></div><div id="item-favorite"><i class="far fa-heart"></i></div><div id="item-card"><i class="fas fa-shopping-cart"></i></div>';

  itemsContainer.appendChild(item);
};

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
  currentModalCategory.textContent = category;
  getProduct(category);
};
// in navbar - need to open modal:
document.getElementById('nav-livingroom').addEventListener('click', () => {
  openModalHandler();
  previewProduct('livingroom');
});
document.getElementById('nav-bedroom').addEventListener('click', () => {
  openModalHandler();
  previewProduct('bedroom');
});
document.getElementById('nav-kitchen').addEventListener('click', () => {
  openModalHandler();
  previewProduct('kitchen');
});
document.getElementById('nav-children').addEventListener('click', () => {
  openModalHandler();
  previewProduct('children');
});
document.getElementById('nav-diningroom').addEventListener('click', () => {
  openModalHandler();
  previewProduct('diningroom');
});
document.getElementById('nav-bathroom').addEventListener('click', () => {
  openModalHandler();
  previewProduct('bathroom');
});

// in products modal (categories) - do NOT need to open modal
document.getElementById('cate-livingroom').addEventListener('click', () => {
  previewProduct('livingroom');
});
document.getElementById('cate-bedroom').addEventListener('click', () => {
  previewProduct('bedroom');
});
document.getElementById('cate-kitchen').addEventListener('click', () => {
  previewProduct('kitchen');
});
document.getElementById('cate-children').addEventListener('click', () => {
  previewProduct('children');
});
document.getElementById('cate-diningroom').addEventListener('click', () => {
  previewProduct('diningroom');
});
document.getElementById('cate-bathroom').addEventListener('click', () => {
  previewProduct('bathroom');
});
