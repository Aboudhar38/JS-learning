
// ===================================
// PART 1: CORE JAVASCRIPT
// ===================================


// Exercise 1: Display a message
console.log("Hello, JavaScript!");


// Exercise 2: Create variables
const firstName = "Abudhari";
let age = 19;
const isLearning = true;

console.log(firstName);
console.log(age);
console.log(isLearning);


// Exercise 3: Simple calculations
const a = 34;
const b = 12;

console.log("Sum:", a + b);
console.log("Difference:", a - b);
console.log("Product:", a * b);
console.log("Division:", a / b);


// Exercise 4: Work with strings
const city = "Kigali";

console.log(`I live in ${city}.`);


// Exercise 5: Check a number
const number1 = -3;

if (number1 > 0) {
    console.log("Positive");
} else if (number1 < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}


// Exercise 6: Even or odd
const number2 = 7;

if (number2 % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}


// Exercise 7: Count with a loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Challenge: Even numbers from 2 to 20
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}


// Exercise 8: Write a function
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("Aboudhar");


// Exercise 9: Work with an array
const foods = ["Rice", "Beans", "Fish", "Pizza", "Mango"];

console.log(foods[0]);
console.log(foods[foods.length - 1]);
console.log(foods.length);


// Exercise 10: Find the largest number
const numbers = [4, 17, 2, 29, 11];

let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

console.log("Largest number:", largest);


// ===================================
// PART 2: MINI CHALLENGES
// ===================================


// Exercise 11: Simple age checker
const myAge = 17;

if (myAge >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are under 18");
}


// Exercise 12: Multiplication table
const multiplicationNumber = 5;

for (let i = 1; i <= 12; i++) {
    console.log(
        `${multiplicationNumber} x ${i} = ${multiplicationNumber * i}`
    );
}


// Exercise 13: Shopping total
const prices = [12, 20, 25];

let total = 0;

for (const price of prices) {
    total += price;
}

if (total > 50) {
    total = total * 0.9;
}

console.log("Total price:", total);


// Exercise 14: Temperature converter
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

console.log("Temperature:", toFahrenheit(25));


// Exercise 15: Simple login check
const savedPassword = "learnJS123";
const enteredPassword = "learnJS122";

if (enteredPassword === savedPassword) {
    console.log("Access granted");
} else {
    console.log("Incorrect password");
}
