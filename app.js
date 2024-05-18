const iconClose = document.querySelector(".icon__close");
const iconOpen = document.querySelector(".icon__open");
const menuMovil = document.querySelector(".container__menuMovil")

iconClose.addEventListener("click", () => {
  iconOpen.style.display = "block";
  iconClose.style.display = "none";
  menuMovil.classList.remove("open")
});

iconOpen.addEventListener("click", () => {
  iconOpen.style.display = "none";
  iconClose.style.display = "block";
  menuMovil.classList.add("open")
})