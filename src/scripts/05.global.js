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
};

const closeModalHandler = () => {
  modalContainer.style.opacity = 0;
  setTimeout(() => {
    modalContainer.style.display = 'none';
  }, 600);
};

closeModalIcon.addEventListener('click', closeModalHandler);
