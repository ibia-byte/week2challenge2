
var sumOfArrayLengths;
//fizzBuzz function taking two array parameters
function fizzBuzz(array1, array2) {
    //combined length of the arrays
    sumOfArrayLengths = array1.length + array2.length;
    //if sum of the array is divisble by 3, print fizz
    if (sumOfArrayLengths % 3 == 0 && sumOfArrayLengths % 5 !== 0) {
        console.log("Fizz");
    }
    //if sum of the array is divisible by 5, print buzz
    else if (sumOfArrayLengths % 5 == 0 && sumOfArrayLengths % 3 !== 0) {
        console.log ("Buzz");
    }
    //if sum of the array is divisible by 3 and, print fizzBuzz
    else if (sumOfArrayLengths % 3 == 0 && sumOfArrayLengths % 5 == 0) {
        console.log ("Fizzbuzz");
    }
    else  {
        console.log (sumOfArrayLengths);
    }
}
var x = [2, 3];

var y = [2, 5, 7];
console.log (fizzBuzz (x, y));

