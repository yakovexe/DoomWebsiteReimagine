window.addEventListener("load", () => {
  const banner = document.querySelector(".banner");

  if (banner) {
    setTimeout(() => {
      banner.classList.add("fade-in");
    }, 200);
  }
});

const menu = document.querySelector(".menu-navigation");

scrollableDiv.addEventListener("wheel", (e) => {
  e.stopPropagation();
});

function toggleMenuNavigation(button) {
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
