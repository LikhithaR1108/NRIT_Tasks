// script.js – Calculator logic (simple & beginner-friendly)

// Pure function: does not touch the page
function calculate(a, b, op) {
  if (typeof a !== "number" || typeof b !== "number" || Number.isNaN(a) || Number.isNaN(b)) {
    return "Please enter valid numbers.";
  }

  if (op === "add") {
    return a + b;
  } else if (op === "subtract") {
    return a - b;
  } else if (op === "multiply") {
    return a * b;
  } else if (op === "divide") {
    if (b === 0) return "Cannot divide by zero.";
    return a / b;
  } else {
    return "Invalid operation.";
  }
}

// Handle the form submit
const calcForm = document.getElementById("calc-form");
const num1El = document.getElementById("num1");
const num2El = document.getElementById("num2");
const opEl = document.getElementById("operation");
const resultBox = document.getElementById("calc-result");
const clearBtn = document.getElementById("calc-clear");

calcForm.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page refresh

  const a = parseFloat(num1El.value);
  const b = parseFloat(num2El.value);
  const op = opEl.value;

  const result = calculate(a, b, op);
  resultBox.textContent = "Result: " + result;

  // Also log to console for practice
  console.log("calculate(", a, b, op, ") =>", result);
});

clearBtn.addEventListener("click", function () {
  num1El.value = "";
  num2El.value = "";
  opEl.value = "add";
  resultBox.textContent = "Result will appear here.";
});
