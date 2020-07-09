

class Stack {

  constructor() {
    this.storage = {}
    this.size = 0
  }

  push( elem ) {
    this.storage[ this.size ] = elem
    this.size ++
  }

   pop() {
     let elem = this.storage[ this.size - 1 ]
     delete this.storage[this.size - 1]
     this.size --
     return elem
   }

   peek() {
     return this.storage[ this.storage.size - 1 ]
   }

   display() {
     return this.storage
   }
}

const myStack = new Stack()

myStack.push(2)
myStack.push(4)
myStack.push(6)

console.log(myStack.display())