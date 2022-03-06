const { ethers } = require('hardhat');
require('dotenv').config({ path: '.env' });

async function main() {
  // CID of metadata URL from Pinata
  const metadataURL = 'ipfs://QmS5g47ZMbzrY49UNeFE3atENAy5w2zKemzg7ezsrsPvgT/';

  const oCozmozContract = await ethers.getContractFactory('OCozmoz');

  // deploy the contract
  const deployedOCozmozContract = await oCozmozContract.deploy(metadataURL);

  await deployedOCozmozContract.deployed();

  // print the address of the deployed contract
  console.log('OCozmoz Contract Address:', deployedOCozmozContract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
