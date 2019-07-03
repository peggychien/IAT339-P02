// Accodion options on products page

var acc = document.getElementsByClassName("filter-option-1");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("b-active");
    var values1 = this.nextElementSibling;
    if (values1.style.maxHeight){
      values1.style.maxHeight = null;
    } else {
      values1.style.maxHeight = values1.scrollHeight + "px";
    }
  });
}



var acc = document.getElementsByClassName("filter-option-2");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("p-active");
    var values2 = this.nextElementSibling;
    if (values2.style.maxHeight){
      values2.style.maxHeight = null;
    } else {
      values2.style.maxHeight = values2.scrollHeight + "px";
    }
  });
}