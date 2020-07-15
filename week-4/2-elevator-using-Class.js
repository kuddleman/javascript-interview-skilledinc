//Rewrite Problem 1 using keyword ‘class'


class Elevator {
  constructor( id, currentFloor, direction ) {
    this.id = id
    this.currentFloor = currentFloor
    this.direction = direction
  }

   reportStatus() {
    if ( this.direction === 'idle' ) {
      console.log(
                  `Elevator ${ this.id } is at ${ this.currentFloor }
                  and is idle`
                  )  
    } else {
    console.log(
                `Elevator ${ this.id } is at ${ this.currentFloor }. 
                Moving ${ this.direction }`
                )
    }            
  }

  moveToFloor(floor) {
    this.currentFloor = floor
    this.direction = 'idle'
  }
}

const elevator3 = new Elevator( 5, 3, "down" )
const elevator4 = new Elevator( 6, 12, "idle" )

console.log(elevator3)
console.log(elevator3.reportStatus())