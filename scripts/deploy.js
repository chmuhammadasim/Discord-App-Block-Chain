const hre = require("hardhat");

const tokens = (n) => {
  return hre.ethers.utils.parseUnits(n.toString(), 'ether');
}

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  const NAME = "Dappcord";
  const SYMBOL = "DC";

  const Dappcord = await hre.ethers.getContractFactory("Dappcord");
  const dappcord = await Dappcord.deploy(NAME, SYMBOL);
  await dappcord.deployed();

  console.log(`Deployed Dappcord Contract at: ${dappcord.address}\n`);

  const CHANNEL_NAMES = ["general", "intro", "jobs"];
  const COSTS = [tokens(1), tokens(0), tokens(0.25)];

  for (let i = 0; i < CHANNEL_NAMES.length; i++) {
    const transaction = await dappcord.connect(deployer).createChannel(CHANNEL_NAMES[i], COSTS[i]);
    await transaction.wait();

    console.log(`Created text channel #${CHANNEL_NAMES[i]}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
