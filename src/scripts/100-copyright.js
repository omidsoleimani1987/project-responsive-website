const copyrightElement = document.getElementById('copyright');

const currentYear = new Date().getFullYear().toString();
copyrightElement.textContent = currentYear;
