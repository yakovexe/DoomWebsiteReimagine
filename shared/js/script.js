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
