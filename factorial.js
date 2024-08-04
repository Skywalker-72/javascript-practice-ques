// Write a function to find out the factorail of a given number n

const factorial = (n) => {
  if(n <= 1)
    return 1;
  else
    return n * factorial(n-1)
}

console.log(factorial(5))
