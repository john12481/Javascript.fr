function calculateShoppingSummary(totalAmount) {
  let discountPercentage = 10;
  let bonusPoints = 5;

  // Determine discount percentage and bonus points
  if (totalAmount > 100) {
    discountPercentage = 20;
    bonusPoints = 10;
  } else if (totalAmount >= 50 && totalAmount <= 100) {
    discountPercentage = 10;
    bonusPoints = 5;
  } else {
    discountPercentage = 0;
    bonusPoints = 0;
  }

  // Calculate discount and final amount
  let discountAmount = (totalAmount * discountPercentage) / 100;
  let finalAmount = totalAmount - discountAmount;
  console.log("--- Shopping Summary ---");
  console.log(`TotalAmount: $${totalAmount}`);
  console.log(`Discount Percentage: ${discountPercentage}%`);
  console.log(`Final Amount After Discount: $${finalAmount}`);
  console.log(`Bonus points earned: ${bonusPoints}`);
}
calculateShoppingSummary(30);
calculateShoppingSummary(75);
calculateShoppingSummary(150);
