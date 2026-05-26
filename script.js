const elements = document.querySelectorAll(".fade");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));

document.addEventListener("click", (e) => {

  if (e.target.classList.contains("preview")) {
    document.getElementById("viewer").style.display = "flex";
    document.getElementById("full-image").src = e.target.src;
  }

  if (e.target.id === "viewer" || e.target.id === "close-btn") {
    document.getElementById("viewer").style.display = "none";
  }

});