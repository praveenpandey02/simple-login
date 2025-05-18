# simple-login
Hello there,
This repository demonstrates the automation of a simple login page. The tool used is Playwright. For the sake of brevity, it has one smoke test which will automatically run when a pull request is raised against the main branch. It has been set as a required check.

## To play around, you need to follow these steps
1. Clone this repository
2. Install dependencies
   ```
   yarn install
   ```
3. Run all tests
   ```
   yarn playwright test
   ```
4. Run only smoke tests
   ```
   yarn playwright test -g "@smoke"
   ```
5. To check flaky tests ('x' is the number of times you would like to run the same test automatically)
   ```
   yarn playwright test -g "subset of the test title you would like to check the flakiness of" --repeat-each=x
   ```
