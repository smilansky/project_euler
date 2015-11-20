'use strict';
function isPrime(number) {

  if (number === 2) {
    return true;
  }
  for (var i=2; i <= Math.floor(Math.sqrt(number)); i+= 1) {
    
    if (number % i === 0){
      return false;
    }
  }
  return true;
  
}

function nthPrimeNumber(n) {
  var primes = [];
  var counter = 0;
  var number = 2;
  
  while (counter <= n){
    if (isPrime(number) === true) {
      primes.push(number);
      counter += 1;
      number += 1;
    } else {
      number += 1;
    }
    
  }
  
  return primes[n-1];
}

console.time("timer name");
console.log(nthPrimeNumber(10001)); 
console.timeEnd("timer name");
// 104743
