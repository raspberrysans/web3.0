// https://eth-ropsten.alchemyapi.io/v2/O2KirOkl3f0SGk6oEYw2WghIxz5e_01P

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/O2KirOkl3f0SGk6oEYw2WghIxz5e_01P",
      accounts: [
        "c8cf514a9e89e2a4152030b76684bcd69eb99d08aed50382e82aff68155f9191",
      ],
    },
  },
};
