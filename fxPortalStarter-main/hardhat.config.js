require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: [process.env.PRIVATE_KEY],
    },
    goerli: {
      url: 'https://ethereum-goerli.publicnode.com',
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
