let root = document.querySelector(":root");
let button = document.querySelector("#dark");

button.addEventListener('click', () => {
  event.preventDefault();
  root.classList.toggle('dark');
  })
