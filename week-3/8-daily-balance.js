// Please calculate the ending daily balance, given the list of the following transactions, starting balance and dates.
// What is the complexity of your solution?
// Assume all transactions are debits (meaning you only need to subtract them). 
// You only need to provide daily balance for the dates in the dates array.
// Your output should look something like this:

// 1/1/2019 - 675
// 1/2/2019 - 675
// 1/3/2019 - 605
// 1/4/2019 - 605
// 1/5/2019 - 405


const startBalance = 1000;
const dates = ['1/1/2020', '1/2/2020', '1/3/2020', '1/4/2020', '1/5/2020'];

const transactions = [
  { 
    date: '1/3/2020',
    amount: 20,
  },
  { 
    date: '1/1/2020',
    amount: 100,
  },
  { 
    date: '1/3/2020',
    amount: 50,
  },
  { 
    date: '1/1/2020',
    amount: 150,
  },
  { 
    date: '1/5/2020',
    amount: 200,
  },
  { 
    date: '1/1/2020',
    amount: 75,
  },
];

