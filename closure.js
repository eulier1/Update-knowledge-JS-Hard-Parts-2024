// CHALLENGE 1
function createFunction() {
  
  return () => (console.log("hello"))

}

// /*** Uncomment these to check your work! ***/
 const function1 = createFunction();
 function1(); // => should console.log('hello');


// CHALLENGE 2
function createFunctionPrinter(input) {
  
  function printer() {
    console.log(input)
  }
  
  return printer

}

// /*** Uncomment these to check your work! ***/
 const printSample = createFunctionPrinter('sample');
 printSample(); // => should console.log('sample');
 const printHello = createFunctionPrinter('hello');
 printHello(); // => should console.log('hello');


// CHALLENGE 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
 willCounter();
 willCounter();
 willCounter()
 jasCounter();
 willCounter();


function addByX(x) {
  
  let step = x
  
  function add(input) {
    let output = step + input
    console.log(output)
    return output
  }

  return add
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
 addByTwo(1); // => should return 3
 addByTwo(2); // => should return 4
 addByTwo(3); // => should return 5


const addByThree = addByX(3);
 addByThree(1); // => should return 4
 addByThree(2); // => should return 5

const addByFour = addByX(4);
 addByFour(4); // => should return 8
 addByFour(5); // => should return 9


// CHALLENGE 4
function once(func) {

let output

function callOnce(input) {
  if (output > 0) {
    return output
  } else {
    output = func(input)
    return output
  }
}

return callOnce

}

// /*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);
console.log(onceFunc(4));  // => should log 6
console.log(onceFunc(10));  // => should log 6
console.log(onceFunc(9001));  // => should log 6


// CHALLENGE 5
function after(count, func) {

let counter = 0

function callAfter() {
  counter++
  if ( counter >= count ) {
    // Avoiding a memory leak
    counter = undefined
    func()
  }
}

return callAfter

}

// /*** Uncomment these to check your work! ***/
const called = function() { console.log('hello') };
const afterCalled = after(3, called);
afterCalled(); // => nothing is printed
afterCalled(); // => nothing is printed
afterCalled(); // => 'hello' is printed


// CHALLENGE 6
function delay(func, wait, ...params) {

  setTimeout( () => { func(...params) }, wait)

}

// CHALLENGE 7
function rollCall(names) {
  
  let currentIndex = 0
  
  function call() {
    if (currentIndex < names.length) {
      const currentElement = names[currentIndex]
      console.log(currentElement)
      currentIndex++
      return currentElement
    } else {
      /* 
      Prevent memory leaks, by making this variable
      eligible to be deallocated by the garbage collector(GC)
      in others the GC is the responsible for doing that,
      you just tell notify it
			*/
      currentIndex = undefined
			console.log('Everyone accounted for')
      return undefined
    }
  }
  return call
}

// /*** Uncomment these to check your work! ***/
const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
rollCaller() // => should log 'Victoria'
rollCaller() // => should log 'Juan'
rollCaller() // => should log 'Ruth'
rollCaller() // => should log 'Everyone accounted for'



// CHALLENGE 8
function saveOutput(func, magicWord) {
  
  let memoize = new Map()
  
  function saveFn(input) {
    if (input ===  magicWord) {
      return memoize
    } else {
      memoize.set(input, func(input))
      return memoize
    }
  }
  
  return saveFn
}

// /*** Uncomment these to check your work! ***/
const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // => should log 4
console.log(multBy2AndLog(9)); // => should log 18
console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }


// CHALLENGE 9
function cycleIterator(array) {

  let currentIndex = 0
  
  function iterator() {
    if (currentIndex < array.length){ 
    	const element = array[currentIndex]
    	currentIndex++
    	return element
    } else {
      currentIndex = 0
      const element = array[currentIndex]
      currentIndex++
      return element
    }
  }

  return iterator
  
}

