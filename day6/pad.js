import rawPuzzleData from "./puzzleInput.js";

// Part One
const convertedData = rawPuzzleData
  .split("\n\n") // Convert to array per spec guidlines
  .map((entry) => entry.replace(/\s/g, "")) // Remove whitespace and transform entry to a single string
  .map((entry) => [...new Set([...entry])]) // Use the set to transform to an array of unique characters
  .map((entry) => entry.length) // Map each array to their lengths
  .reduce((acc, val) => acc + val, 0); // Sum the results

console.log(convertedData);
