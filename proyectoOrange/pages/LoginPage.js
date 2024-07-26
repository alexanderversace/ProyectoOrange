class LoginPage {
    constructor(page) {
      this.page = page;
      this.usernameInput = 'input[name="username"]';
      this.passwordInput = 'input[name="password"]';
      this.submitButton = 'button[type="submit"]';
    }
  
    async login(username, password) {
      await this.page.fill(this.usernameInput, username);
      await this.page.fill(this.passwordInput, password);
      await this.page.click(this.submitButton);
    }
  }
  
  module.exports = LoginPage;