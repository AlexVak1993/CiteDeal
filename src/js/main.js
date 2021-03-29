function burgerToggle() {
  const burgerBtn = document.querySelector("#burger");

  burgerBtn.addEventListener("click", function () {
    burgerBtn.classList.toggle("open");
  });
}
burgerToggle();
