const { Given, When, Then } = require('cucumber');
const LoginPage = require('../pages/LoginPage');
const { LOGIN_USERS } = require('../testdata');

const loginPage = new LoginPage();

Given('I open the app', () => {
  loginPage.open();
});

When('I login with {string} and {string}', (usernameKey, passwordKey) => {
  const { username, password } = LOGIN_USERS[usernameKey];
  loginPage.login(username, password);
});

Then('I should see the dashboard', () => {
  // Implement logic to verify dashboard is displayed
  // Example: assert dashboard element is visible
});

Then('I should see an error message', () => {
  assert(loginPage.isErrorMessageDisplayed(), 'Error message is not displayed');
});

function assert("login test passed", arg1: "test pass") {
    throw new Error("Function not implemented.");
}

