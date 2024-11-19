function toggleMenuButton(button) {
  button.classList.toggle("change");
}

window.addEventListener("load", () => {
  const banner = document.querySelector(".banner");

  // Exibe o banner com atraso para garantir que o header já está carregado
  if (banner) {
    setTimeout(() => {
      banner.classList.add("fade-in");
    }, 200); // Atraso de 500ms (ajuste conforme necessário)
  }
});
