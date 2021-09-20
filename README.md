# Creative Bakery landing page
Implement landing page according to [Figma design](https://www.figma.com/file/dY3izAm0Vspsmra4lQWQIP/Bakerlab-FE-students?node-id=0%3A1) - Use BEM and SCSS

- Large screens 2560px
- Full HD 1920px
- The design 1600px
- Notebook 1280px
- Tablet 1024
- Mobile (> 320px)

## HR important moments
- Скорость анимаций на всем лендинге одинаковая (например увеличение при наведении или выезд блоков при скроле)
- Placeholder в формах подсказывают что именно ввести, а если стоит валидация формы, то понятно в каком формате вводить номер телефона
- Убедитесь, что с мобильных выглядит все аккуратно и без горизонтальной прокрутки
- Добавьте favicon
- Добавьте мягкий скролл при клике на меню до соответствующих блоков страницы
- Кнопку learn more ведет на блок About us
- Было бы реалистичней, если бы стрелки в разделе асортимента рядом с фото продукции были бы кликабельными (или скрыть эти стрелки, если нет других фото для слайдера)
- Кнопка "all bakeries" ведет на блок BakerShops
- В блоке "Bakershops" стоит добавить выпадающий список с перечнем городов и адресов, в которых есть данный магазин (а при попытке кликнуть на "Search" пусть форма просто очищается)
- При попытке отправить форму поиска Bakershops нет 405 ошибки, нужно чтобы данные вносились, форма очищалась, а после отправки перекидывало на верх страницы или происходила перезагрузка страницы
- Кнопки футер меню при нажатии должны вести на релевантные блоки лендинга
- В форме в конце страницы не забудь добавить плейсхолдер для поля с сообщением
- Важно, чтобы у пользователя была возможность удобно написать текст в 2-3 строки в поле message
- Контактная форма не должна принимать некорректные данные в поле с номером телефона (например, номер с буквой и не было никакой ошибки), лучше предусмотреть так, чтобы форма отправлялась только тогда, когда все поля заполнены корректно


## Github flow
1. **Fork** the repo.
2. **Clone** the forked one. (The project link should have your name but not `mate-academy`)
3. Run `npm install` (or just `npm i`).
4. Run `npm start`.
5. Open one more terminal window for the next steps.
6. `git checkout -b develop` - to create new branch and switch on it.
7. Write you code in `src` folder.
8. Run `npm run lint` and fix code style errors.
9. Run `npm run deploy` to deploy your solution to `gh-pages`.
10. `git add . && git commit -m 'solution'` to save your changes.
11. `git push origin develop` - to send you code for PR.
12. Create a Pull Request (PR) from your branch `develop` to branch `master` of original repo.
13. Replace `<your_account>` with your Github username in the
  [DEMO LINK](https://<your_account>.github.io/layout_creativeBakery/).
14. Copy `DEMO LINK` to the PR description.

> To update you PR repeat steps 7-11.
