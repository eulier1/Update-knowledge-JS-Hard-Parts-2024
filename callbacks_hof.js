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

// Challenge 9
function objOfMatches(array1, array2, callback) {

  const objOfMatches = new Map()
  
  // For equal arrays length BigO(n)
  for (let i=0; i < array1.length; i++) {
		const match = callback(array1[i])
    
    if(match === array2[i]) {
      objOfMatches.set(array1[i], array2[i])
    }
  }
  
  /* For different arrays lenght BigO(n^2)
  for (let i=0; i < array1.length; i++) {
  	const match =	callback(array1[i])
		for (let j=0; j < array2.length; j++) {
      if (match === array2[j]) {
        objOfMatches.set(array1[i], array2[j])
      }
    }
  } */
  
  return objOfMatches
}
// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }


// Challenge 10
function multiMap(arrVals, arrCallbacks) {

  const multiMap = new Map()
  
  arrVals.forEach( (key) => {
    const value = arrCallbacks.map( callback => callback(key))
    multiMap.set(key, value)                                   
  })
  
  return multiMap
}

console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


// Challenge 11
function objectFilter(obj, callback) {
	const objectFilter = new Map()
  
  const keys = Object.keys(obj)
  const values = Object.values(obj)
  
	keys.forEach( (key, index) => {
    if(callback(key) === values[index]) {
     objectFilter.set(key, callback(key) )
    }
  })
  
  return objectFilter
  
}

 const cities = {
 London: 'LONDON',
 LA: 'Los Angeles',
 Paris: 'PARIS',
 };
console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}


// Challenge 12
function majority(array, callback) {
  
  const majority = array.filter( (element) => callback(element) ).length
  const minority = array.length - majority
  
  return majority > minority
  
}

// /*** Uncomment these to check your work! ***/
// const isOdd = function(num) { return num % 2 === 1; };
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false


// Challenge 13
function prioritize(array, callback) {

  let prioritize = []
  
  array.forEach( (element) => {
    if (callback(element)) {
      prioritize.unshift(element)
    } else {
      prioritize.push(element)
    }
  })
  
  return prioritize
  
}

// /*** Uncomment these to check your work! ***/
const startsWithS = function(str) { return str[0] === 's' || str[0] === 'S'; };
console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']


// Challenge 14
function countBy(array, callback) {

  const countBy = new Map()
  
  array.forEach( (element) => {
    let key = callback(element)
    if ( countBy.has(key) ){
     countBy.set(key, countBy.get(key) + 1) 
    } else {
      countBy.set(key, 1)
    }
  })
  
  return countBy
}

// /*** Uncomment these to check your work! ***/
 console.log(countBy([1, 2, 3, 4, 5], function(num) {
if (num % 2 === 0) return 'even';
 else return 'odd';
 })); // should log: { odd: 3, even: 2 }


// Challenge 15
function groupBy(array, callback) {

  const groupBy = new Map()
  
  array.forEach( (element) => {
   const key = callback(element)
   if ( !groupBy.has(key) ) {
     groupBy.set(key, [element])
   } else {
     groupBy.set(key, [...groupBy.get(key), element])
   }
  })
  
  return groupBy
  
}
// /*** Uncomment these to check your work! ***/
 const decimals = [1.3, 2.1, 2.4];
 const floored = function(num) { return Math.floor(num); };
 console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }


// Challenge 16
function goodKeys(obj, callback) {
  
  const goodKeys = new Array()
  
 for (const [key, value] of Object.entries(obj)) {
   if (callback(value)) goodKeys.push(key)
 }

  return goodKeys
}

// /*** Uncomment these to check your work! ***/
const sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
const startsWithBird = function(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']
