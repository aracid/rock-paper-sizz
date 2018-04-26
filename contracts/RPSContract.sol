pragma solidity ^0.4.17;

contract RPSContract {
    address public players;
    

    // Retrieving the players
    //function getPlayers() public view returns (address[16]) {
    //    return players;
    //}

    function RPSContract() public {
    players = msg.sender;
    }


}