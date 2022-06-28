# Given a string str and a set of words dict, find the longest word in dict that is a subsequence of str.

## Solution:

```javascript
let str = "abppplee";
let dict = ["able", "ale", "apple", "bale", "kangaroo"];

function longestWord(str, dict) {
  const regex = new RegExp("^" + str.split("").join("?") + "$");
  console.log(regex);
  return dict
    .filter((word) => regex.test(word))
    .sort((a, b) => (a.length <= b.length ? 1 : -1))?.[0];
}
```

## Output:

```javascript
longestWord(str, dict);

// /^a?b?p?p?p?l?e?e$/
//  apple
```
