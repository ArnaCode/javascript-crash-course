// ----------------------------------------------
// 2- Writing Your First Program
// console.log("Hello World");

// ----------------------------------------------
// 3- Creating a Variable

// let fruit = "Apple";

// console.log(fruit);

// fruit = "Orange";

// console.log(fruit);

// ----------------------------------------------
// 4- Number Data Type
// let grade = 95;

// console.log(grade);
// console.log(typeof grade);
// console.log(typeof fruit);

// let score = 9.8;
// console.log(score);

// ----------------------------------------------
// 5- Arithmetic Operators

// let mathGrade = 90;
// let physicsGrade = 95;
// let chemistryGrade = 85;

// let totalGrade = mathGrade + physicsGrade + chemistryGrade;
// console.log(totalGrade);

// let aveGrade = totalGrade / 3;
// console.log(aveGrade);

// let loanAmount = 1000;
// let interestRate = 0.15;

// let interestAmount = loanAmount * interestRate;
// console.log(interestAmount);

// let netLoanAmount = loanAmount - interestAmount;
// console.log(netLoanAmount);

// ----------------------------------------------
// 6- String Data Type
// let firstName = "Muslim";
// console.log(firstName);

// let lastName = "Helalee";
// console.log(lastName);

// // let fullName = firstName + lastName;
// let fullName = firstName + " " + lastName;
// console.log(fullName);

// ----------------------------------------------
// 7- Boolean Data Type

// let passed = true;

// console.log(passed);
// console.log(typeof passed);

// let failed = false;
// console.log(failed);
// console.log(typeof failed);

// ----------------------------------------------
// 8- Logical Operators
/*
AND    ----> &&
OR     ----> ||
NOT    ----> !
*/

// let passed = true;
// let lightBulb = false;
// let grade = 90;

// console.log(passed && lightBulb);
// console.log(passed && passed);
// console.log(grade > 90 && grade < 100);

// console.log(passed || lightBulb);
// console.log(grade > 90 || grade < 100);

// console.log(!passed);
// console.log(!lightBulb);

// ----------------------------------------------
// 9- Undefined Data Type

// let passwrod = undefined;
// console.log(passwrod);
// console.log(typeof undefined);

// let score;
// console.log(score);

// score = 10;
// console.log(score);

// ----------------------------------------------
// 10- Null Data Type

// let userImage = null;

// console.log(userImage);
// console.log(typeof userImage);

// ----------------------------------------------
// 11- Object Data Structure

// let name = "George";
// let age = 2;

// let pet = {
//   name: "George",
//   age: 2,
// };

// console.log(typeof pet);

// console.log(pet);
// console.log(pet.name);
// console.log(pet.age);

// ----------------------------------------------
// 12- Array Data Structure

// let numbers = [1, 45, 65, 89, 69];
// console.log(numbers);
// console.log(typeof numbers);

// ----------------------------------------------
// 13- Comparisons Operators

// let firstScore = 95;
// let secondScore = 95;

// Checking if two values are equal
// console.log(firstScore == secondScore);

// Checking if two values are NOT equal
// console.log(firstScore != secondScore);

// Checking if one value is greater than the other value
// console.log(firstScore > secondScore);

// Checking if one value is smaller than the other value
// console.log(firstScore < secondScore);

// Checking if one value is greater  or equal to the other value
// console.log(firstScore >= secondScore);

// Checking if one value is smaller  or equal to the other value
// console.log(firstScore <= secondScore);

// console.log(null == undefined);

// ----------------------------------------------
// 14- Strict Equality Operators

// console.log(10 === 10);
// console.log(10 === "10");

// console.log("helalee" === "helalee");

// console.log(10 !== "10");

// console.log(null === undefined);

// ----------------------------------------------
// 15- Assignment Operators

// Simple AO
// let digit = 25;
// console.log(digit);

// // Increment AO
// digit += 12; // digit = digit + 12
// console.log(digit);

// // Decrement AO
// digit -= 22;
// console.log(digit);

// // Multiplication AO
// digit *= 3;
// console.log(digit);

// // Division AO
// digit /= 5;
// console.log(digit);

// ----------------------------------------------
// 16- If Statements

// Checking for a single Condition
// let eligibleAge = 21;
// let eligibleAge = 20;
// let eligibleAge = 17;

// if (eligibleAge > 18) {
//   console.log("Allowed to drive.");
// }

// if (eligibleAge >= 18) {
//   console.log("Allowed to drive.");
// }

// Checking for two Conditions
// if (eligibleAge >= 18) {
//   console.log("Allowed to drive");
// } else {
//   console.log("Not allowed to drive");
// }

// ----------------------------------------------
// 17- Truthy VS Falsy

/* Falsy Value

false
0
""
null
undefined
NaN
*/

// if (NaN) {
//   console.log("Truthy");
// } else {
//   console.log("Falsy");
// }

// console.log(10 / "hello");
// NaN - Not a Number
// console.log(typeof NaN);

// ----------------------------------------------
// 18- Switch Statements

// let age = 20;

// switch (age) {
//   case 21:
//     console.log("Allowed to drive");
//     break;

//   case 18:
//     console.log("Not allowed to drive");
//     break;

//   default:
//     console.log("Error, Enter an age again");
//     break;
// }

// ----------------------------------------------
// 19- Ternary Operator

// let eligibleAge = 18;

// if (eligibleAge >= 18) {
//   console.log("Allowed to drive");
// } else {
//   console.log("Not allowed to drive");
// }

// eligibleAge >= 18
//   ? console.log("Allowed to drive")
//   : console.log("Not allowed to drive");

// ----------------------------------------------
// 20- For Loops

