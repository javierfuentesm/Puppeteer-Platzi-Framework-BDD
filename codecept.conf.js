exports.config = {
  output: "./output",
  helpers: {
    Puppeteer: {
      url: "https://www.phptravels.net/",
      show: true,
      windowSize: "1200x1200",
      waitForNavigation: "networkidle2",
    },
  },
  include: {
    I: "./steps_file.js",
    loginPage: "./pages/loginPage.js",
    flightPage: "./pages/flightPage.js",
    navBarFragment: "./fragments/NavBar.js",
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: "./features/*.feature",
    steps: [
      "./step_definitions/loginSteps.js",
      "./step_definitions/flightSteps.js",
    ],
  },
  plugins: {
    screenshotOnFail: {
      enabled: true,
    },
    pauseOnFail: {},
    retryFailedStep: {
      retries: 15,
      enabled: true,
    },
    tryTo: {
      enabled: true,
    },
  },
  stepTimeout: 0,
  stepTimeoutOverride: [
    {
      pattern: "wait.*",
      timeout: 0,
    },
    {
      pattern: "amOnPage",
      timeout: 0,
    },
  ],
  tests: "./*_test.js",
  name: "FrameWorkPuppeteerBDD",
};
