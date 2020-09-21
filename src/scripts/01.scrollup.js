/*-------------------------------
------- separate button to scroll to top
-------------------------------*/

// just for desktop screen size
const separateButton = document.querySelector('.scroll-to-top');

document.addEventListener('scroll', () => {
  const htmlScrollHeight = document.documentElement.scrollTop;
  if (htmlScrollHeight > 1200) {
    separateButton.style.opacity = 1;
  } else {
    separateButton.style.display = 'flex';
    separateButton.style.opacity = 0;
  }
});

separateButton.addEventListener('click', () => {
  window.scrollTo(0, 0);
});
