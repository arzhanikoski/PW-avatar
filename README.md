
# 🎮 PW-avatar: Playwright Visual Regression Testing for Juicy Pop Game

This project utilizes [Playwright](https://playwright.dev/) to perform end-to-end and visual regression testing on the Juicy Pop game embedded within an iframe. It automates user interactions, captures screenshots, and compares them to baseline images to detect visual discrepancies.

## 📦 Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/arzhanikoski/PW-avatar.git
   cd PW-avatar
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Install Playwright Browsers:**

   ```bash
   npx playwright install
   ```

## 🚀 Running Tests

- **Run tests with HTML report:**

    npx playwright test --reporter html

- **View the test report:**

    npx playwright show-report

    Use the above commands to start running your test suite and review the results in an interactive HTML format.

- **Run All Tests:**

  ```bash
  npx playwright test
  ```

- **Run a Specific Test File:**

  ```bash
  npx playwright test tests/canvas.test.js
  ```

- **Run Tests in Headed Mode (with UI):**

  ```bash
  npx playwright test --headed
  ```

- **Debug Tests with Playwright Inspector:**

  ```bash
  npx playwright test --debug
  ```

## 🖼️ Visual Regression Testing

The project leverages Playwright's built-in screenshot comparison capabilities to perform visual regression testing.

### How It Works

1. **Baseline Screenshots:**
   On the first test run, Playwright captures baseline screenshots and stores them in the `tests/canvas.test.js-snapshots/` directory.

2. **Subsequent Test Runs:**
   In subsequent runs, Playwright captures new screenshots and compares them against the baseline images. If differences exceed the specified threshold, the test fails, and diff images are generated.

### Screenshot Comparison Example

```javascript
const screenshot = await canvas.screenshot();
expect(screenshot).toMatchSnapshot('gameInfo.png', { threshold: 0.15 });
```

- **Threshold:** Specifies the permissible pixel difference ratio. A threshold of `0.15` allows up to 15% difference.

### Screenshot Storage

- **Baseline Images:** Stored in `tests/canvas.test.js-snapshots/`.
- **Actual and Diff Images (on test failure):** Stored in `test-results/` directory with subfolders for each test run.

## 🧪 Test Structure

- **Test Files:** Located in the `tests/` directory.
- **Page Objects:** Encapsulated in the `pages/` directory, following the Page Object Model (POM) pattern for maintainability.
- **Selectors and Constants:** Defined in the `objects/` directory for centralized management.


## 📂 Directory Structure

```bash
PW-avatar/
├── objects/
│   └── canvas.objects.js       # Selectors and constants
├── pages/
│   └── juicy_pop_game.page.js  # Page Object Model for Juicy Pop game
├── tests/
│   └── canvas.test.js          # Test cases
├── tests/canvas.test.js-snapshots/  # Baseline screenshots
├── test-results/               # Test results and diff images
├── package.json
├── playwright.config.js
└── README.md
```

## 📖 References

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Visual Comparisons in Playwright](https://playwright.dev/docs/test-snapshots)
- [Running and Debugging Tests](https://playwright.dev/docs/running-tests)


## 🌐 Language-based Section Validation

A test.data.js file is used to validate game sections dynamically based on the language provided via the .env configuration.

Example structure in test.data.js:

export const gameData = {
  en: {
    gameInfo: 'GAME INFO',
    payTable: 'PAYTABLE'
  },
  fr: {
    gameInfo: 'INFOS JEU',
    payTable: 'TABLEAU DES GAINS'
  }
};

Your tests dynamically pick expected labels from this file depending on the LANGUAGE env variable.
