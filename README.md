# Cypress Automation Project

This repository contains test automation scripts using Cypress, developed during the Introduction to Cypress course from Test Automation University.

## 📋 About The Project

This project demonstrates my knowledge in front-end test automation using the Cypress framework. The scripts were developed to practice and apply concepts learned during the course, including:

- CSS and XPath selectors
- Basic and custom commands
- Assertions
- Page Objects
- Reports and screenshots
- API Testing

## 🛠️ Technologies Used

- [Cypress](https://www.cypress.io/) - Test automation framework
- [Node.js](https://nodejs.org/) - JavaScript runtime environment
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Programming language

## 📦 Project Structure

```
cypress/
├── fixtures/          # Test data files
├── integration/       # Test scripts
├── plugins/           # Cypress plugins
├── support/           # Custom commands and configurations
└── screenshots/       # Failure screenshots (automatically generated)
```

## 🚀 How to Run Tests

### Prerequisites

- Node.js installed
- NPM or Yarn installed

### Installation

1. Clone this repository:
```bash
git clone https://github.com/thiagohvo/Cypress-TAU.git
cd Cypress-TAU
```

2. Install dependencies:
```bash
npm install
```

### Running Tests

To open the Cypress Test Runner:
```bash
npm run cy:open
```

To run tests in headless mode:
```bash
npm run cy:run
```

## 📝 Test Cases

This project includes the following test cases:

1. **Login**: Validation of login with valid and invalid credentials
2. **User Registration**: Creation of new users and validation of error messages
3. **Product Search**: Tests on the search functionality and validation of results
4. **API**: Tests on login and registration APIs

## 📚 Learnings

During the development of this project, I applied the following concepts:

- Best practices for test structuring
- Page Objects pattern
- Custom commands for code reuse
- Efficient use of fixtures for test data
- Strategies for handling asynchronous elements

## 📫 Contact

If you have  any suggestions about this project, feel free to get in touch.

---

This project was developed as part of the learning from the Introduction to Cypress course at Test Automation University.
