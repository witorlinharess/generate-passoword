// Get references to HTML elements
const passwordDisplay = document.getElementById('password-display');
const copyButton = document.getElementById('copy-button');
const generateButton = document.querySelector('.generate-button');
const lengthInput = document.getElementById('length');
const includeUppercase = document.getElementById('includeUppercase');
const includeNumbers = document.getElementById('includeNumbers');
const includeSymbols = document.getElementById('includeSymbols');
const strengthDisplay = document.getElementById('strength-display');
const messageDisplay = document.getElementById('message-display');

// --- Event Listeners ---

// Handle the "Generate Password" button click
generateButton.addEventListener('click', async () => {
    // Clear previous messages and strength display
    messageDisplay.textContent = '';
    messageDisplay.className = '';
    passwordDisplay.textContent = '';
    updateStrengthDisplay('');

    // Get the user's options from the checkboxes and input field
    const length = parseInt(lengthInput.value, 10);
    
    // Front-end validation to check if length is a valid number
    if (isNaN(length) || length < 1) {
        messageDisplay.textContent = 'Please enter a valid password length.';
        messageDisplay.classList.add('error-message');
        return;
    }

    const options = {
        includeUppercase: includeUppercase.checked,
        includeNumbers: includeNumbers.checked,
        includeSymbols: includeSymbols.checked,
        includeLowercase: true
    };

    try {
        const response = await fetch('http://localhost:3000/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ length, options }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            messageDisplay.textContent = errorData.error;
            messageDisplay.classList.add('error-message');
            return;
        }

        const data = await response.json();

        // Update the UI with the new password and its translated strength
        passwordDisplay.textContent = data.password;
        updateStrengthDisplay(data.strength, data.originalStrength); // Passing both strength values

    } catch (error) {
        console.error('Error:', error);
        messageDisplay.textContent = 'Error: Failed to connect to server.';
        messageDisplay.classList.add('error-message');
        updateStrengthDisplay('');
    }
});

// Handle the "Copy" button click
copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(passwordDisplay.textContent)
        .then(() => {
            copyButton.textContent = 'Copiado!';
            setTimeout(() => {
                copyButton.textContent = 'Copiar';
            }, 2000);
        })
        .catch(err => {
            console.error('Failed to copy password: ', err);
        });
});

// --- UI Helper Functions ---

// The function now accepts two arguments to handle both text and style
function updateStrengthDisplay(translatedStrength, originalStrength) {
    strengthDisplay.textContent = `Força: ${translatedStrength}`;
    strengthDisplay.className = ''; 
    
    if (originalStrength) {
        strengthDisplay.classList.add(originalStrength.toLowerCase().replace(' ', '-'));
    }
}