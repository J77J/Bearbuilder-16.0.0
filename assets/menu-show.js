menuShowHideFunction();
function menuShowHideFunction() {
    var x = document.getElementById("drop-menu");
    var xul = document.getElementById("drop-menu-ul");
    var y = document.getElementById("burger-open");
    var z = document.getElementById("burger-close");
    if (!x.classList.contains("drop-menu-hidden")) {
      x.classList.add("drop-menu-hidden");
      y.style.display = "flex";
      z.style.display = "none";
    } else {
      x.classList.remove("drop-menu-hidden");
      y.style.display = "none";
      z.style.display = "flex";
    }
  } 