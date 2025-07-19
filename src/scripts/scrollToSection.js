document.addEventListener("DOMContentLoaded", function () {
  const scrollBtn = document.getElementById("scrollToAbout");
  const aboutSection = document.getElementById("about-us");

  if (scrollBtn && aboutSection) {
    scrollBtn.addEventListener("click", () => {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    });
  }
});
