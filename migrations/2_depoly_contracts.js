var RPSContract = artifacts.require("RPSContract.sol");

module.exports = function(deployer) {
  deployer.deploy(RPSContract);
};