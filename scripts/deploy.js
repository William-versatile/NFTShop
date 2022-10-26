const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");
async function main() {
  // Address of the whitelist contract that deployed in the whitelist NFT dApp
  const whitelistContract = WHITELIST_CONTRACT_ADDRESS;

  // URL from where we can extract the metadata for NFT
  const metadataURL = METADATA_URL;
  const NFTShopContract = await ethers.getContractFactory("NFTShop");

  const deployedNFTShopContract = await NFTShopContract.deploy(metadataURL, whitelistContract);
  await deployedNFTShopContract.deployed();

  console.log("NFTShop contract address is", deployedNFTShopContract.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
