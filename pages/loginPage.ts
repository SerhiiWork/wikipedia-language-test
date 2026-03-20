import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  // локатори
  usernameInput = this.page.locator('#wpName1');
  passwordInput = this.page.locator('#wpPassword1');
  loginButton = this.page.locator('#wpLoginAttempt');

  // дії
  async login(username: string, password: string) {
    await this.page.goto('https://en.wikipedia.org/w/index.php?title=Special:UserLogin');
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async verifyLoginSuccessful() {
    await expect(this.page).not.toHaveURL(/Special:UserLogin/);
  }
}