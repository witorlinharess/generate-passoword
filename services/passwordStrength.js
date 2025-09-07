// services/passwordStrength.js

function checkPasswordStrength(password) {
  let score = 0;
  const length = password.length;

  // Rule 1: Add points based on length
  if (length >= 8) {
    score += 1;
  }
  if (length >= 12) {
    score += 1;
  }
  if (length >= 16) {
    score += 1;
  }

  // Rule 2: Add points for including different character types
  // Check for lowercase letters
  if (/[a-z]/.test(password)) {
    score += 1;
  }
  // Check for uppercase letters
  if (/[A-Z]/.test(password)) {
    score += 1;
  }
  // Check for numbers
  if (/[0-9]/.test(password)) {
    score += 1;
  }
  // Check for special characters
  if (/[!@#$%^&*()_+\-=\[\]{}|:;"',.<>?]/.test(password)) {
    score += 1;
  }

  // Determine the strength level based on the score
  if (score <= 2) {
    return 'Weak';
  } else if (score <= 4) {
    return 'Medium';
  } else if (score <= 6) {
    return 'Strong';
  } else {
    return 'Very Strong';
  }
}

module.exports = {
  checkPasswordStrength,
};