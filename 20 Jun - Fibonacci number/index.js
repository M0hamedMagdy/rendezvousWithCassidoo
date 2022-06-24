// Given a Fibonacci number, give the previous Fibonacci number. If the number given is not a Fibonacci number, return -1.
// Given 0 return -1
// Given 1 reteun 0 (0+1)
// Given 2 retuen 1 (1+1)
// Given 3 retuen 2 (1+2)
// Given 4 retuen -1 not Fibonacci number

function previousFibonacci(num) {
  let prevNum = 0;
  let currNum = 1;

  while (currNum <= num) {
    if (currNum === num) return prevNum;
    currNum = prevNum + currNum;
    prevNum = currNum - prevNum;
  }
  return -1;
}

previousFibonacci(0);
previousFibonacci(1);
previousFibonacci(2);
previousFibonacci(3);
previousFibonacci(4);
