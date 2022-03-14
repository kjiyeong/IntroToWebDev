// create an array of numbers
var testArray = [17, 42, 311, 5, 9, 10, 28, 7, 6];
// variable that will hold the results
var sum = 0;
//newElement statement into a prompt, so the user can enter a new value for the array
var newElement = prompt("Enter a number of your choice:");

// The term parse roughly means "interpret," so this statement tells JavaScript to interpret
 // the value entered by the user as an integer (Int). If we were using numbers with decimal
 // values, we could use parseFloat instead.
newElement = parseInt(newElement);

// testArray.push(newElement);

// create a loop that will look at each number in testArray and add each
// number to the current value of sum
for (var position = 0; position < testArray.length; position++) {
    sum += testArray[position];
}
// output the results to the console
console.log("The sum of " + testArray + " is: " + sum);
