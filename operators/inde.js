//  Arithmetic operators
let a = 4;
let b = 3;

let addition = a + b;
let sub = a - b;
console.log("addition of " + a + "and " + b + "is:" + addition);

let c = 3;
let d = 4;

let multiply = c * d;
let divide = c / d;
console.log(" Multiplication  of " + c + " and " + d + " is: " + multiply);
console.log(" Division of " + c + " and " + d + " is: " + divide);

// Number of days
let days = 3;
let numberofHours = days * 24;
let numberofMin = days * 60;
let numberofSec = numberofMin * 60;

console.log(
  " There Are " +
    numberofHours +
    " Hours," +
    numberofMin +
    " Mintues," +
    " and " +
    numberofSec +
    " Seconds in " +
    days +
    " Days "
);

// Increamental
let num = 4;
num++;
console.log(num);

let num2 = 5;
num2--;
console.log(num2);

let num3 = 6;
console.log(num++);

console.log(num3);

let num4 = 8;
console.log(++num4);

let num5 = 10;
num5 = num5 + 5;
console.log(num5);
// or
num5 += 5;

// comparison opeartors
let num6 = 5;
let num7 = "5";

console.log(num6 == num7);

console.log(num6 === num7);

// Not equal to
let num8 = 5;
let num9 = 5;

console.log(num8 !== num9);

// greater than and less than
let num10 = 14;
let num11 = 10;

console.log(num10 > num11);
console.log(num10 < num11);

// Logical Operators
let isStudent = true;
let hasPaid = true;

console.log(isStudent && hasPaid);
console.log(isStudent || hasPaid);

let isHungry = true;
console.log(isHungry);
