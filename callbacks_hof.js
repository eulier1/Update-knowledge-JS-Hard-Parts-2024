// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
  const result = num + 2
	return result 
}

// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));


// Challenge 2
function addS(word) {
	const result = word + "s"
  return result
}

// uncomment these to check your work
console.log(addS('pizza'));
console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
	const result = []
  for(let i = 0; i < array.length; i++) {
    result.push(callback(array[i]))
  }
  return result
}

console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {
  for(let i = 0; i < array.length; i++) {
    callback(array[i])
  }
}

// see for yourself if your forEach works!

let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];
forEach(letters, function(char) {
  alphabet += char;
});

console.log(alphabet);

// Challenge 5
function mapWith(array, callback) {
  forEach(array, callback)
}


// Challenge 6
function reduce(array, callback, initialValue) {
	let accumulator = initialValue
	  
	for(let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i])
  }
  
  return accumulator
}

const nums = [4, 1, 3];
const add = function(a, b) { return a + b; }
console.log(reduce(nums, add, 0));   //-> 8