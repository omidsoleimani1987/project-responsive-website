/*-------------------------------
------- header section
-------------------------------*/

// mobile and tablet design

// variables
const hamburgerIcon = document.querySelector('.menu-icon');
const sideNavCloseIcon = document.querySelector('.navigation__close-button');

const productList = document.getElementById('products-list');
const productItems = document.getElementById('products-items');

// menu button functionality
const toggleSideNavClass = () => {
  const sideNav = document.querySelector('.navigation');
  sideNav.classList.toggle('sideNav-open');
};

// to open side nav menu
hamburgerIcon.addEventListener('click', toggleSideNavClass);

// to close side nav menu and close product list if is open
sideNavCloseIcon.addEventListener('click', () => {
  toggleSideNavClass();
  productItems.classList.remove('products-open');
});

// product list preview
productList.addEventListener('click', () => {
  productItems.classList.toggle('products-open');
});
