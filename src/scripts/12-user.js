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
const loginUserName = document.getElementById('login__username');
const loginPassword = document.getElementById('login__password');
let loginError = false;

const validateLoginUsername = () => {
  const userNameValue = loginUserName.value.trim();
  if (userNameValue == '') {
    loginUserName.style.borderColor = 'red';
    document.getElementById('login-username-error').textContent =
      'username field is empty!';
    loginError = true;
  } else if (userNameValue.match(/^[a-zA-Z0-9]+$/) == null) {
    loginUserName.style.borderColor = 'red';
    document.getElementById('login-username-error').textContent =
      'username is not valid!';
    loginError = true;
  } else {
    loginUserName.style.borderColor = 'green';
    document.getElementById('login-username-error').textContent = '';
  }
};

const validateLoginPassword = () => {
  const passwordValue = loginPassword.value.trim();
  if (passwordValue == '') {
    loginPassword.style.borderColor = 'red';
    document.getElementById('login-password-error').textContent =
      'password field is empty!';
    loginError = true;
  } else {
    loginPassword.style.borderColor = 'green';
    document.getElementById('login-password-error').textContent = '';
  }
};

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  validateLoginUsername();
  validateLoginPassword();

  if (!loginError) {
    const userInfo = {
      username: loginUserName.value.trim(),
      password: loginPassword.value.trim()
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
      console.log('im here');
      showResultModal(false, error);
      throw new Error('Something went wrong!');
    });
};

// **************************** sign up form validation ***************************** //
const signupForm = document.getElementById('signup-form');
const firstName = document.getElementById('signup__firstname');
const lastName = document.getElementById('signup__lastname');
const email = document.getElementById('signup__email');
const signupUserName = document.getElementById('signup__username');
const signupPassword = document.getElementById('signup__password');

let signupError = false;

//  ******************first name***********************

const validateFirstName = () => {
  const firstNameValue = firstName.value.trim();
  if (firstNameValue == '') {
    firstName.style.borderColor = 'red';
    document.getElementById('firstname-error').textContent =
      'first name field is empty!';
    signupError = true;
  } else if (firstNameValue.match(/^[a-zA-Z ]+$/) == null) {
    firstName.style.borderColor = 'red';
    document.getElementById('firstname-error').textContent =
      'first name is not valid!';
    signupError = true;
  } else {
    firstName.style.borderColor = 'green';
    document.getElementById('firstname-error').textContent = '';
  }
};

//  ******************last name***********************

const validateLastName = () => {
  const lastNameValue = lastName.value.trim();
  if (lastNameValue == '') {
    lastName.style.borderColor = 'red';
    document.getElementById('lastname-error').textContent =
      'last name field is empty!';
    signupError = true;
  } else if (lastNameValue.match(/^[a-zA-Z ]+$/) == null) {
    lastName.style.borderColor = 'red';
    document.getElementById('lastname-error').textContent =
      'last name is not valid!';
    signupError = true;
  } else {
    lastName.style.borderColor = 'green';
    document.getElementById('lastname-error').textContent = '';
  }
};

//  ******************email***********************

const validateEmail = () => {
  const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const emailValue = email.value.trim();
  if (emailValue == '') {
    email.style.borderColor = 'red';
    document.getElementById('email-error').textContent =
      'email field is empty!';
    signupError = true;
  } else if (emailValue.match(emailFormat) == null) {
    email.style.borderColor = 'red';
    document.getElementById('email-error').textContent = 'email is not valid!';
    signupError = true;
  } else {
    email.style.borderColor = 'green';
    document.getElementById('email-error').textContent = '';
  }
};

//  ******************username***********************

const validateRegisterUsername = () => {
  const userNameValue = signupUserName.value.trim();
  if (userNameValue == '') {
    signupUserName.style.borderColor = 'red';
    document.getElementById('signup-username-error').textContent =
      'username field is empty!';
    signupError = true;
  } else if (userNameValue.match(/^[a-zA-Z0-9]+$/) == null) {
    signupUserName.style.borderColor = 'red';
    document.getElementById('signup-username-error').textContent =
      'username is not valid!';
    signupError = true;
  } else {
    signupUserName.style.borderColor = 'green';
    document.getElementById('signup-username-error').textContent = '';
  }
};

//  ********************password*********************

const validateRegisterPassword = () => {
  const passwordValue = signupPassword.value.trim();
  if (passwordValue == '') {
    signupPassword.style.borderColor = 'red';
    document.getElementById('signup-password-error').textContent =
      'password field is empty!';
    signupError = true;
  } else {
    signupPassword.style.borderColor = 'green';
    document.getElementById('signup-password-error').textContent = '';
  }
};

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  validateFirstName();
  validateLastName();
  validateEmail();
  validateRegisterUsername();
  validateRegisterPassword();

  if (!signupError) {
    const userInfo = {
      firstname: firstName.value.trim(),
      lastname: lastName.value.trim(),
      email: email.value.trim(),
      username: signupUserName.value.trim(),
      password: signupPassword.value.trim()
    };

    const url = 'http://localhost/api/user/register.php';
    try {
      sendUserInfo('POST', url, userInfo)
        .then((response) => {
          if (response.status == 'success') {
            toggleUserModal();
            showResultModal(true, 'user is registered successfully');
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
  }
});
