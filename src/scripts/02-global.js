const resultModal = document.querySelector('.result');
const successIcon = document.getElementById('success');
const failureIcon = document.getElementById('failure');
const resultMessage = document.getElementById('result-message');

const showResultModal = (status, message) => {
  if (status == true) {
    successIcon.style.display = 'block';
    failureIcon.style.display = 'none';
  } else if (status == false) {
    successIcon.style.display = 'none';
    failureIcon.style.display = 'block';
  }

  resultMessage.textContent = message;
  resultModal.classList.add('show-result');

  setTimeout(() => {
    resultModal.classList.remove('show-result');
    successIcon.style.display = 'none';
    failureIcon.style.display = 'none';
    resultMessage.textContent = '';
  }, 3000);
};
