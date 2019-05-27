const Web3 = require('web3')
const rpcURL = 'http://127.0.0.1:7545' // Your RCkP URL goes here
const web3 = new Web3(rpcURL)

const account1 = '0xf81a179E44Ff7CCeF4E363450E31934E9A7580C9'
const account2 = '0xC306D98781Eb85507EA3BF34198d9E0C3405B89E'

web3.eth.sendTransaction({
  from: account1,
  to: account2,
  value:web3.utils.toWei('1', 'ether')
},
(err, result ) => {
  console.log(result)
})
