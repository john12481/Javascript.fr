for (let num = 2; num <= 100; num++) {
  let isPrime = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    console.log(num);
  }
}
