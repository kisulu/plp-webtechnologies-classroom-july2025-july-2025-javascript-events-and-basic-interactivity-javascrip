// 🚀 Part 1: Variables, Data Types, Operators, Conditionals
let userName = prompt("Enter your name:");
let hour = new Date().getHours();
let greeting;

if (hour < 12) {
  greeting = "Good morning, " + userName + "!";
} else if (hour < 18) {
  greeting = "Good afternoon, " + userName + "!";
} else {
  greeting = "Good evening, " + userName + "!";
}

document.getElementById("greeting").textContent = greeting;

// ❤️ Part 2: Functions
function calculateTotal(price, quantity) {
  let total = price * quantity;
  document.getElementById("total").textContent =
    "Total price = " + total + " Ksh";
}

// Another custom function: Format a string
function formatName(name) {
  return name.trim().toUpperCase();
}
console.log("Formatted name:", formatName(userName));

// 🔁 Part 3: Loops
let numbers = [1, 2, 3, 4, 5];
let listElement = document.getElementById("numberList");

// Example 1: For loop
for (let i = 0; i < numbers.length; i++) {
  let li = document.createElement("li");
  li.textContent = "Number: " + numbers[i];
  listElement.appendChild(li);
}

// Example 2: While loop (countdown)
let countdown = 5;
while (countdown > 0) {
  console.log("Countdown: " + countdown);
  countdown--;
}

// 🌐 Part 4: DOM Manipulation
let toggleBtn = document.getElementById("toggleBtn");
let message = document.getElementById("message");

toggleBtn.addEventListener("click", function () {
  message.classList.toggle("hidden");
});

// Another DOM interaction: change text dynamically
message.addEventListener("mouseover", function () {
  message.textContent = "You hovered over me!";
});

message.addEventListener("mouseout", function () {
  message.textContent = "This message can be toggled!";
});
