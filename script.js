function toggleMenu() {
  const menu = document.getElementById("side-menu");
  const overlay = document.getElementById("overlay");

  menu.classList.toggle("open");
  overlay.classList.toggle("visible");
}

function closeMenu() {
  const menu = document.getElementById("side-menu");
  const overlay = document.getElementById("overlay");

  menu.classList.remove("open");
  overlay.classList.remove("visible");
}
