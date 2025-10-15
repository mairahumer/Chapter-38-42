// 1. Write a custom function power ( a, b ), to calculate the value of a raised to b.
function power(a, b) {
  if (b === 0) {
    return 1; 
  }
  if (a === 0) {
    return 0; 
  }
  let result = 1;
  if (b > 0) {
    for (let i = 0; i < b; i++) {
      result *= a;
    }
  } 
  else {
    for (let i = 0; i < Math.abs(b); i++) {
      result *= a;
    }
    result = 1 / result; 
  }

  return result;
}       
console.log(power(2, 3)); 
console.log(power(5, 0));  
console.log(power(3, -2)); 
console.log(power(0, 5));  

// 2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, ...
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return true; 
  } else {
    return false; 
  }
}
const year1 = 2020;
if (isLeapYear(year1)) {
  console.log(`${year1} is a leap year.`);
} else {
  console.log(`${year1} is not a leap year.`);
}
const year2 = 1900;
if (isLeapYear(year2)) {
  console.log(`${year2} is a leap year.`);
} else {
  console.log(`${year2} is not a leap year.`);
}
const year3 = 2000;
if (isLeapYear(year3)) {
  console.log(`${year3} is a leap year.`);
} else {
  console.log(`${year3} is not a leap year.`);
}
const year4 = 2023;
if (isLeapYear(year4)) {
  console.log(`${year4} is a leap year.`);
} else {
  console.log(`${year4} is not a leap year.`);
}

// 3. If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c) where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

// Function 1 to compute semi-perimeter S
function semiPerimeter(a, b, c) {
  return (a + b + c) / 2;
}
function areaOfTriangle(a, b, c) {
  const s = semiPerimeter(a, b, c);
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return area;
}

// Example use:
const a = 3, b = 4, c = 5;
console.log(areaOfTriangle(a, b, c));  

// 4. Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

function calculateAverage(m1, m2, m3) {
  const sum = m1 + m2 + m3;
  const avg = sum / 3;
  return avg;
}
function calculatePercentage(m1, m2, m3) {
  const sum = m1 + m2 + m3;
  const totalPossible = 3 * 100;   
  const percent = (sum / totalPossible) * 100;
  return percent;
}
function mainFunction(m1, m2, m3) {
  const avg = calculateAverage(m1, m2, m3);
  const percentage = calculatePercentage(m1, m2, m3);
  
  console.log("Average marks:", avg.toFixed(2));
  console.log("Percentage:", percentage.toFixed(2) + "%");
  
  return {
    average: avg,
    percentage: percentage
  };
}
const marks1 = 75, marks2 = 80, marks3 = 90;
mainFunction(marks1, marks2, marks3);

