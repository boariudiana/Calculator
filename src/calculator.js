function add() {
  //vreau nnumerele
  var num1 = document.getElementById("nr1");
  var num2 = document.getElementById("nr2");
  var result = document.getElementById("result");

  result.innerText = parseInt(num1.value) + parseInt(num2.value);
}

function substract() {
  var num1 = document.getElementById("nr1");
  var num2 = document.getElementById("nr2");
  var result = document.getElementById("result");

  result.innerText = parseInt(num1.value) - parseInt(num2.value);
}

function multiply() {
  var num1 = document.getElementById("nr1");
  var num2 = document.getElementById("nr2");
  var result = document.getElementById("result");

  result.innerText = parseInt(num1.value) * parseInt(num2.value);
}
function divide() {
  var num1 = document.getElementById("nr1");
  var num2 = document.getElementById("nr2");
  var result = document.getElementById("result");

  result.innerText = parseInt(num1.value) / parseInt(num2.value);
}
