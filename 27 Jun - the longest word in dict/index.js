let str = "abppplee";
let dict = ["able", "ale", "apple", "bale", "kangaroo"];

function longestWord(str, dict) {
  const regex = new RegExp("^" + str.split("").join("?") + "$");
  console.log(regex);
  return dict
    .filter((word) => regex.test(word))
    .sort((a, b) => (a.length <= b.length ? 1 : -1))?.[0];
}

console.log(longestWord(str, dict));
