class UserManagementPage {
    constructor(page) {
      this.page = page;
      this.addButton = '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div.orangehrm-paper-container > div.orangehrm-header-container > button';
      this.statusDropdown = '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(1) > div > div:nth-child(2) > div > div > div.oxd-select-text--after > i';
      this.employeeNameInput = '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > div > div:nth-child(2) > div > div > input';
      this.employeeDropdown = '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > div > div:nth-child(2) > div > div.oxd-autocomplete-dropdown.--positon-bottom > div > span';
      this.passwordInput = '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-row.user-password-row > div > div.oxd-grid-item.oxd-grid-item--gutters.user-password-cell > div > div:nth-child(2) > input';
      this.confirmPasswordInput = '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-row.user-password-row > div > div:nth-child(2) > div > div:nth-child(2) > input';
      this.saveButton = '#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.oxd-form-actions > button.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space';
    }
  
    async navigateToUserManagement() {
      await this.page.click('#app > div.oxd-layout > div.oxd-layout-navigation > aside > nav > div.oxd-sidepanel-body > ul > li:nth-child(1) > a > span');
    }
  
    async addUser(username, status, employeeName, employeeId, password) {
      await this.page.click(this.addButton);
      await this.page.click(this.statusDropdown);
      await this.page.click(`#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(1) > div > div:nth-child(2) > div > div.oxd-select-dropdown.--positon-bottom > div:nth-child(${status === 'Admin' ? 2 : 1})`);
      await this.page.fill(this.employeeNameInput, employeeName);
      await this.page.waitForSelector('.oxd-autocomplete-dropdown');
      await this.page.click(this.employeeDropdown);
      await this.page.fill(this.passwordInput, password);
      await this.page.fill(this.confirmPasswordInput, password);
      await this.page.click(this.saveButton);
    }
  }
  
  module.exports = UserManagementPage;