const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeLabel = document.getElementById("themeLabel");

// Ícones do tema
const iconPaths = {
  blue: "./assets/images/icons/icon-cookie-blue.svg",
  pink: "./assets/images/icons/icon-cookie-pink.svg",
};

const themeNames = {
  blue: "Blue",
  pink: "Pink",
};

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  if (themeIcon) themeIcon.src = iconPaths[theme];
  if (themeLabel) themeLabel.textContent = themeNames[theme];
  localStorage.setItem("theme", theme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "blue" ? "pink" : "blue";
  applyTheme(newTheme);
}

// ========== DRAG COM SUPORTE A TOUCH + CLIQUE CORRETO ==========
function makeDraggable(element) {
  let isDragging = false;
  let startX, startY, offsetX, offsetY;

  // Carrega posição salva
  const savedPos = JSON.parse(localStorage.getItem("themeTogglePosition"));
  if (savedPos) {
    element.style.left = savedPos.x;
    element.style.top = savedPos.y;
    element.style.right = "auto";
    element.style.bottom = "auto";
  }

  function savePosition(x, y) {
    localStorage.setItem("themeTogglePosition", JSON.stringify({ x, y }));
  }

  function clampToViewport() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const elementWidth = element.offsetWidth;
    const elementHeight = element.offsetHeight;

    let x = parseFloat(element.style.left) || 0;
    let y = parseFloat(element.style.top) || 0;

    // Garante que continue visível
    x = Math.max(0, Math.min(x, viewportWidth - elementWidth));
    y = Math.max(0, Math.min(y, viewportHeight - elementHeight));

    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
  }


  function startDrag(e) {
    const event = e.type === "touchstart" ? e.touches[0] : e;

    isDragging = false;
    startX = event.clientX;
    startY = event.clientY;

    offsetX = event.clientX - element.getBoundingClientRect().left;
    offsetY = event.clientY - element.getBoundingClientRect().top;

    document.addEventListener("mousemove", onDrag);
    document.addEventListener("mouseup", endDrag);
    document.addEventListener("touchmove", onDrag);
    document.addEventListener("touchend", endDrag);
  }

  function onDrag(e) {
    const event = e.type === "touchmove" ? e.touches[0] : e;

    const dx = event.clientX - startX;
    const dy = event.clientY - startY;

    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
      isDragging = true;
    }

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const elementWidth = element.offsetWidth;
    const elementHeight = element.offsetHeight;

    let x = event.clientX - offsetX;
    let y = event.clientY - offsetY;

    // Limita o botão dentro da tela
    x = Math.max(0, Math.min(x, viewportWidth - elementWidth));
    y = Math.max(0, Math.min(y, viewportHeight - elementHeight));

    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
    element.style.right = "auto";
    element.style.bottom = "auto";

  }

  function endDrag(e) {
    document.removeEventListener("mousemove", onDrag);
    document.removeEventListener("mouseup", endDrag);
    document.removeEventListener("touchmove", onDrag);
    document.removeEventListener("touchend", endDrag);

    if (!isDragging) {
      toggleTheme(); // Só troca se não foi arrastado
    } else {
      savePosition(element.style.left, element.style.top);
    }
  }

  element.addEventListener("mousedown", startDrag);
  element.addEventListener("touchstart", startDrag);

  // Corrige posição ao redimensionar
  window.addEventListener("resize", clampToViewport);

}

// ========== INICIALIZAÇÃO ==========
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "blue";
  applyTheme(savedTheme);
  makeDraggable(themeToggle);
});
