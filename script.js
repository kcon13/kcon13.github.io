

function viewCV() {
  var x = document.getElementById("cvDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


    function viewJAMA() {
      var x = document.getElementById("jamaDiv");
      var y = document.getElementById("jamaButton")
      if (x.style.display === "none" | x.style.display === "" ) {
        x.style.display = "block";
        y.innerHTML = "Hide JAMA Letter";
      } else {
        x.style.display = "none";
        y.innerHTML = "View JAMA Letter";
      }
    }



var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}