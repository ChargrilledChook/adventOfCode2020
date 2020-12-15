import rawData from "./rawData.js";

// I have an off by one bug in the code for part two. I can't find the culprit but it seems a common problem.
// I've tried the common solutions and haven't had any luck yet

const validPassportKeys = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

function dataToPassportObj(entry) {
  const result = {};
  entry.map((field) => {
    const keyValuePair = field.split(":");
    const key = keyValuePair[0];
    const value = keyValuePair[1];
    result[key] = value;
  });
  return result;
}

const passportData = rawData
  .split("\n\n")
  .map((passport) => passport.split(/\s+/))
  .map((entry) => dataToPassportObj(entry));

//console.table(passportData);

function validatePassport(passport, validKeys) {
  if (!validKeys.every((key) => passport.hasOwnProperty(key))) return false;

  // old validation - return true;

  return validateProps(passport);
}

const testPassport = passportData[0];

//console.log(validatePassport(testPassport, validPassportKeys));

function countValidPassports(passportData, validPassportKeys) {
  let result = 0;
  for (let passport of passportData) {
    if (validatePassport(passport, validPassportKeys)) result += 1;
  }
  return result;
}

function validateProps(passport) {
  if (passport.byr < 1920 || passport.byr > 2002) return false;
  if (passport.iyr < 2010 || passport.byr > 2020) return false;
  if (passport.eyr < 2020 || passport.eyr > 2030) return false;
  if (!passport.hgt.includes("cm") && !passport.hgt.includes("in"))
    return false;
  if (passport.hgt.includes("cm")) {
    if (!(parseInt(passport.hgt) > 149 && parseInt(passport.hgt) < 194))
      return false;
  } else {
    if (!(parseInt(passport.hgt) > 58 && parseInt(passport.hgt) < 77))
      return false;
  }
  if (!passport.hcl.match(/#[a-f\d]{6}/)) return false;
  if (!["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(passport.ecl))
    return false;
  if (!passport.pid.match(/^\d{9}\b$/)) return false;

  //console.log(passport.hgt);
  heights.push(passport.hgt);
  return true;
}

const heights = [];
console.log(heights.sort());
countValidPassports(passportData, validPassportKeys);
//console.log(countValidPassports(passportData, validPassportKeys));
