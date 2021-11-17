const { I } = inject();

class LoginPage {
  constructor() {
    this.navBar = "//div[@class='menu-wrapper']";
    this.inputEmail = "input[placeholder='Email']";
    this.inputPassword = "input[placeholder='Password']";
    this.submitButton = '(//button[1][@type="submit"])[1]';
    this.loginPageText = "//h2[contains(text(),'Hi,')]";
  }

  visit() {
    I.amOnPage("login");
    I.waitForElement(this.navBar);
    I.seeInCurrentUrl("login");
  }

  login(email = "user@phptravels.com", password = "demouser") {
    I.waitForElement(this.inputEmail);
    I.fillField(this.inputEmail, email);
    I.fillField(this.inputPassword, password);
    I.click(this.submitButton);
  }

  validateLogin() {
    I.waitForElement({ xpath: this.loginPageText }, 8);
    I.waitForElement(this.navBar);
  }
}
module.exports = new LoginPage();
module.exports.LoginPage = LoginPage;
