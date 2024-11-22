function toggleMenuNavigation(button) {
  const menu = document.querySelector(".menu-navigation");

  toggleMenuButton(button);

  if (menu.style.visibility === "visible") {
    menu.style.visibility = "hidden";
    menu.style.transform = "translate(-100%)";
  } else {
    menu.style.visibility = "visible";
    menu.style.transform = "translate(0)";
  }
}

function toggleMenuButton(button) {
  button.classList.toggle("change");
}

document.addEventListener("DOMContentLoaded", () => {
  const navMenu = document.querySelector(".menu-navigation");

  // Prevent scrolling or touch propagation to the rest of the page
  navMenu.addEventListener("wheel", (event) => {
    event.stopPropagation(); // Prevents propagation to the page
    event.preventDefault();
  });
});
