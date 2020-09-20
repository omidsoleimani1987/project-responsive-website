// open user modal
const openUserModal = () => {
  // check id user logged in
  if (sessionStorage.getItem('user') != null) {
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (user.status) {
      showResultModal(false, 'you are already signed in');
      return;
    }
  }

  const userModal = document.querySelector('.user');
  userModal.classList.toggle('user-show');
  UserSignupModal.style.display = 'none';
  showUserLoginModal();
};
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

topUserModalIcon.addEventListener('click', openUserModal);
bottomUserModalIcon.addEventListener('click', openUserModal);

// show user sign up modal
const showUserSignupButton = document.querySelector('.login__button--register');
const UserSignupModal = document.querySelector('.user__modal--signup');
showUserSignupButton.addEventListener('click', () => {
  UserLoginModal.style.display = 'none';
  UserSignupModal.style.display = 'flex';
});

// **************************** login form validation ***************************** //
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('login__username').value.trim();
  const password = document.getElementById('login__password').value.trim();

  const userInfo = {
    username: username,
    password: password
  };
  const url = 'http://localhost/api/user/login.php';
  try {
    sendUserInfo('POST', url, userInfo)
      .then((response) => {
        if (response.status == 'success') {
          toggleUserModal();
          showResultModal(true, 'user logged in successfully');
          const user = {
            userName: response.username,
            status: true
          };
          sessionStorage.setItem('user', JSON.stringify(user));
        } else {
          showResultModal(false, response.status);
        }
      })
      .catch((error) => {
        showResultModal(false, error);
      });
  } catch (error) {
    showResultModal(false, error.message);
  }
});

const sendUserInfo = (method, url, data) => {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else {
        return response.json().then((error) => {
          showResultModal(false, error);
          throw new Error('Server-side problem!');
        });
      }
    })
    .catch((error) => {
      showResultModal(false, error);
      throw new Error('Something went wrong!');
    });
};

// **************************** sign up form validation ***************************** //
