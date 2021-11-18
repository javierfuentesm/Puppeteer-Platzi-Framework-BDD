const { loginPage, flightPage, navBarFragment, I } = inject();

Given(/^Im on logged in and Im the right page$/, function () {
  loginPage.visit();
  loginPage.login("agent@phptravels.com", "demoagent");
  loginPage.validateLogin();
  navBarFragment.validateNavBarIsPresent();
  navBarFragment.selectMenuItem("flights");
  flightPage.validatePage();
});
When(
  /^I fill in the search params with country from: (.*) , destination country: (.*), departure date : (.*) and passenger: (.*)$/,
  function (from, destination, date, passengers) {
    flightPage.selectFlight(from, destination, date, passengers);
    I.saveScreenshot("algo.png");
  }
);
Then(/^I should see no results in the page of flights$/, function () {
  navBarFragment.validateNavBarIsPresent();
});
