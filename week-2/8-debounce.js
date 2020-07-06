// Implement a function called debounce that accepts a function 
// and returns a new function that only allows invocation of the given 
// function after interval milliseconds have passed since the last time 
// the returned function ran.
// If you try to call the function before the interval 
// has passed it should print ’Too fast’

// See function definition and testing setups for more clarifications

function debounce(action, interval) {
  
  // your code here
    
}

//testing setup
const myDebounce = debounce(() => console.log('test'), 1000);

// test 1
myDebounce(); // test
myDebounce(); // too fast

// test 2
myDebounce(); // test
setTimeout(myDebounce, 2000); // test after 2 seconds

// test 3
myDebounce(); // test
setTimeout(myDebounce, 900); // too fast