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
const slides = document.querySelectorAll(".slider img");
const navButtons = document.querySelectorAll(".slider-nav a");

let currentIndex = 0; // Slide atual
let startX = 0; // Posição inicial do toque

// Função para mover o slider
function moveToSlide(index) {
  // Limitar o índice para evitar valores fora do intervalo
  currentIndex = Math.max(0, Math.min(index, slides.length - 1));

  // Atualizar a posição do slider
  slider.style.transform = `translateX(-${currentIndex * 100}vw)`;

  // Atualizar os botões de navegação
  updateNavButtons(currentIndex);
}

// Função para atualizar a classe ativa nos botões de navegação
function updateNavButtons(activeIndex) {
  navButtons.forEach((btn, index) => {
    if (index === activeIndex) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

// Clique nos botões de navegação
navButtons.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    moveToSlide(index);
  });
});

// Capturar o início do toque
slider.addEventListener("touchstart", (event) => {
  startX = event.touches[0].clientX; // Coordenada inicial do toque
});

// Detectar o movimento do toque
slider.addEventListener("touchend", (event) => {
  const endX = event.changedTouches[0].clientX; // Coordenada final do toque
  const diffX = startX - endX;

  if (diffX > 50) {
    // Deslize para a esquerda (próximo slide)
    moveToSlide(currentIndex + 1);
  } else if (diffX < -50) {
    // Deslize para a direita (slide anterior)
    moveToSlide(currentIndex - 1);
  }
});
