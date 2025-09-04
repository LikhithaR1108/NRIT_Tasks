
function reverseString(str) {
  return String(str).split("").reverse().join("");
}

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of String(str)) {
    if (vowels.includes(char)) count++;
  }
  return count;
}

function sumToN(n) {
  n = parseInt(n, 10);
  if (Number.isNaN(n) || n < 1) return "Please enter an integer ≥ 1.";
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function isEvenOdd(num) {
  num = parseInt(num, 10);
  if (Number.isNaN(num)) return "Please enter a valid integer.";
  return num % 2 === 0 ? "Even" : "Odd";
}

const reverseForm = document.getElementById("reverse-form");
const reverseInput = document.getElementById("reverse-input");
const reverseOutput = document.getElementById("reverse-output");
reverseForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const text = reverseInput.value;
  const result = reverseString(text);
  reverseOutput.textContent = result;
});

const vowelsForm = document.getElementById("vowels-form");
const vowelsInput = document.getElementById("vowels-input");
const vowelsOutput = document.getElementById("vowels-output");
vowelsForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const text = vowelsInput.value;
  const count = countVowels(text);
  vowelsOutput.textContent = "Vowel Count: " + count;
});

const sumForm = document.getElementById("sum-form");
const sumInput = document.getElementById("sum-input");
const sumOutput = document.getElementById("sum-output");
sumForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const n = sumInput.value;
  const result = sumToN(n);
  sumOutput.textContent = "Sum: " + result;
});

const eoForm = document.getElementById("evenodd-form");
const eoInput = document.getElementById("evenodd-input");
const eoOutput = document.getElementById("evenodd-output");
eoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = eoInput.value;
  const result = isEvenOdd(value);
  eoOutput.textContent = result;
});

console.log("reverseString('JavaScript') =>", reverseString("JavaScript"));
console.log("countVowels('Fundamentals') =>", countVowels("Fundamentals"));
console.log("sumToN(10) =>", sumToN(10));
console.log("isEvenOdd(7) =>", isEvenOdd(7));
