//Rework the following code using pure functions as much as possible.
 
// A pure function:
// 1. Has a return value  
// 2. Is deterministic - the same input produces the same output
    // so no network requests, no Date.now...no random numbers
// 3. No side effects.  No mutating objects or arrays
   // no console.log, no HTTP calls, no changing the filesystem, no DOM queries


let balance = 1000;

function takeMoneyOut(amount) {
balance-=amount;
console.log('You have: ', balance);
}


function addMoney(amount) {
balance+=amount;
console.log('You have: ', balance);
}


function isEnough() {
if(balance > 1500) {
console.log('You have enough for the trip!');
} else {
console.log('You do not have enough for the trip!');
}
}