import input from "./puzzleInput.js";

// Massage Data
function transformData(string) {
  const result = {
    low: null,
    high: null,
    letter: null,
    password: null,
  };

  const parts = string.split(" ");
  const subParts = parts[0].split("-");
  result.low = Number(subParts[0]);
  result.high = Number(subParts[1]);
  result.letter = parts[1][0];
  result.password = parts[2];

  return result;
}
function createPasswordArray(input) {
  const convertData = input.split("\n");
  return convertData.map((entry) => transformData(entry));
}

// Part One
function passwordValidator(obj) {
  const count = obj.password.split("").filter((letter) => letter === obj.letter)
    .length;
  return count >= obj.low && count <= obj.high;
}

function countValidPasswords(objArray, policy) {
  let result = 0;
  for (const obj of objArray) {
    if (policy(obj)) result++;
  }
  return result;
}
// Part Two
function newPolicy(pwordObj) {
  let pwordSplit = pwordObj.password.split("");
  return (
    (pwordSplit[pwordObj.low - 1] === pwordObj.letter &&
      pwordSplit[pwordObj.high - 1] !== pwordObj.letter) ||
    (pwordSplit[pwordObj.high - 1] === pwordObj.letter &&
      pwordSplit[pwordObj.low - 1] !== pwordObj.letter)
  );
}

// Results
const data = createPasswordArray(input);

console.log("Part 1:");
console.log(countValidPasswords(data, passwordValidator));
console.log("Part 2:");
console.log(countValidPasswords(data, newPolicy));
