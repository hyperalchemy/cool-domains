require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

module.exports = {
  solidity: '0.8.17',
  networks: {
    mumbai: {
      url: process.env.STAGING_KEY,
      accounts: [process.env.STAGE_PRIVATE_KEY],
    },
    mainnet: {
      chainId: 1,
      url: process.env.PROD_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
