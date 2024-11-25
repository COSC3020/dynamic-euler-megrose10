/*function factorial(n) {
    if(n === 0) return 1;
    else return n * factorial(n - 1);
}

function e(n) {
    if(n === 0) return 1;
    else return 1.0 / factorial(n) + e(n - 1);
}*/
function e(n) {
  let denominator = 0;
  for(let i = 0; i <= n; i++) {
    if(i == 0) {
      denominator = 1; 
    }
    else {
      for(let j = 1; j <= n; j++) {
        denominator *= j; 
      }
    }
    eNum += (1/denominator);
  }
}
