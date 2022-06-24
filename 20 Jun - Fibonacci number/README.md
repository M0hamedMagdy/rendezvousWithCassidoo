# Given a Fibonacci number, give the previous Fibonacci number. If the number given is not a Fibonacci number, return -1.

## Solution:

```javascript
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
```

## Output:

```javascript
previousFibonacci(0); // -1
previousFibonacci(1); // 0
previousFibonacci(2); // 1
previousFibonacci(3); // 2
previousFibonacci(4); // -1 not Fibonacci number
```
