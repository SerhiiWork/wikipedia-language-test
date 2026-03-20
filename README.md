## Test case

<!-- Title -->

Зміна мови інтерфейсу для авторизованого користувача Вікіпедії

<!-- Preconditions -->

Користувач увійшов у систему. Мова інтерфейсу встановлена ​​на англійську.

<!-- Steps -->

1.зайти на https://en.wikipedia.org/wiki/Main_Page
2.клікнути на вкладку "Log in"
3.Увійдіть, використовуючи дійсні облікові дані
4.Натиснути на вкладці "Personal tools".
5.В вкладці "Personal tools", перейти у розділ "Preferences".
6.Найти розділ "Internationalisation".
7.Вибрати uk - (українську).
8.Натиснути "Save".

<!-- Expected result -->

Мова інтерфейсу зміниться

## How to run

1.встановити залежності
npm install
2.запустити тест локально
npx playwright test
3.через Docker
docker build -t wikipedia-language-test .
docker run --rm --env-file .env -v "$(pwd)/playwright-report:/app/playwright-report" wikipedia-language-test
4.відкриття HTML звіту
open playwright-report/index.html

<!-- Облікові дані зберігаються у файлі `.env` і не включаються до репозиторію. -->
