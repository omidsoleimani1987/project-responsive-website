/*-------------------------------
------- side nav menu
-------------------------------*/

// mobile and tablet design

// variables
const hamburgerIcon = document.querySelector('.menu-icon');
const sideNavCloseIcon = document.querySelector('.navigation__close-button');

const productList = document.getElementById('products-list');
const productItems = document.getElementById('products-items');

// menu button functionality

const toggleSideNavClass = () => {
  const sideNav = document.getElementById('header-navigation');
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

/*-------------------------------
------- mobile and tablet navigation buttons
-------------------------------*/
const homeButton = document.querySelector('.fa-home');

homeButton.addEventListener('click', () => {
  window.scrollTo(0, 0);
});
