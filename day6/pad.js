import rawPuzzleData from "./puzzleInput.js";

// Part One
const anyoneSaidYes = rawPuzzleData
  .split("\n\n") // Convert to array per spec guidlines
  .map((entry) => entry.replace(/\s/g, "")) // Remove whitespace and transform entry to a single string
  .map((entry) => [...new Set([...entry])]) // Use the set to transform to an array of unique characters
  .map((entry) => entry.length) // Map each array to their lengths
  .reduce((acc, val) => acc + val, 0); // Sum the results

console.log("Part One: ");
console.log(anyoneSaidYes);

//Part Two

const testInput1 = `abc`; // 3
const testInput2 = `a
b
c`; // 0
const testInput3 = `ab
ac`; // 1
const testInput4 = `a
a
a
a`; // 1
const testInput5 = `b`; // 1

const surveyArray = rawPuzzleData
  .split("\n\n")
  .map((entry) => entry.split("\n"));
console.table(surveyArray);
function everyoneSaidYes() {}

// Convert Data to separate entries
