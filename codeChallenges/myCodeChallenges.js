//Write a JavaScript program that defines a variable that stores an Number.
//The program should print out the String "even" if the Number is even, and the String "odd" if the Number is odd.
// var number = 28
//
// if (number % 2 === 0){
//   console.log("even")
// } else {
//   console.log("odd")
// }

//Write a JavaScript program that prints out a String or Number: The printed value will depend on the value of an Number.
//If the Number is a mulitple of 3, print "Fizz". If the Number is a multiple of 5, print "Buzz".
//If the Number is a multiple of both 3 and 5, print "FizzBuzz". If the Number is not a multiple of either, print the Number itself.

let fizzbuzz= [];

for (let i = 1; i < 17; i++){
  if ( i % 3 == 0 && i % 5 == 0){
    fizzbuzz.push('fizzbuzz')
  }
  else if ( i % 3 == 0 ){
    fizzbuzz.push('fizz')
  }
  else if ( i % 5 == 0 ){
    fizzbuzz.push('buzz')
  }
  else {
    fizzbuzz.push(i)
  }
}
console.log(fizzbuzz)
