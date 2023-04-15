const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';
const name = 'Web3reviewer Le1';
const merkleTree = new MerkleTree(niceList);
const index = niceList.findIndex(n => n === name);
console.log(index)
const proof = merkleTree.getProof(index);

async function main() {
  // TODO: how do we prove to the server we're on the nice list? 
  // find the proof that norman block is in the list 

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    // TODO: add request body parameters here!
    proof, name, 
  });

  console.log({ gift });
}

main();