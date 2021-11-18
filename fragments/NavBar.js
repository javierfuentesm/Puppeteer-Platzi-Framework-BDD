const { I } = inject();

class NavBar {
  constructor() {
    this.navBar = ".menu-wrapper";
    this.menu = {
      home: "//a[normalize-space()='Home']",
      hotels: "//a[normalize-space()='Hotels']",
      flights: "//a[normalize-space()='flights']",
    };
  }

  validateNavBarIsPresent() {
    I.waitForElement(this.navBar, 5);
    I.waitForElement(this.menu.home, 5);
    I.waitForElement(this.menu.hotels, 5);
    I.waitForElement(this.menu.flights, 5);
  }

  selectMenuItem(menuItem) {
    //Es muy rapido y lo ejecuta entonces hay que esperar
    I.wait(3);
    I.click(this.menu[menuItem]);
  }
}

module.exports = new NavBar();
module.exports.NavBar = NavBar;
