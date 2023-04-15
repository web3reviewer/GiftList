const MerkleTree = require('./MerkleTree');
const niceList = require('./niceList');
const verifyProof = require('./verifyProof');

// create the merkle tree for the whole nice list
const merkleTree = new MerkleTree(niceList);

// get the root
const root = merkleTree.getRoot();
console.log(root)
// find the proof that norman block is in the list 
const name = 'Web3reviewer Le';
const index = niceList.findIndex(n => n === name);
console.log(index)
const proof = merkleTree.getProof(index);

const fakeProof = [...proof]
fakeProof.push({
    data: '6b2e557394f7e23dbbf67c1d7fa1d6152e5b62f55edbb9b425807b7247b9bd87',
    left: true
  })
console.log(proof);
// verify proof against the Merkle Root
console.log( verifyProof(fakeProof, name, root) ); // true, Norman Block is in the list!

// TRY IT OUT: what happens if you try a name not in the list, or a fake proof?