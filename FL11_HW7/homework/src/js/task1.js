const minLoginLength = 6;
const minNewPasswordLength = 5;
const login = prompt('Enter your email');

if (login === null || login.length === 0) {
  alert('canceled');
} else if (login.length < minLoginLength) {
  alert('I don`t know any emails having name length less than 6 symbols');
} else if (login === 'user@gmail.com' || login === 'admin@gmail.com') {
  const password = prompt('Enter your password', '');

  if (password === null || password.length === 0) {
    alert('Canceled');
  } else if (login === 'user@gmail.com' && password === 'UserPass' ||
            login === 'admin@gmail.com' && password === 'AdminPass') {
    const newPasswordRequest = confirm('Do you want to change your password?');

    if (newPasswordRequest === false) {
      alert('You have failed the change.');
    } else {
      const oldPassword = prompt('Enter the old password', '');

      if (oldPassword === null || oldPassword.length === 0) {
        alert('Canceled');
      } else if (login === 'user@gmail.com' && oldPassword === 'UserPass' ||
                login === 'admin@gmail.com' && oldPassword === 'AdminPass') {
        const newPassword = prompt('Enter new password');

        if (newPassword.length < minNewPasswordLength) {
          alert('It’s too short password. Sorry.');
        } else {
          const newPasswordConfirm = prompt('Enter new password again');

          if (newPasswordConfirm === newPassword) {
            alert('You have successfully changed your password.');
          } else {
            alert('You wrote the wrong password.');
          }
        }
      } else {
        alert('Wrong password');
      }
    }
  } else {
    alert('Wrong password');
  }
} else {
  alert('I don’t know you');
}
