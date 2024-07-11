# DemoBlaze Test Automation Project

This project contains automated test scripts using Playwright with TypeScript for the DemoBlaze website. The following scenarios are automated:

1. **Scenario 1:** The user can register with valid data.
2. **Scenario 2:** The user can log in with a valid email and password.
3. **Scenario 3:** The user can log out.
4. **Scenario 4:** Successfully create an order for an Apple monitor 24.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/)

### Running the Tests

Please change the username located in homepage.ts that you register and login with as it cannot be duplicate

To run all tests:

npx playwright test
