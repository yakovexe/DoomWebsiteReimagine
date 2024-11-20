window.addEventListener("load", () => {
  const banner = document.querySelector(".banner");

  if (banner) {
    setTimeout(() => {
      banner.classList.add("fade-in");
    }, 200);
  }
});
