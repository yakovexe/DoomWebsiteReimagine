document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fade-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // Adiciona a classe que faz o fade-in
        }
      });
    },
    { threshold: 0.1 } // A lógica será ativada quando 10% da seção estiver visível
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});

let currentSection = 0; // Index da seção atual
const sections = document.querySelectorAll(".fade-section");

function scrollToSection(index) {
  const position = index * window.innerHeight; // Calcula a posição para scroll
  window.scrollTo({
    top: position,
    behavior: "smooth", // Rolagem suave
  });
}

window.addEventListener("wheel", (event) => {
  if (event.deltaY > 0 && currentSection < sections.length - 1) {
    currentSection++; // Rolar para baixo
  } else if (event.deltaY < 0 && currentSection > 0) {
    currentSection--; // Rolar para cima
  }
  scrollToSection(currentSection);
});

const slider = document.querySelector(".slider");
const navButtons = document.querySelectorAll(".slider-nav-button");

navButtons.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    // Move o slider para o índice clicado
    slider.style.transform = `translateX(-${index * 100}vw)`;

    // Atualiza a classe ativa no botão de navegação
    navButtons.forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");
  });
});

// Define o botão inicial como ativo
navButtons[0].classList.add("active");
