function toggleBurger() {
  const burgerBtn = document.querySelector("#burger");

  burgerBtn.addEventListener("click", function () {
    burgerBtn.classList.toggle("open");
  });
};
toggleBurger();

function showNotification() {
  const cookieNotif = document.querySelector(".cookie-notif__modal");
  const cookieClose = document.querySelectorAll(".cookie-notif__close");

  window.addEventListener("DOMContentLoaded", function () {
    if (cookieNotif && sessionStorage.getItem('cookieState') != 'shown') {
      cookieNotif.classList.add("show", "fade");
    } else if (sessionStorage.getItem('cookieState') == 'shown') {
      cookieNotif.classList.add("hide");
    }
  });
  for (let i = 0; i < cookieClose.length; i++) {
    cookieClose[i].addEventListener("click", function () {
      cookieNotif.classList.remove("show");
      sessionStorage.setItem('cookieState','shown');
    });
    cookieClose[i].addEventListener("click", function () {
      cookieNotif.addEventListener("transitionend", function () {
        cookieNotif.classList.add("hide");
      });
    });
  }
}
showNotification();