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
let startY = 0; // Posição inicial do toque

// Função para rolar suavemente para a seção
function scrollToSection(index) {
  index = Math.max(0, Math.min(index, sections.length - 1)); // Limita o índice
  currentSection = index; // Atualiza a seção atual
  const position = index * window.innerHeight;
  window.scrollTo({
    top: position,
    behavior: "smooth",
  });
}

// Rolagem com o mouse
window.addEventListener("wheel", (event) => {
  if (event.deltaY > 0 && currentSection < sections.length - 1) {
    currentSection++; // Rolar para baixo
  } else if (event.deltaY < 0 && currentSection > 0) {
    currentSection--; // Rolar para cima
  }
  scrollToSection(currentSection);
});

// Capturar início do toque
document.addEventListener("touchstart", (event) => {
  startY = event.touches[0].clientY; // Posição inicial do toque
});

// Detectar movimento do toque
document.addEventListener("touchend", (event) => {
  const endY = event.changedTouches[0].clientY; // Posição final do toque
  const diffY = startY - endY;

  if (diffY > 50 && currentSection < sections.length - 1) {
    currentSection++; // Deslize para cima (próxima seção)
  } else if (diffY < -50 && currentSection > 0) {
    currentSection--; // Deslize para baixo (seção anterior)
  }
  scrollToSection(currentSection);
});

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slider img");
const navButtons = document.querySelectorAll(".slider-nav a");

let currentIndexX = 0; // Slide atual
let startX = 0; // Posição inicial do toque

// Função para mover o slider
function moveToSlide(index) {
  // Limitar o índice para evitar valores fora do intervalo
  currentIndexX = Math.max(0, Math.min(index, slides.length - 1));

  // Atualizar a posição do slider
  slider.style.transform = `translateX(-${currentIndexX * 100}vw)`;

  // Atualizar os botões de navegação
  updateNavButtons(currentIndexX);
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

// Capturar o início do toque para o carrossel
slider.addEventListener("touchstart", (event) => {
  startX = event.touches[0].clientX; // Coordenada inicial do toque
});

// Detectar o movimento do toque no carrossel
slider.addEventListener("touchend", (event) => {
  const endX = event.changedTouches[0].clientX; // Coordenada final do toque
  const diffX = startX - endX;

  if (diffX > 50) {
    // Deslize para a esquerda (próximo slide)
    moveToSlide(currentIndexX + 1);
  } else if (diffX < -50) {
    // Deslize para a direita (slide anterior)
    moveToSlide(currentIndexX - 1);
  }
});
