// Implement Queue data structure 
// with the standard enqueue and dequeue methods.
// What is the complexity of each method?

class Node {
  constructor( value ) {
    this.value = value
    this.next = null
  }
}

class MyQueue {
  
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  enqueue(item) {
   // create a new node
   const newNode = new Node(item)
   // if there is nothing in the queue, set first and last to newNode
   if( !this.first ) {
     this.first = newNode
     this.last = newNode
   } else {
   // else set the next property on the current last to be newNode
   // set the last property to be newNode
     this.last.next = newNode
     this.last = newNode
   }
     return ++this.size
  }

  dequeue() {
    // if there is no first property, return null
    if ( !this.first ) {
      return null
    }
    
    let deQueuedFirst = this.first
    //store the first property in a variable

    //If the first same as the last( e.g only one node exists in the queue )
    if ( this.first === this.last ){
    //Set first and last to be null
      this.first = null
      this.last = null
    } 
    //else, set the first property to be the next property of first
    this.first = this.first.next
    //decrement size by one
    this.size --
    //return the value of the node dequeued
    return deQueuedFirst
  }
  
}