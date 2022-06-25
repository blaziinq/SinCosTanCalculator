function sin() {
  var input = parseFloat(document.getElementById("sin_input").value);
  document.getElementById("sin_input").value = "";
  document.getElementById("sin_answer").innerHTML =
    "The sine of " + input + " is " + Math.sin(input) + ".";
}

function cos() {
  var input = parseFloat(document.getElementById("cos_input").value);
  document.getElementById("cos_input").value = "";
  document.getElementById("cos_answer").innerHTML =
    "The cosine of " + input + " is " + Math.cos(input) + ".";
}

function tan() {
  var input = parseFloat(document.getElementById("tan_input").value);
  document.getElementById("tan_input").value = "";
  document.getElementById("tan_answer").innerHTML =
    "The tangent of " + input + " is " + Math.tan(input) + ".";
}
