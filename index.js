// PART 1: ARRAYS
const fruits = ["mango", "banana", "orange"];

console.log(fruits[0]);
console.log(fruits.length);

fruits.push("apple");
fruits.pop();
fruits.unshift("avocado");
fruits.shift();

console.log(fruits.includes("banana"));
console.log(fruits.indexOf("orange"));

// PART 2: OBJECTS
const student = {
    name: "Aline",
    age: 21,
    course: "JavaScript"
};

console.log(student.name);
student.age = 22;
console.log(student.age);

// PART 3: SETS
const ids = new Set([10, 20, 20, 30]);

ids.add(40);
ids.delete(10);

console.log(ids.has(20));
console.log([...ids]);

// PART 4: MAPS
const scores = new Map();

scores.set("Aline", 85);
scores.set("Eric", 92);

console.log(scores.get("Aline"));
console.log(scores.has("Eric"));

scores.delete("Aline");

// PART 5: STRINGS
const message = "hello javascript";

console.log(message.length);
console.log(message.toUpperCase());
console.log(message);

// PART 6: STACKS
const stack = [];

stack.push("first");
stack.push("second");

console.log(stack.pop());

// PART 7: QUEUES
const queue = [];

queue.push("Aline");
queue.push("Eric");

console.log(queue.shift());

// PART 8: SEARCHING
const numbers = [8, 3, 10, 1];
const target = 10;

let foundIndex = -1;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
        foundIndex = i;
        break;
    }
}

console.log(foundIndex);

// PART 9: SORTING
const sortNumbers = [8, 3, 10, 1];

sortNumbers.sort((a, b) => a - b);

console.log(sortNumbers);


// =================================
// PART 2: GUIDED EXERCISES
// =================================

// EXERCISE 1: ARRAY BASICS

const cities = ["Kigali", "Huye", "Musanze", "Rubavu"];

console.log(cities[0]);
console.log(cities[cities.length - 1]);
console.log(cities.length);


// EXERCISE 2: MODIFY AN ARRAY

const tasks = ["study", "read"];

tasks.push("practise");
tasks.shift();

console.log(tasks);


// EXERCISE 3: OBJECT DETAILS

const book = {
    title: "Clean Code",
    author: "Robert Martin",
    year: 2008
};

console.log(book.title);

book.year = 2009;

console.log(book);


// EXERCISE 4: ARRAY OF OBJECTS

const students = [
    { name: "Aline", score: 80 },
    { name: "Eric", score: 92 },
    { name: "Maya", score: 75 }
];

for (const student of students) {
    console.log(student.name, student.score);
}


// EXERCISE 5: REMOVE DUPLICATES

const values = [1, 2, 2, 3, 4, 4, 5];

const uniqueValues = [...new Set(values)];

console.log(uniqueValues);


// EXERCISE 6: MAP PRACTICE

const prices = new Map();

prices.set("bread", 1200);
prices.set("milk", 1500);
prices.set("rice", 3000);

console.log(prices.get("milk"));


// EXERCISE 7: STACK PRACTICE

const browserPages = [];

browserPages.push("home");
browserPages.push("products");
browserPages.push("checkout");

const removedPage = browserPages.pop();

console.log(removedPage);
console.log(browserPages);


// EXERCISE 8: QUEUE PRACTICE

const customers = ["Aline", "Eric", "Maya"];

customers.push("David");

const servedCustomer = customers.shift();

console.log(servedCustomer);
console.log(customers);


// EXERCISE 9: SEARCH AN ARRAY

function linearSearch(items, target) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] === target) {
            return i;
        }
    }

    return -1;
}

console.log(linearSearch([8, 3, 10, 1], 10));


// EXERCISE 10: SORT NUMBERS

const sortValues = [14, 3, 27, 8, 1];

sortValues.sort((a, b) => a - b);

console.log(sortValues);


// =================================
// PART 3: MINI PROJECTS
// =================================


// MINI PROJECT 1: STUDENT GRADEBOOK

const gradebook = [
    { name: "Aline", score: 80 },
    { name: "Eric", score: 92 },
    { name: "Maya", score: 75 },
    { name: "David", score: 88 }
];

let totalScore = 0;
let topStudent = gradebook[0];

for (const student of gradebook) {
    console.log(student.name, student.score);

    totalScore += student.score;

    if (student.score > topStudent.score) {
        topStudent = student;
    }
}

const averageScore = totalScore / gradebook.length;

console.log("Average:", averageScore);
console.log("Highest:", topStudent.name, topStudent.score);


// MINI PROJECT 2: INVENTORY TRACKER

const inventory = new Map();

inventory.set("rice", 20);
inventory.set("beans", 15);
inventory.set("oil", 8);

inventory.set("sugar", 12);
inventory.set("rice", 25);

console.log(inventory.has("beans"));
console.log(inventory.get("rice"));

for (const [product, quantity] of inventory) {
    console.log(product, quantity);
}


// MINI PROJECT 3: BROWSER HISTORY

const history = [];

history.push("home");
history.push("about");
history.push("contact");

const removed = history.pop();

console.log("Removed page:", removed);

if (history.length > 0) {
    console.log("Current page:", history[history.length - 1]);
}

console.log(history);


// =================================
// PART 4: KNOWLEDGE CHECK
// =================================

console.log("1. Array");
console.log("2. Set");
console.log("3. Last In, First Out");
console.log("4. First In, First Out");
console.log("5. get()");
console.log("6. A numeric comparator sorts numbers by their numeric values.");