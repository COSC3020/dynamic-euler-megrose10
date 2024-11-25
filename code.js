/*function factorial(n) {
    if(n === 0) return 1;
    else return n * factorial(n - 1);
}

function e(n) {
    if(n === 0) return 1;
    else return 1.0 / factorial(n) + e(n - 1);
}*/
function factorial(n) {
  let fac = 0;
  for(let i = 0; i <= n; i++) {
    if(i==0) {
      fac = 1;
    }
    fac *= i; 
  }
  return fac;
}

function e(n) {
  let denominator = 0;
  for(let i = 0; i <= n; i++) {
    eNum += (1/(factorial(n)));
  }
}
