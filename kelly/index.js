// 1 0 1


//parseInt()

// all I have if the head node and a pointer to the next

[ 1, 0, 1 ]

// up to 20 nodes.

// find the value in base 10


const convertToBase10 = ( head ) => {

   let node = head
   
   let stringOfNodes = ''
  // join the linked list by looping

  // result = 0;
  // result = result * 2 + node.val
  
  while(node) {
    stringOfNodes += node.val
    node = node.next 
  }

  //pass the joined string to parseInt()
  const result = parseInt( stringOfNodes, 2 )


  return result
}