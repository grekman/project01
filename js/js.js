function sz() {
  var width = document.getElementById("calc-w").value;
  var depth = document.getElementById("calc-d").value;
  var height = document.getElementById("calc-h").value;
  var rashod = Math.ceil(width*depth*height*10/15);
  document.getElementById("out").innerHTML = rashod;
}
