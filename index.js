// Import necessary modules
const cors = require('cors');
const express = require('express');
const { generatePassword } = require('./services/passwordGenerator');
const { checkPasswordStrength } = require('./services/passwordStrength');

// Create a single express instance
const app = express();

// Define the server port
const PORT = 3000;

// Middleware to process JSON requests
app.use(express.json());
app.use(cors());

// --- Translations ---
const strengthTranslations = {
    'Weak': 'Fraca',
    'Medium': 'Média',
    'Strong': 'Forte',
    'Very Strong': 'Muito Forte'
};

// --- API ROUTES ---

// Main route to test if the server is working
app.get('/', (req, res) => {
    res.send('The server is running!');
});

// Route to generate the password
app.post('/generate', (req, res) => {
    // Get the data sent in the request body
    const { length, options } = req.body;

    // Validate if the data was sent correctly and if length is within the limit
    if (!length || !options || length > 20) {
        return res.status(400).send({ error: 'Máximo 16 caracteres.' });
    }

    // Call the function to generate the password
    const newPassword = generatePassword(length, options);

    // Check the password strength (returns 'Weak', 'Medium', etc.)
    const strength = checkPasswordStrength(newPassword);

    // Get the translated strength from our dictionary
    const translatedStrength = strengthTranslations[strength] || strength;

    // Return the generated password and both strength values
    res.status(200).send({
        password: newPassword,
        originalStrength: strength,
        strength: translatedStrength
    });
});

// --- START THE SERVER ---

// Start the server, listening on the defined port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});