// /*** Uncomment these to check your work! ***/
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // => should log 'Fri'
console.log(getDay()); // => should log 'Sat'
console.log(getDay()); // => should log 'Sun'
console.log(getDay()); // => should log 'Fri'



// CHALLENGE 10
function defineFirstArg(func, arg) {

  return function (...params) {
    return func(arg, ...params)
  }
  
}

// /*** Uncomment these to check your work! ***/
const subtract = function(big, small) { return big - small; };
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // => should log 15


// CHALLENGE 11
function dateStamp(func) {
  
  let log = {}
  
  return function(...params) {
     log.date = new Date().toDateString()
     log.output = func(...params)
    return log
  }
}

// /*** Uncomment these to check your work! ***/
const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }


// CHALLENGE 12
function censor() {

  let censorLog = []
  
  return function (...arg) {
    if (arg.length === 2) {
      censorLog.push({ word: arg[0], replace: arg[1] })
    }
    if (arg.length === 1) {
      const wordToCensor = arg[0]
      // Here we're creating a new state
      const censorWord = censorLog.reduce(  
						(acc, censor) => acc = acc.replace(censor.word, censor.replace)
        , wordToCensor)
      return censorWord
    }
  } 
  
}

// /*** Uncomment these to check your work! ***/
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'


// CHALLENGE 13
function createSecretHolder(secret) {

  function getSecret() {
    console.log(secret)
    return secret
  }
  
  function setSecret(input) {
    secret = input
  }
  
  return { getSecret, setSecret }
  
}

// /*** Uncomment these to check your work! ***/
let obj = createSecretHolder(5)
 obj.getSecret() // => returns 5
 obj.setSecret(2)
 obj.getSecret() // => returns 2


// CHALLENGE 14
function callTimes() {
  let times = 0
  
  return () => { ++times; console.log(times)}

}

// /*** Uncomment these to check your work! ***/
let myNewFunc1 = callTimes();
let myNewFunc2 = callTimes();
myNewFunc1(); // => 1
myNewFunc1(); // => 2
myNewFunc2(); // => 1
myNewFunc2(); // => 2


// CHALLENGE 15
function roulette(num) {
	let n = num;
  function spin(){
    if(n > 1) {
      n--;
      return "spin";
    } else if (n == 1) {
      n--;
      return "win";
    } else {
      return "pick a number to play again";
    }
  }
  
  return spin
}

// /*** Uncomment these to check your work! ***/
const play = roulette(3);
console.log(play()); // => should log 'spin'
console.log(play()); // => should log 'spin'
console.log(play()); // => should log 'win'
console.log(play()); // => should log 'pick a number to play again'
console.log(play()); // => should log 'pick a number to play again'


// CHALLENGE 16
function average() {
  
  let averages = []
  
  return function(num) {

    if(!num) {
      return averages.reduce( (acc, currentValue) => acc += currentValue , 0) / averages.length
    } else {
      averages.push(num)
      return averages.reduce( (acc, currentValue) => acc += currentValue , 0) / averages.length
    }
  }

}

// /*** Uncomment these to check your work! ***/
const avgSoFar = average();
console.log(avgSoFar()); // => should log 0
console.log(avgSoFar(4)); // => should log 4
console.log(avgSoFar(8)); // => should log 6
console.log(avgSoFar()); // => should log 6
console.log(avgSoFar(12)); // => should log 8
console.log(avgSoFar()); // => should log 8


// CHALLENGE 17
function makeFuncTester(arrOfTests) {
  
  
  return function(callback) {
    
    return arrOfTests.every( (element, index) => callback(element[0]) === element[1])
    
  }
  
}

// /*** Uncomment these to check your work! ***/
const capLastTestCases = [];
capLastTestCases.push(['hello', 'hellO']);
capLastTestCases.push(['goodbye', 'goodbyE']);
capLastTestCases.push(['howdy', 'howdY']);
const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
const capLastAttempt1 = str => str.toUpperCase();
const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true