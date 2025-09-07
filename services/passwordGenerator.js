// services/passwordGenerator.js

function generatePassword(length, options) {
  // Define the available character sets
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+-=[]{}|;:",.<>?';

  // Build the character string based on the options
  let characters = ''; // Correction 1: initialize with an empty string
  if (options.includeLowercase) characters += lowercase;
  if (options.includeUppercase) characters += uppercase;
  if (options.includeNumbers) characters += numbers;
  if (options.includeSymbols) characters += symbols;

  // If no character type is selected, return an empty string
  if (characters === '') {
    return ''; // Correction 2: return an empty string
  }

  let password = ''; // Correction 3: initialize with an empty string
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}

module.exports = {
  generatePassword,
};