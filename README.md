# Creative Bakery landing page

Implement landing page according to [Figma design](https://www.figma.com/file/dY3izAm0Vspsmra4lQWQIP/Bakerlab-FE-students?node-id=0%3A1) - Use BEM and SCSS

- The design 1440px
- Desktop 1280px
- Tablet 640px
- Mobile (> 320px)

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
    [DEMO LINK](https://alexsand-r.github.io/layout_creativeBakery/).
14. Copy `DEMO LINK` to the PR description.

> To update you PR repeat steps 7-11.

15. Check yourself using the [CHECKLIST](https://github.com/mate-academy/layout_creativeBakery/blob/master/checklist.md) when finished;

/**\*\*\*\***\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\***\*\*\*\***\*\***\*\*\*\***\*\***\*\*\*\***\*\*\*\***\*\*\*\***\*\***\*\*\*\***\
не працював старт
Онови пакет @parcel/transformer-sass до потрібної версії:
npm install @parcel/transformer-sass@^2.16.0 --save-dev
і потім
npm start

https://oleksandry0.github.io/layout_creativeBakery/

// .header {
// position: fixed;
// top: 0;
// left: 0;
// width: 100%;
// z-index: 110;
// background-color: transparent; // спочатку прозорий
// transition:
// background-color $transition-duration ease,
// box-shadow $transition-duration ease;

// &\_\_container-head {
// max-width: 1470px;
// margin: 0 auto;
// padding: 0 15px;
// }

// // .header\_\_body

// &\_\_body {
// display: flex;
// align-items: center;
// justify-content: space-between;
// padding: 16px 0;
// gap: 15px;

// @include tablet {
// padding: 28px 0;
// }
// }

// // .header\_\_logo

// &\_\_logo {
// display: flex;
// flex-shrink: 0;
// position: relative;
// z-index: 100;
// }

// // .header\_\_icon

// &\_\_icon {
// width: 100%;
// transition: transform $transition-duration ease 0s;

// &:hover {
// transform: scale(1.02);
// }
// }

// // .header\_\_action

// &\_\_action {
// display: flex;
// flex-direction: column;
// align-items: center;
// justify-content: center; // <-- додаємо це!

// position: fixed;
// top: 0;
// left: -100%;
// width: 100%;
// height: 100vh; // повертаємо висоту
// background-color: $background-gray;
// transform: translateX(0); // залишаємо по осі X для виїзду
// transition: transform $transition-duration ease;

// @include tablet {
// position: relative;
// height: auto;
// transform: none;
// background: transparent;
// flex-direction: row;
// justify-content: flex-end;
// left: 0;
// }
// }

// // .header\_\_list

// &\_\_list {
// display: flex;
// flex-direction: column;
// align-items: center;
// gap: 24px;
// margin-bottom: 24px;

// @include tablet {
// display: flex;
// align-items: center;
// margin-right: 64px;
// flex-direction: row;
// margin-bottom: 0;
// }
// }

// // .header\_\_link

// &\_\_link {
// line-height: 1.5;
// color: $color-text;
// text-transform: capitalize;

// @include tablet {
// transition: background-color $transition-duration ease;
// position: relative;

// &::after {
// content: '';
// position: absolute;
// left: 0;
// width: 0;
// bottom: -8px;
// height: 1px;
// background-color: $color-link;
// transition: all $transition-duration ease;
// }
// &:hover {
// &::after {
// width: 100%;
// }
// }

// &:focus {
// &::after {
// background-color: $link-focused;
// }
// }

// &:hover {
// color: $color-link;
// }

// &:focus {
// color: $link-focused;
// }
// }
// }

// // .header\_\_contact

// &\_\_contact-phone {
// display: block;
// background-image: url(/src/images/header/icon-phone.svg);
// width: 24px;
// height: 24px;
// background-repeat: no-repeat;
// background-size: contain;
// background-position: center;
// }

// &\_\_contact-link {
// text-transform: uppercase;
// color: $color-link;
// line-height: 1;
// letter-spacing: 2%;
// font-weight: $font-weight-medium;

// display: flex;
// align-items: center;
// gap: 4px;
// flex-shrink: 0;

// &:hover .header\_\_contact-phone {
// animation: phone-ring 0.8s infinite 0s ease;
// }
// }

// &\_\_burger {
// position: relative;
// z-index: 100;
// width: 24px;
// height: 24px;

// @include tablet {
// display: none;
// }
// }
// }
