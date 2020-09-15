/*-------------------------------
------- products modal section
-------------------------------*/
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
    modalContainer.style.display = 'none';
  }, 600);
};

closeModalIcon.addEventListener('click', closeModalHandler);

// ******** add listener to the products list items in ********* //

// todo define getProduct request function

// in navbar - need to open modal:
document.getElementById('nav-livingroom').addEventListener('click', () => {
  openModalHandler();
  getProduct('livingroom');
});
document.getElementById('nav-bedroom').addEventListener('click', () => {
  openModalHandler();
  getProduct('bedroom');
});
document.getElementById('nav-kitchen').addEventListener('click', () => {
  openModalHandler();
  getProduct('kitchen');
});
document.getElementById('nav-children').addEventListener('click', () => {
  openModalHandler();
  getProduct('children');
});
document.getElementById('nav-diningroom').addEventListener('click', () => {
  openModalHandler();
  getProduct('diningroom');
});
document.getElementById('nav-bathroom').addEventListener('click', () => {
  openModalHandler();
  getProduct('bathroom');
});

// in products modal (categories) - do NOT need to open modal
document.getElementById('cate-livingroom').addEventListener('click', () => {
  getProduct('livingroom');
});
document.getElementById('cate-bedroom').addEventListener('click', () => {
  getProduct('bedroom');
});
document.getElementById('cate-kitchen').addEventListener('click', () => {
  getProduct('kitchen');
});
document.getElementById('cate-children').addEventListener('click', () => {
  getProduct('children');
});
document.getElementById('cate-diningroom').addEventListener('click', () => {
  getProduct('diningroom');
});
document.getElementById('cate-bathroom').addEventListener('click', () => {
  getProduct('bathroom');
});
