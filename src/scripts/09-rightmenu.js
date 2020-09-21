// close right menu
const closeRightMenuIcon = document.querySelector('.right-menu__header--close');

const toggleRightMenu = () => {
  // first close the sidenav if it is open
  const sideNav = document.getElementById('header-navigation');
  if (sideNav.classList.contains('sideNav-open')) {
    sideNav.classList.remove('sideNav-open');
  }

  const rightMenu = document.querySelector('.right-menu');
  rightMenu.classList.toggle('right-menu-toggle');
};

closeRightMenuIcon.addEventListener('click', toggleRightMenu);

// open right menu
const openChartMenuIcon = document.getElementById('navigation__icons--chart');

openChartMenuIcon.addEventListener('click', () => {
  const rightMenuFooter = document.querySelector('.right-menu__footer');
  if (rightMenuFooter.classList.contains('right-menu__footer--close')) {
    rightMenuFooter.classList.remove('right-menu__footer--close');
  }

  const button = document.querySelector('.footer__checkout');
  button.textContent = '';
  button.textContent = 'CHECK OUT';

  createChart();
  calculateChart();
  toggleRightMenu();
});

const openFavoriteMenuIcon1 = document.getElementById(
  'navigation__icons--favorite1'
);
const openFavoriteMenuIcon2 = document.getElementById(
  'navigation__icons--favorite2'
);

openFavoriteMenuIcon1.addEventListener('click', () => {
  const rightMenuFooter = document.querySelector('.right-menu__footer');
  if (!rightMenuFooter.classList.contains('right-menu__footer--close')) {
    rightMenuFooter.classList.add('right-menu__footer--close');
  }
  console.log('im first');

  createFavorite();
  toggleRightMenu();
});

openFavoriteMenuIcon2.addEventListener('click', () => {
  const rightMenuFooter = document.querySelector('.right-menu__footer');
  if (!rightMenuFooter.classList.contains('right-menu__footer--close')) {
    rightMenuFooter.classList.add('right-menu__footer--close');
  }
  console.log('im second');
  createFavorite();
  toggleRightMenu();
});
