function factorial(n) {
  let fac = 1;
  //console.log("n = " + n);
  for(let i = 1; i <= n; i++) {
    //console.log("fac = " + fac);
    fac *= i; 
  }
  return fac;
}
let test = 10;
//if(factorial(test) === 3628800) {
/*if(e(test) === 2.7182818011463845) {
  console.log("true!");
}
else {
  console.log("false...value = " + e(test));
}*/

function e(n) {
  let eNum = 0;
  for(let i = 0; i <= n; i++) {
    //console.log("denominator = " + factorial(i));
    eNum += (1/(factorial(i)));
  }
  return eNum;
}
