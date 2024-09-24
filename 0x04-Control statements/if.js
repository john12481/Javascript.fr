let age = 18;

//if(Condition){
//  what u want to happen if the condition is true
// }

if (age >= 18) {
  console.log("You can enter this site");
}

let temperature = 9;
if (temperature <= 10) {
  console.log("Its very cold");
}
let name = "maro";
if (name !== "john") {
  console.log("Invalid username ");
}

let score = 64;
if (score < 40) {
  console.log(`Your score is ${score} you failed`);
} else {
  console.log(`Your score is ${score} you passed`);
}

let didAssignment = true;
if (didAssignment) {
  console.log(`you can enter`);
} else {
  console.log(`you cannot enter`);
}

let score2 = 613;

if (score2 >= 70 && score2 <= 100) {
  console.log(`you had an A`);
} else if (score2 >= 60 && score2 <= 100) {
  console.log(`you had a B`);
} else if (score2 >= 50 && score2 <= 100) {
  console.log(`you had a C`);
} else {
  console.log(`Invalid score`);
}

let loan = 1000;
if (loan >= 50000) {
  console.log(`Eligble for loan`);
} else if (loan >= 30000 && loan <= 49999) {
  console.log(`Consider for loan`);
} else if (loan < 30000) {
  console.log(`Not elligble for loan`);
}
