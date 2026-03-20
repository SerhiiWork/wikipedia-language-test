import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { PreferencesPage } from '../pages/preferencesPage';
import * as dotenv from 'dotenv';

dotenv.config();

const username = process.env.WIKI_USERNAME!;
const password = process.env.WIKI_PASSWORD!;

test('змінюємо мову інтерфейсу Wikipedia', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const prefPage = new PreferencesPage(page);

  await loginPage.login(username, password);
  await loginPage.verifyLoginSuccessful();

  await prefPage.goToPreferences();
  await prefPage.changeLanguage('uk');
  await prefPage.verifyLanguageChanged('Вийти');
});