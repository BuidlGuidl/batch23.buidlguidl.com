import { HardhatRuntimeEnvironment } from "hardhat/types";
import { ethers } from "hardhat";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract, Wallet } from "ethers";

/**
 * Seeds BatchRegistry with test wallets to allow the subgraph to query them locally
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const seedBatchRegistry: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  // We seed only on local network
  if (hre.network.name !== "localhost" && hre.network.name !== "hardhat") return;

  const { deployer } = await hre.getNamedAccounts();
  const { deployments } = hre;
  const { deploy } = deployments;

  // 1. BatchRegistry
  const batchRegistry = await hre.ethers.getContract<Contract>("BatchRegistry", deployer);

  // 2. Ensure CheckIn artifact exists
  try {
    await hre.artifacts.readArtifact("CheckIn");
  } catch {
    console.log("❌ CheckIn.sol not found.");
    console.log("Create: packages/hardhat/contracts/CheckIn.sol");
    return;
  }

  // 3. Create wallets
  const wallets = Array.from({ length: 5 }, () => Wallet.createRandom().connect(ethers.provider));

  // 4. Allowlist wallets
  await batchRegistry.updateAllowList(
    wallets.map(w => w.address),
    wallets.map(() => true),
  );

  // 5. Fund wallets
  const [funder] = await ethers.getSigners();
  for (const wallet of wallets) {
    await funder.sendTransaction({
      to: wallet.address,
      value: ethers.parseEther("1"),
    });
  }

  // 6. Deploy one CheckIn per wallet and check in
  for (const wallet of wallets) {
    const deploymentName = `CheckIn_${wallet.address}`;

    const deployment = await deploy(deploymentName, {
      contract: "CheckIn",
      from: deployer,
      args: [batchRegistry.target, wallet.address],
      log: true,
      autoMine: true,
    });

    const checkIn = await hre.ethers.getContractAt(
      "CheckIn",
      deployment.address,
      wallet, // owner signer
    );

    const tx = await checkIn.checkIn();
    await tx.wait();

    console.log(`✅ Wallet ${wallet.address} checked in via ${deployment.address}`);
  }
};

export default seedBatchRegistry;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
seedBatchRegistry.tags = ["BatchRegistry"];
