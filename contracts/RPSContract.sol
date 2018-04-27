pragma solidity ^0.4.2;

contract RPSContract {
    // Store etherem amount that we will bet with.
    // Store total ether used in vote.
    // Current Wins in a row!
    
    address creator;
    
    //Game[] public allGames;

    struct Game {
        uint id;
        bytes32 playerName;
        bool humanWin;
        uint winCount;
        uint etherWon;
        
    }

    Game public thisGame;
    
    Game[] public allGames;


    function addGame(uint _id, bytes32 _playerName, bool _humanWin, uint _winCount, uint _etherWon ) public returns (bool success)
    {
        //This adds a game to the AllGames Array.

        Game memory newGame;
        newGame.id = _id;
        newGame.playerName = _playerName;
        newGame.humanWin = _humanWin;
        newGame.winCount = _winCount;
        newGame.etherWon = _etherWon;
        allGames.push(newGame);
        return true;

    }
    
    function getAllGames() constant public returns (bytes32[], uint[])
    {
        uint length = allGames.length;

        bytes32[] memory allNames = new bytes32[](length);
        uint[] memory allWinCount = new uint[](length);

        for (uint i = 0 ; i < allGames.length; i ++)
        {
            Game memory currentGame;
            currentGame = allGames[i];
            allNames[i] = currentGame.playerName;
            allWinCount[i] = currentGame.winCount;
        }

        return (allNames, allWinCount);
    }

    function gameResult( bool didHumanWin, uint etherWon) public 
    {
        thisGame.humanWin = didHumanWin;
        thisGame.etherWon = etherWon;
    }
    
    function getWinCount() constant public returns (uint)
    {
        return thisGame.winCount;
    }

    ///This counts the number of times the human won in a row
    function humanWin() private{
        thisGame.winCount ++;
    }

}