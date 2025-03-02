export default () => {
  const navbarEl = document.getElementById("navbar")!;
  document.getElementById("navbar-menu-open")!.addEventListener("click", () => {
    navbarEl.classList.add("open");
    navbarEl.classList.remove("close");
  });
  document
    .getElementById("navbar-menu-close")!
    .addEventListener("click", () => {
      navbarEl.classList.add("close");
      navbarEl.classList.remove("open");
    });
};
