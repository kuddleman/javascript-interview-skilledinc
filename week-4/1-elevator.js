// Write a function Elevator that will return an object when called with the ’new’ keyword.
// The returned object should have three properties:
// - id
// - currentFloor (1-10)
// - direction (up, down, idle)

// And the following methods
// - reportStatus - prints “Elevator #{id} is at floor {floor}. 
// Moving {direction}” If moving or just idle if it’s idle.
// - moveToFloor(floor) - sets the floor to the passed in parameter and direction to ‘idle'

function Elevator ( id, currentFloor, direction ) {
  this.id = id
  this.currentFloor = currentFloor
  this.direction = direction
}

Elevator.prototype.reportStatus = function() {
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

Elevator.prototype.moveToFloor = function(floor) {
  this.currentFloor = floor
  this.direction = 'idle'
}


const elevator1 = new Elevator( 2, 3, "up" )
const elevator2 = new Elevator( 4, 6, "idle" )

console.log(elevator2)
console.log(elevator1.reportStatus())