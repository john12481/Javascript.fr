let initialPrice = 100;
let discount = initialPrice * 0.1;
let priceAfterDiscount = initialPrice - discount;
let tax = priceAfterDiscount * 0.03;
let finalPrice = priceAfterDiscount + tax;

console.log(" The Initial Price is " + initialPrice);
console.log(
  " The Final Price after a 10% discount And 3% is " +
    initialPrice +
    finalPrice +
    " . "
);
