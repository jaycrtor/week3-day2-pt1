/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:


***********************************************************************/

function sumArray(arr) {
  debugger
  if(arr.length === 0) return 0;
  debugger
  return arr[0] + sumArray(arr.slice(1))

  // if(num = 0) return 0
      // if(num > 0) return num + add(num,i-1)
      // if(num < 0) return -num + add(num,i+1)
  }




console.log(sumArray([1, 2, 3])); //  6
// sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}
