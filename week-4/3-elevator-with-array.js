


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



// Using your code from Problem 2. 
// Create 3 “elevators” and store them inside an array.

const allElevators = []

const elevator1 = new Elevator( 1, 3, "down" )
const elevator2 = new Elevator( 2, 12, "idle" )
const elevator3 = new Elevator( 3, 1, 'down')

allElevators.push(elevator1)
allElevators.push(elevator2)
allElevators.push(elevator3)


console.log( allElevators )
console.log (allElevators[0].direction)
// Write a function ‘dispatch' that takes floor and direction and will determine 
// which elevator should be dispatched to the requested floor  call moveToFloor method 
// on the appropriate elevator and return its id.

// Dispatch elevators according to the following priorities:
  // 1. Closest elevator AND moving towards the requested floor.
  // 2. Closest elevator  AND that’s idle.
  // 3. Closest elevator AND moving away from the requested floor.

const dispatch = ( floor, direction ) => {
  let leastNumFloorsAway = 200
  let indexOfClosest = 0

  // then just find closest elevator to the calling floor( parameter: floor )

  for ( let i = 0; i < allElevators.length; i++ ) {
     if ( Math.abs(allElevators[i].currentFloor - floor) < leastNumFloorsAway ) {
       leastNumFloorsAway = Math.abs(allElevators[i].currentFloor - floor)
       indexOfClosest = i
     }
  }
  // do we need to change the direction of the called elevator 
    // while it's being dispatched to the floor where it's needed?
    // Here is some optional code to take care of that condition:
  /*
  if ( allElevators[indexOfClosest].floor < floor ) {
    allElevators[indexOfClosest].direction = "up"
  } else if ( allElevators[indexOfClosest].floor > floor ) {
    allElevators[indexOfClosest].direction = "down"
  }
  */

  allElevators[ indexOfClosest ].moveToFloor(floor)

  return allElevators[ indexOfClosest ].id
}

