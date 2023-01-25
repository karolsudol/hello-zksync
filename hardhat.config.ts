import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-solc";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const GOERLI_URL = `https://goerli.infura.io/v3/${process.env.INFURA_KEY}`;

module.exports = {
  zksolc: {
    version: "1.2.2",
    compilerSource: "binary",
    settings: {},
  },
  //   defaultNetwork: "zkSyncTestnet",
  networks: {
    testnet: {
      zksync: true,
      url: "https://zksync2-testnet.zksync.dev",
      ethNetwork: "goerli",
    },
  },

  //   networks: {
  //     zkSyncTestnet: {
  //       url: "https://zksync2-testnet.zksync.dev",
  //       ethNetwork: "goerli", // Can also be the RPC URL of the network (e.g. `https://goerli.infura.io/v3/<API_KEY>`)
  //       //   ethNetwork: GOERLI_URL,
  //       zksync: true,
  //     },
  //   },
  solidity: {
    version: "0.8.16",
  },
  //   etherscan: {
  //     apiKey: {
  //       goerli: GOERLI_URL,
  //     },
  //     customChains: [
  //       {
  //         network: "zkSync-testnet",
  //         chainId: 280,
  //         zksync: true,
  //         url: "https://zksync2-testnet.zksync.dev",
  //         ethNetwork: "goerli",
  //         // urls: {
  //         //   apiURL: GOERLI_URL,
  //         //   browserURL: "https://goerli.explorer.zksync.io/",
  //         // },
  //       },
  //     ],
  //   },

  //   etherscan: {
  //     apiKey: process.env.ETHERSCAN_API_KEY,
  //     apiKey: process.env.BSCSCAN_API_KEY,
  //   },
};
