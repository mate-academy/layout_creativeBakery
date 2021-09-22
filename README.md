# Creative Bakery landing page
Implement landing page according to [Figma design](https://www.figma.com/file/dY3izAm0Vspsmra4lQWQIP/Bakerlab-FE-students?node-id=0%3A1) - Use BEM and SCSS

- Large screens 2560px
- Full HD 1920px
- The design 1600px
- Notebook 1280px
- Tablet 1024
- Mobile (> 320px)

## Checklist for preparing a portfolio project for HR review

- The speed of animations is the same throughout the landing page (for example, increasing when hovering or moving blocks when scrolling)
- Placeholders in the forms suggest what to enter, and if there is a validation of the form, then it is clear in what format to enter the phone number
- Make sure everything looks neat on mobile and without horizontal scrolling
- Add favicon
- Add a smooth scroll for the whole page
- When you try to send the form there is no 405 error and the form is automatically cleared after submit and is scrolled to the top of the page or the page is reloaded
- The “learn more” button leads to the “About us” block
- It would be more realistic if the arrows in the hero section next to the product photo were clickable (or hide these arrows if there are no other photos for the slider)
- The "all bakeries" button leads to the BakerShops block
- In the "Bakershops" block, add a drop-down list with a list of cities and addresses in which this store is located (and when you try to click on "Search" let the form just be cleared)
- When you try to send the Bakershops search form there is no 405 error and the form is automatically cleared after submit and is scrolled to the top of the page or the page is reloaded
- Menu footer buttons when clicked should lead to the relevant blocks of the landing page
- The contact form should be self-cleaned upon submission and submit without 404/405 errors
- The user must have the opportunity to write 2-3 lines of text in the message field
- In the form at the end of the page, do not forget to add a placeholder for the message field
- The form should not accept incorrect data in a field with a phone number (for example, a number with a letter and there was no error), it is better to validate the input so that the form is sent only when all fields are filled incorrectly

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
