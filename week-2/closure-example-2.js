// write a functon that we can only call ONCE.
// if you run it first time it should print a timestamp with the label 'First run'
// if you try to run it agian it shouldn't do anything'

const outer = ()  => {
  let didRun = false

  const once = () => {
    if(!didRun) {
      didRun = true
      console.log('First run', Date.now())
    }
  }

  return once
}

const ourOnceFunc = outer()

console.log(ourOnceFunc())
console.log(ourOnceFunc())