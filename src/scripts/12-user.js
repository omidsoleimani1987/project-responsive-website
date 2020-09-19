// toggle user nodal view
const toggleUserModal = () => {
  const userModal = document.querySelector('.user');
  userModal.classList.toggle('user-show');
  UserSignupModal.style.display = 'none';
  showUserLoginModal();
};

// close user modal icon
const closeUserModalIcon = document.getElementById('close-user');
closeUserModalIcon.addEventListener('click', toggleUserModal);

// show user login modal icons
const topUserModalIcon = document.getElementById('user-top-icon');
const bottomUserModalIcon = document.getElementById('user-bottom-icon');

const UserLoginModal = document.querySelector('.user__modal--login');

const showUserLoginModal = () => {
  UserLoginModal.style.display = 'flex';
};

topUserModalIcon.addEventListener('click', toggleUserModal);
bottomUserModalIcon.addEventListener('click', toggleUserModal);

// show user sign up modal
const showUserSignupButton = document.querySelector('.login__button--register');
const UserSignupModal = document.querySelector('.user__modal--signup');
showUserSignupButton.addEventListener('click', () => {
  UserLoginModal.style.display = 'none';
  UserSignupModal.style.display = 'flex';
});
