document.addEventListener("DOMContentLoaded", function () {
  const btnMobile = document.getElementById("btn-mobile");
  const nav = document.getElementById("nav");

  function toggleMenu() {
    nav.classList.toggle("active");
  }

  btnMobile.addEventListener("click", toggleMenu);
});
