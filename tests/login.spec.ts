import { expect, test, type Page } from "@playwright/test";

const username = process.env.USER_NAME as string;
const password = process.env.PASSWORD as string;

test.beforeEach(async ({ page }) => {
  await page.goto("");
});

test.describe("positive", () => {
  test("should login when username and password are correct @smoke", async ({
    page,
  }) => {
    await page.getByLabel("username").fill(username);
    await page.getByLabel("password").fill(password);
    await page.getByRole("button", { name: "submit" }).click();
    await expect(
      page.getByRole("heading", { name: "Logged In Successfully" })
    ).toBeVisible();
  });
});

test.describe("negative", () => {
  test("should show an invalid username error when username field is empty", async ({
    page,
  }) => {
    await page.getByLabel(`password`).fill(password);
    await page.getByRole(`button`).click();
    await expect(page.locator("css=div#error")).toHaveText(
      "Your username is invalid!"
    );
  });

  test("should show invalid password error when password field is empty", async ({
    page,
  }) => {
    await page.getByLabel("username").fill(username);
    await page.getByRole(`button`).click();
    await expect(page.locator("css=div#error")).toHaveText(
      "Your password is invalid!"
    );
  });
});
