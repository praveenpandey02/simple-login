import test, { expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("");
});

test.describe("Menu functionality", () => {
  [
    { menuItem: "Home", expected: "Hello" },
    { menuItem: "Practice", expected: "Practice" },
    { menuItem: "Courses", expected: "Courses" },
    {
      menuItem: "Blog",
      expected: "Unlock Your Future: Selenium WebDriver Career Launcher Part 6",
    },
    { menuItem: "Contact", expected: "Contact" },
  ].forEach(({ menuItem, expected }) => {
    test(`should be able to open ${menuItem} page`, async ({ page }) => {
      await page.getByText(menuItem, { exact: true }).click();
      await expect(page.getByRole("heading", { name: expected })).toBeVisible();
    });
  });
  // ************ Instead of writing all of these seperately, we can follow the above style ************
  //   test("should be able to go to the PRACTICE page", () => {
  //     //TODO
  //   });

  //   test("should be able to go to the COURSES page", () => {
  //     //TODO
  //   });

  //   test("should be able to go to the BLOG page", () => {
  //     //TODO
  //   });

  //   test("should be able to go to the CONTACT page", () => {
  //     //TODO
  //   });
});
