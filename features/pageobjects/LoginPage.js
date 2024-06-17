class LoginPage {
    get usernameField() { return $('input[data-testid="username-input"]'); }
    get passwordField() { return $('input[data-testid="password-input"]'); }
    get loginButton() { return $('button[data-testid="login-button"]'); }
    get errorMessage() { return $('div[data-testid="error-message"]'); }
  
    open() {
      // Implement app launch logic here
    }
  
    login(username, password) {
      this.usernameField.setValue(username);
      this.passwordField.setValue(password);
      this.loginButton.click();
    }
  
    isErrorMessageDisplayed() {
      return this.errorMessage.isDisplayed();
    }
  }
  
  module.exports = new LoginPage();
  