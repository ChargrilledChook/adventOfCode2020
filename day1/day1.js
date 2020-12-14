import { rawData } from "./puzzleInput.js";
// Part One - Which two sum to 2020? find then multiply together

const twentyTwenty = function twentyTwenty(numbers) {
  let result;
  for (const num of numbers) {
    for (const num2 of numbers) {
      if (num + num2 === 2020) result = [num, num2];
    }
  }
  return result[0] * result[1];
};

// Part Two - Which three sum together
const twentyTwentyThree = function twentyTwentyThree() {
  let result;
  for (const num of numbers) {
    for (const num2 of numbers) {
      for (const num3 of numbers) {
        if (num + num2 + num3 === 2020) result = [num, num2, num3];
      }
    }
  }
  return result[0] * result[1] * result[2];
};

const convertData = function convertDataToArray(input) {
  return rawData.split("\n").map((val) => +val);
};

const numbers = convertData(rawData);
console.log("Part 1:");
console.log(twentyTwenty(numbers));
console.log("Part 2:");
console.log(twentyTwentyThree(numbers));
