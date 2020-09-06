/*-------------------------------
------- big landing image section
-------------------------------*/
let indexId = 1;

const changeSlideshow = setInterval(() => {
  const slides = [
    {
      url: "url('assets/images/01-slideshow.jpg')",
      text: 'Chair'
    },
    {
      url: "url('assets/images/02-slideshow.jpg')",
      text: 'Spring'
    },
    {
      url: "url('assets/images/03-slideshow.jpg')",
      text: 'New'
    }
  ];

  const slideshowTextElement = document.getElementById('slideshow-text');
  const slideshowContainerElement = document.getElementById(
    'slideshow-container'
  );

  if (indexId == 3) {
    indexId = 0;
  }
  slideshowContainerElement.style.backgroundImage = slides[indexId].url;

  slideshowTextElement.textContent = slides[indexId].text;

  indexId++;
}, 5000);
