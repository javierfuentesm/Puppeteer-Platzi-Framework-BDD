const { I, loginPage } = inject();

Given("Im on the right page", async () => {
  await loginPage.visit();
});

When(
  /^I fill in the form with my email: "([^"]*)" and password: "([^"]*)"$/,
  function (email, password) {
    loginPage.login(email, password);
  }
);

Then(/^I should be dashboard page$/, function () {
  loginPage.validateLogin();
});