// console.log(0);
// console.log(1);
// console.log(2);
// console.log(3);

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// ----------------------------------------------
// 21- While Loops

// let i = 0;

// while (i < 10) {
//   console.log(i);

//   i++;
// }

// ----------------------------------------------
// 22- Function Declarations

// console.warn("Security Breached");

// function myAge() {
//   let age = 30;
//   console.log(age);
// }

// Calling a function === Invoking a function === Executing a function

// myAge();

// Addition
// function addition(a, b) {
//   let result = a + b;
//   console.log(result);
// }

// function addition(a, b) {
//   console.log("Before the Return key");

//   return a + b;

//   console.log("After the Return key");
// }

// addition(10, 20);
// addition(10, 50);
// addition(150, 1050);

// console.log(addition(12.2, 32.5));

// let result = addition(10, 20);
// console.log(result);

// ----------------------------------------------
// 23- Function Expressions

// let multiplication = function (x, y) {
//   return x * y;
// };

// let result = multiplication(12, 32);
// console.log(result);

// ----------------------------------------------
// 24- Arrow Functions

// let division = (num1, num2) => {
//   if (num2 === 0) {
//     console.log("the divisor cannot be zero");
//     return;
//   }

//   return num1 / num2;
// };

// let result = division(10, 2);
// let result = division(10, 0);
// console.log(result);

// ----------------------------------------------
// 25- Scope

// Global Scope
// let hobbies = ["Watching Movies", "Taking Long Walks", "Earning Money"];

// console.log(hobbies);

// function things() {
//   console.log(hobbies);
// }
// things();

// Function/Local Scope
// function message() {
//   let user = "Sandra";
//   console.log(`Hi ${user}`);
// }

// message();

// console.log(user);

// Block Scope
// if (true) {
//   let num = 15;
//   const currency = "USD";
//   var salary = 10000;

//   // console.log(num);
//   // console.log(currency);
//   // console.log(salary);
// }

// console.log(num);
// console.log(currency);
// console.log(salary);

// {
//   var firstName = "Sandy";
//   // let firstName = "Sandy";
// }

// console.log(firstName);

// ----------------------------------------------
// 26- String Methods

// const test = "It is a good DAY to GO out for a WALK";

// console.log(test.length);
// console.log(test[0]);
// console.log(test[6]);
// console.log(test[test.length - 1]);

// console.log(test.toUpperCase());
// console.log(test.toLocaleLowerCase());

// // Getting the index of a substring
// console.log(test.indexOf("good"));
// console.log(test.indexOf("a", 15));

// console.log(test.includes("a"));
// console.log(test.includes("b"));
// console.log(test.includes("d"));
// console.log(test.includes("we"));
// console.log(test.includes("out"));

// console.log("hey".split(""));

// let greeting = "hey".split("");

// for (let i = 0; i < greeting.length; i++) {
//   console.log(greeting[i]);
// }

// console.log("hey".split(" "));
// console.log("hey".split("").reverse().join(""));

// ----------------------------------------------
// 27- Array Methods

// const items = [1, "Jan", 30, "Feb", true, 116, null, "Hi", "Apple"];

// console.log(items);
// console.log(items[0]);
// console.log(items[6]);
// console.log(items[-1]);
// console.log(items[5]);

// Adding to end
// items.push("Dec");
// console.log(items);

// Remove from end
// items.pop();
// console.log(items);

// Add to start
// items.unshift("WOW");
// console.log(items);

// Remove from start
// items.shift();
// console.log(items);

// console.log(items.length);

// for (let z = 0; z < items.length; z++) {
//   console.log(z);
//   console.log(items[z]);
// }

// items.forEach((item, i) => {
//   console.log(`The item: "${item}" has an index of "${i}"`);
// });

// const onlineProducts = [
//   { name: "The JS Bootcamp", price: 179 },
//   { name: "The Python Bootcamp", price: 159 },
//   { name: "CSS Layouts Masterclass", price: 129 },
//   { name: "CSS Flexbox Grid Course", price: 119 },
// ];

// const names = onlineProducts.map((item) => item.name);
// const prices = onlineProducts.map((item) => item.price);
// console.log(names);
// console.log(prices);

// ----------------------------------------------
// 28- Object Methods -> unordered (no index)

// let product = {
//   name: "Complete JavaScript Bootcamp",
//   price: 9.99,
//   "promo-available": true,
// };

// console.log(product);
// console.log(product.name);
// console.log(product.price);

// console.log(product["promo-available"]);
// console.log(product["name"]);
// console.log(product["price"]);

// let objKeys = Object.keys(product);
// console.log(objKeys);

// let objValues = Object.values(product);
// console.log(objValues);

// let objEntries = Object.entries(product);
// // console.log(objEntries);

// objEntries.forEach((entry) => {
//   let key = entry[0];
//   let value = entry[1];

//   console.log(`${key}: ${value}`);
// });

// ----------------------------------------------
// 29- Document Object Model (DOM === HTML)

// ===============================================================================
// ************************ Selecting HTML Elements
// ===============================================================================

// 1) ----------- Element Selector
// const title = document.querySelector("h1");
// console.log(title);
// console.log(title.innerText);

// // 2) ----------- Class Selector
// const description = document.querySelector(".desc");
// console.log(description);
// console.log(description.classList);

// // 3) ----------- ID Selector
const link = document.querySelector("#link");
// console.log(link);
// console.log(link.id);

// ===============================================================================
// ************************ Interacting with HTML Elements
// ===============================================================================
link.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.target);
  console.log(event.target.textContent);

  event.target.textContent = "Redirect";
  console.log(event.target.textContent);
});
