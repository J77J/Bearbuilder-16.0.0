menuShowHideFunction();
function menuShowHideFunction() {
    var x = document.getElementById("drop-menu-ul");
    var y = document.getElementById("burger-open");
    var z = document.getElementById("burger-close");
    if (x.style.display === "none") {
      x.style.display = "inline-flex";
      y.style.display = "none";
      z.style.display = "flex";
    } else {
      x.style.display = "none";
      y.style.display = "flex";
      z.style.display = "none";
    }
  } 