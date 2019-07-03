var acc = document.getElementsByClassName("productoverview");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("overview-active");
    var poverview = this.nextElementSibling;
    if (poverview.style.maxHeight){
      poverview.style.maxHeight = null;
    } else {
      poverview.style.maxHeight = poverview.scrollHeight + "px";
    }
  });
}


var acc = document.getElementsByClassName("productingredients");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("ingredient-active");
    var pingredient = this.nextElementSibling;
    if (pingredient.style.maxHeight){
      pingredient.style.maxHeight = null;
    } else {
      pingredient.style.maxHeight = pingredient.scrollHeight + "px";
    }
  });
}

