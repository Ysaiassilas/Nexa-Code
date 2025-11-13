// ===== ANIMAÇÃO DE SCROLL =====
window.addEventListener("scroll", () => {
  const elementos = document.querySelectorAll("section");
  const topo = window.innerHeight * 0.85;

  elementos.forEach(el => {
    const distancia = el.getBoundingClientRect().top;
    if (distancia < topo) el.classList.add("show");
  });
});

// ===== MENU RESPONSIVO =====
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  nav.classList.toggle("active");
});

// ===== FECHAR MENU AO CLICAR =====
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    menuToggle.classList.remove("active");
    nav.classList.remove("active");

    const alvo = document.querySelector(link.getAttribute("href"));
    window.scrollTo({ top: alvo.offsetTop - 60, behavior: "smooth" });
  });
});

// ===== EFEITO DE DIGITAÇÃO =====
const texto = "Transformamos ideias em soluções digitais";
const typedText = document.getElementById("typed-text");
let i = 0;
function digitar() {
  if (i < texto.length) {
    typedText.textContent += texto.charAt(i);
    i++;
    setTimeout(digitar, 80);
  }
}
window.addEventListener("load", digitar);

// ===== DARK MODE =====
const darkToggle = document.getElementById("dark-toggle");
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  darkToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
