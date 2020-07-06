class Stack {

  constructor() {
    this.storage = []
  }

  push( elem ) {
    this.storage.push( elem )
  }

   pop() {
     return this.storage.pop()
   }

   peek() {
     return this.storage[ this.storage.length - 1 ]
   }
}

const myStack = new Stack