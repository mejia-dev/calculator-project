// Business Logic

// Operators
function add(num1,num2) {
  return num1 + num2;
}

function subtract(num1,num2) {
  return num1 - num2;
}

function multiply(num1,num2) {
  return num1 * num2;
}

function divide(num1,num2) {
  return num1 / num2;
}

function calculate(num1,num2) {
  if (document.querySelector("input[name='operator']:checked").value === "add") {
    return add(num1,num2);
  } else if (document.querySelector("input[name='operator']:checked").value === "subtract") {
    return subtract(num1,num2);
  } else if (document.querySelector("input[name='operator']:checked").value === "multiply") {
    return multiply(num1,num2);
  } else if (document.querySelector("input[name='operator']:checked").value === "divide") {
    return divide(num1,num2);
  }
}

window.addEventListener("load", function() {
document.getElementById("calculator").addEventListener("submit", getNumbers)
} )

// UI Logic

function getNumbers(event) {
  event.preventDefault();
  let num1 = parseInt(document.getElementById("inputBox1").value);
  let num2 = parseInt(document.getElementById("inputBox2").value);
  let result = calculate(num1,num2);
  document.getElementById("result").innerText = result;
}
