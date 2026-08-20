menuShowHideFunction();
function menuShowHideFunction() {
    var menu = document.getElementById("drop-menu");
    var iconTexts = document.querySelectorAll(".custom-header-icon-text");
    var openBurger = document.getElementById("burger-open");
    var closeBurger = document.getElementById("burger-close");
    if (!menu.classList.contains("drop-menu-hidden")) {
      menu.classList.add("drop-menu-hidden");
      openBurger.style.display = "flex";
      closeBurger.style.display = "none";
      for (var i = 0, length = iconTexts.length; i < length; i++) {
         iconTexts[i].style.opacity = "0";
      }
    } else {
      menu.classList.remove("drop-menu-hidden");
      openBurger.style.display = "none";
      closeBurger.style.display = "flex";
      for (var i = 0, length = iconTexts.length; i < length; i++) {
         iconTexts[i].style.opacity = "1";
      }
    }
  } 