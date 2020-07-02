const outer = () => {
  let counter = 0

  const increment = () => {
    counter++
    console.log( counter )
  }
  return increment
}

const incrementFunction = outer()

console.log(incrementFunction())
console.log(incrementFunction())
console.log(incrementFunction())
console.log(incrementFunction())