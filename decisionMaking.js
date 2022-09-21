// This exercise file is a little different from the others you have seen so far. Read carefully!
// Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
// Spend some time changing the variables and running the file to see how the story changes.


var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  "You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!";
} else if (bearChoice === 2) {
  "You tell the bear the " + bearClothing + " is too small and it starts to cry!";
} else if (bearChoice === 3) {
  "You run as fast as you can into the next room. It's full of snakes!";
} else {
  "You stay with the bear and become it's best friend!";
}


// Questions
// 1. In English, using technical vocabulary, describe what is happening between lines 12 and 16.
// In lines 12-14 we are declaring two conditionals. The First is a if statement where our conditional is (if the variable doorchoice stricly equates to 1)
//after that we give out command for if that conditions is met which is {Bear clothing equals hat}, so the bear gets a hat if the doorchoice is 1. After that we declare an else statement
// for if the condition is not met. In this example if the condition is not met then the bear instead wears a hat.

// 2. What variable has a new value assigned to it after the first if statement executes?
// Since the condition is met (doorchoice strictly equals 1), the bearclothing variable is changed to a string value of "hat"

// 3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
//Since the condition found in our if statement is NOT met, the else statement below would be run and the bearclothing variable would be changed to a string value of "scarf"

// 4. In English, using technical vocabulary, describe what is happening between lines lines 25 and 33.
//In lines 25-33 we are declaring 4 conditionals, the first is an if statement where our condition is (if the bearchoice variable directly equates to 1)
// after that we give our command for if the condition is met which is a console.log with a concatenation of text and our bear clothing variable
//The next line is a else if conditional for if the 1st if statements condition is not met (bearChoice does NOT equal 1) and if it instead is equal to two
// We then make another command with another concatation of bearChoice and text. This process repeats itself with another else if statement
// until the final conditional else is run where we simply console log some text

// 5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
// If the value of the variable was 3 the code would stop runing at the 2nd else if condition and
// our terminal would log the text "You run as fast as you can into the next room. It's full of snakes!"

// 6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
// If the doorChoice was changed to 1 the clothing variable would be changed to "hat" and if the bearChoice was changed to 2
//the first else if conditional would be run and the terminal would log "You tell the bear the hat is too small and it starts to cry!"

// 7. What is your favorite ending?
//my favorite is doorChoice 1 where the bear wears a hat and bearChoice 1 where the bear shows you a secret passage out.
