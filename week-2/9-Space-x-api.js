/*
Create a program that will pull data from SpaceX api 'https://api.spacexdata.com/v3/history’ 
and display wikipedia link for each history event that comes back.
Wikipedia link is stored in the links object. Do not print null results.
Please implement using regular promises as well as using async/await syntax.
Use 'isomorphic-fetch’ library if you're working in coderpad.io

Your output should be something like:

https://en.wikipedia.org/wiki/Falcon_1
https://en.wikipedia.org/wiki/Commercial_Resupply_Services
https://en.wikipedia.org/wiki/Falcon_1
https://en.wikipedia.org/wiki/Dragon_Spacecraft_Qualification_Unit
https://en.wikipedia.org/wiki/SpaceX_COTS_Demo_Flight_1
https://en.wikipedia.org/wiki/SpaceX_CRS-1
https://en.wikipedia.org/wiki/Grasshopper_(rocket)
https://en.wikipedia.org/wiki/SES-8
https://en.wikipedia.org/wiki/SpaceX_CRS-3
https://en.wikipedia.org/wiki/SpaceX_CRS-5
https://en.wikipedia.org/wiki/Pad_abort_test
https://en.wikipedia.org/wiki/Falcon_9_flight_20
https://en.wikipedia.org/wiki/SpaceX_CRS-8
https://en.wikipedia.org/wiki/SES-10
https://en.wikipedia.org/wiki/SpaceX_CRS-11
https://en.wikipedia.org/wiki/Falcon_Heavy_test_flight
https://en.wikipedia.org/wiki/Bangabandhu-1
https://en.wikipedia.org/wiki/Telkom_Indonesia
*/

const fetch = require('isomorphic-fetch')

fetch('https://api.spacexdata.com/v3/history' )
.then( response => response.json() )
.then( data => {
  for ( let item of data ) {
    if (item.links.wikipedia) {
      console.log( item.links.wikipedia )
    }
  }
} )