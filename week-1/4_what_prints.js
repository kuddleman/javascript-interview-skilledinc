// What prints if you run the following code? Why?

var counter = 1

function outerCounter(){
  counter++
  var counter = 2

  function innerCounter() {
    counter++
    var counter = 3
    console.log(counter)
  }
  innerCounter()
}

outerCounter()

// we'll get 3 from the console.log.  It takes it from line 11