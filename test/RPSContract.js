var RPSContract = artifacts.require("./RPSContract.sol")

contract ("RPSContract", function(accounts)
{
    var contractInstance;
    it ("Initializes with human starting with 0 wins", function() {
    return RPSContract.deployed().then(function(instance) { 
        contractInstance = instance;
        return contractInstance.getWinCount();}).then(function(humanWinCount){
            assert.equal(humanWinCount.toNumber(),0, "Human starts at 0 wins");
        });
    });





});