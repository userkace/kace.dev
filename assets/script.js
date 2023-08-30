function hamburger() {
    var x = document.getElementById("nav-items");
    if (x.className === "items") {
      x.className += " responsive";
    } else {
      x.className = "items";
    }
  } 

  function hamburgerClose() {
    var x = document.getElementById("nav-items");
    x.className = "items";
  } 