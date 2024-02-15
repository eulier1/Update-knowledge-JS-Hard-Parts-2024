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
console.log(reduce(nums, add, 0));   //-> 8}


// Challenge 7
function intersection(arrays) {

  return arrays.reduce( (acc, currentValue, index) => {
    	return acc.filter( (element) => currentValue.includes(element) )
  })
}

console.log(intersection([[5, 10, 15], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]));
// should log: [5, 15]


// Challenge 8
function union(arrays) {
  
  return arrays.reduce( (acc, currentValue) => {
    const notIncludedElements = currentValue.filter( (element) => !acc.includes(element) )
    console.log(`accu: ${acc}, currentValue: ${currentValue}, returns : ${notIncludedElements}`)
    return acc.concat(notIncludedElements)
  })

}

console.log(union([[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]]));
// should log: [5, 10, 15, 88, 1, 7, 100]