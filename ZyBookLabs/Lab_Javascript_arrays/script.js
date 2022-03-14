// Put your solution here
function divideArray(numbers) {
	let evenNums = [];
	let oddNums = [];
  
	numbers.forEach(function(value, index){
		if (value % 2 == 0) {
			evenNums.push(value);
		} else if (value % 2 == 1) {
			oddNums.push(value);
		}
	});
	evenNums.sort(function(a,b){
		return a - b;
	});
	oddNums.sort(function(a,b){
		return a - b;
	});
	console.log("Even numbers:");
	if (evenNums.length == 0) {
		console.log("None");
	}
	else {
		evenNums.forEach(function(value, index) {
			console.log(value);
		});
	}
	console.log("Odd numbers:");
	if (oddNums.length == 0) {
		console.log("None");
	}
	else {
		oddNums.forEach(function(value, index) {
			console.log(value);
		});
	}
}
