import rawData from "./puzzleInput.js";

function binaryToId(seat) {
  let rowRange = [...Array(128).keys()];
  let columnRange = [...Array(8).keys()];
  const rowChars = seat.slice(0, 7);
  const columnChars = seat.slice(7, 10);
  const row = rowChars.split("").reduce(findSeatId, rowRange);
  const column = columnChars.split("").reduce(findSeatId, columnRange);
  return row[0] * 8 + column[0];
}

function findSeatId(range, char) {
  let result;
  const half = Math.ceil(range.length / 2);
  switch (char) {
    case "F":
    case "L":
      result = range.splice(0, half);
      break;
    case "B":
    case "R":
      result = range.splice(-half);
      break;
  }
  return result;
}

// Set up
const seatArray = rawData.split("\n");
const seatIds = seatArray.map((seat) => binaryToId(seat));

// Part 1
const max = Math.max(...seatIds);
console.log("Part one: ");
console.log(max);

// Part 2
const seatList = seatIds.sort((a, b) => a - b);
// This finds the seat where the next seat is missing. Add 1 to find the missing seat
const nextSeatMissing = seatList.find(
  (val, idx) => val + 1 !== seatList[idx + 1]
);
console.log("Part 2:");
console.log(nextSeatMissing + 1);
