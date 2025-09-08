# Secure Password Generator


## About the Project

This is a full-stack secure password generator project, developed for learning and practice. The application consists of a static front end that interacts with a back-end server to securely generate custom passwords. The interface is intuitive and allows the user to define the password length and include or exclude uppercase letters, numbers, and symbols.

## Features

* **Secure Password Generation:** The password generation logic is processed on the back end for enhanced security and separation of concerns.
* **RESTful API:** The communication between the front end and back end is done via a REST API.
* **Customization:** Define the password length and include or exclude uppercase letters, numbers, and symbols.
* **Strength Validation:** Real-time visual feedback on the generated password's strength.
* **Quick Copy:** A button to copy the generated password to the clipboard.

## Technologies Used

### Front end
* **HTML5:** Page structure and layout.
* **CSS3:** Interface styling, including the semi-transparent panel.
* **JavaScript:** User interaction logic and API calls.

### Back end
* **Node.js:** Server runtime environment.
* **Express.js:** Framework for creating the server and RESTful API.

## How to Run the Project

To set up and run the project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/witorlinharess/generate-passoword.git]
    ```
2.  **Install back-end dependencies:**
    Navigate to the project directory and install the Node.js dependencies.
    ```bash
    cd generate-passoword
    npm install
    ```
3.  **Start the server:**
    ```bash
    node index.js
    ```
    The server will run on port `3000`.

4.  **Access the application:**
    Open your browser and go to `http://localhost:3000` to use the password generator.

    <img width="1366" height="768" alt="img" src="https://github.com/user-attachments/assets/7fc890d6-710d-4966-aa47-83f0e340cfef" />
