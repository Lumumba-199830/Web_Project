// Contact form validation - contact.js

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  let valid = true;

  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value.trim();

  // Reset errors
  document.querySelectorAll('.error-msg').forEach(el => el.style.display = 'none');
  document.querySelectorAll('input, select, textarea').forEach(el => el.classList.remove('input-error'));

  // First name
  if (!firstName) {
    showError('firstNameErr', 'firstName');
    valid = false;
  }

  // Last name
  if (!lastName) {
    showError('lastNameErr', 'lastName');
    valid = false;
  }

  // Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    showError('emailErr', 'email');
    valid = false;
  }

  // Subject
  if (!subject) {
    showError('subjectErr', 'subject');
    valid = false;
  }

  // Message
  if (!message || message.length < 20) {
    showError('messageErr', 'message');
    valid = false;
  }

  // If all valid, show success
  if (valid) {
    document.getElementById('contactForm').reset();
    const successMsg = document.getElementById('success-msg');
    successMsg.style.display = 'block';
    setTimeout(() => { successMsg.style.display = 'none'; }, 5000);
  }
});

function showError(errId, inputId) {
  document.getElementById(errId).style.display = 'block';
  document.getElementById(inputId).classList.add('input-error');
}