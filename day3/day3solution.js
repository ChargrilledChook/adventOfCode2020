import rawData from "./treeData.js";

// Part One
const treeArray = rawData.split("\n");

function tobogganSlide(treeArray, rightDir, downDir) {
  const tree = "#";
  let result = 0;
  let position = 0;
  let len = treeArray[0].length;
  for (let i = 0; i < treeArray.length; i += downDir) {
    if (treeArray[i][position] === tree) result++;
    position = (position + rightDir) % len;
  }
  return result;
}

// Part Two
const slideTypes = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];

function multiplySlides(slides) {
  return slides.reduce((acc, val) => acc * tobogganSlide(treeArray, ...val), 1);
}

console.log("Part 1:");
console.log(tobogganSlide(treeArray, 3, 1));
console.log("Part 2:");
console.log(multiplySlides(slideTypes));
