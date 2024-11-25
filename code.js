function factorial(n) {
  let fac = 1;
  //console.log("n = " + n);
  for(let i = 1; i <= n; i++) {
    //console.log("fac = " + fac);
    fac *= i; 
  }
  return fac;
}
//let test = 10;
//if(factorial(test) === 3628800) {
//  console.log("true!");
//}
//else {
//  console.log("false...value = " + factorial(test));
//}

function e(n) {
  let eNum = 0;
  let denominator = 0;
  for(let i = 0; i <= n; i++) {
    eNum += (1/(factorial(n)));
  }
  return eNum;
}
