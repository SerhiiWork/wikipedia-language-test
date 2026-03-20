import { Page, expect } from '@playwright/test';

export class PreferencesPage {
  constructor(private page: Page) {}

  async goToPreferences() {
    await this.page.goto('https://en.wikipedia.org/wiki/Special:Preferences');
  }

  async changeLanguage(languageCode: string) {
    await expect(this.page.locator('select[name="wplanguage"]')).toBeAttached();

    await this.page.locator('select[name="wplanguage"]').selectOption(languageCode, { force: true });
    await this.page.locator('#prefcontrol input[type="submit"], #prefcontrol button[type="submit"]').first().click({ force: true });
  }

  async verifyLanguageChanged(expectedText: string) {
    await expect(this.page.locator('body')).toContainText(expectedText);
  }
}