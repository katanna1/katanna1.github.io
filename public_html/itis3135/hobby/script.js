document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("main section");
  
    links.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        sections.forEach((section) => {
          section.style.display = "none";
        });
        const targetSection = document.getElementById(targetId);
        targetSection.style.display = "block";
      });
    });
  });
  