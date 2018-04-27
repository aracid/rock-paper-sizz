import Web3 from 'web3';
import React, { Component } from 'react';
import './App.css';

import logo from './Rock-paper-scissors.svg';
import rock from './rock.jpg';
import paper from './paper.jpg';
import scissors from './scissors.jpg';
import pressStart from './press-start-2.png';
import rockPaperScissors from './rock-paper-scissors.png';
import playAgain from './Play_Again.png';

//var web3 = new Web3(Web3.givenProvider || new Web3.providers.HttpProvider("http://localhost:7545"));
//var contractABI = [{"constant":true,"inputs":[],"name":"thisGame","outputs":[{"name":"id","type":"uint256"},{"name":"playerName","type":"bytes32"},{"name":"humanWin","type":"bool"},{"name":"winCount","type":"uint256"},{"name":"etherWon","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"allGames","outputs":[{"name":"id","type":"uint256"},{"name":"playerName","type":"bytes32"},{"name":"humanWin","type":"bool"},{"name":"winCount","type":"uint256"},{"name":"etherWon","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"_playerName","type":"bytes32"},{"name":"_humanWin","type":"bool"},{"name":"_winCount","type":"uint256"},{"name":"_etherWon","type":"uint256"}],"name":"addGame","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getAllGames","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"didHumanWin","type":"bool"},{"name":"etherWon","type":"uint256"}],"name":"gameResult","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getWinCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]; // CHANGE THIS TO YOUR ABI
//var test = contractABI.at('0xd942ab433bcdecd39e838152bc1f9bab3b7d6b19');

class App extends Component {
  
  componentWillMount()
  {
    
  }
  
  constructor(props){
    super(props)
    this.state = {
       currentBalance: 120,
       owner: null,
       selected: 0,
       playing : false,
       madeBet : false,
       minimumBet: 0.05,
       randNumber : 1,
       currentContractAddress : '', 
       }

       
       console.log("BRIAN")
       
       
       //web3 = new Web3(Web3.givenProvider || new Web3.providers.HttpProvider("http://localhost:7545"));
     //  var contractABI = [{"constant":true,"inputs":[],"name":"thisGame","outputs":[{"name":"id","type":"uint256"},{"name":"playerName","type":"bytes32"},{"name":"humanWin","type":"bool"},{"name":"winCount","type":"uint256"},{"name":"etherWon","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"allGames","outputs":[{"name":"id","type":"uint256"},{"name":"playerName","type":"bytes32"},{"name":"humanWin","type":"bool"},{"name":"winCount","type":"uint256"},{"name":"etherWon","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"},{"name":"_playerName","type":"bytes32"},{"name":"_humanWin","type":"bool"},{"name":"_winCount","type":"uint256"},{"name":"_etherWon","type":"uint256"}],"name":"addGame","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getAllGames","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"didHumanWin","type":"bool"},{"name":"etherWon","type":"uint256"}],"name":"gameResult","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getWinCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]; // CHANGE THIS TO YOUR ABI
     //  console.log(contractABI)
     //  var etherContract = contractABI.at('0x25df543faf623d5999d5b025af47d98f36c9b7fa')
     //  console.log(etherContract)
     
       
  } 
 
 pressStartButton = () => {
  console.log('PressStart Was Clicked');
  this.setState({playing:true});
  this.setState({selected : 0})
}

clickRockButton = () => {
  const rand = Math.random()*3;
  this.setState({ randNumber: Math.ceil(rand) });

  console.log('Rock Was Clicked');
   this.setState({selected : 1})
   this.setState({playing:false});
   this.setState({madeBet:true});
 }

clickPaperButton = () => {
  const rand = Math.random()*3;
  this.setState({ randNumber: Math.ceil(rand) });

  console.log('Paper Was Clicked');
  this.setState({selected : 2})
  this.setState({playing:false});
  this.setState({madeBet:true});
}

clickScissorsButton = () => {
  const rand = Math.random()*3;
  this.setState({ randNumber: Math.ceil(rand) });
  console.log('Scissors Was Clicked');
  this.setState({selected : 3})
  this.setState({playing:false});
  this.setState({madeBet:true});
}

ResetGame = () => 
{
  console.log("TEST");
  this.setState({selected : 0})
  this.setState({playing:false});
  this.setState({madeBet:false});
}


 render() {
  const divStyle = {
    padding : '15px',
    };

    function PlaySpinWheel(props) {
      //Show what the computer picked from the random generator.

      if (props.madeBet && props.randNumber ===1 ) return  (
        <div>
            <img  src={rock} className="App-button" alt="rock" /> 
            <h3>Computer picked a rock!</h3>
        </div>
      );


      if (props.madeBet && props.randNumber ===2 ) return  (
        <div>
            <img  src={paper} className="App-button" alt="paper" /> 
            <h3>Computer picked a paper!</h3>
        </div>
      );

      if (props.madeBet && props.randNumber ===3 ) return  (
        <div>
            <img  src={scissors} className="App-button" alt="scissors" /> 
            <h3>Computer picked a scissors!</h3>
        </div>
      );



      if (!props.playing) return (
      <div> <h2>Using a random selector</h2>
        <button onClick={props.pressMe} > <img  src={pressStart} className="App-pressStart" alt="pressStart" /> </button> </div>
    );
      return ( <div> 
        <img src={logo} className="App-logo-playing" alt="logo" />  
        <h1>Now Select Rock Paper or Scissors!</h1> </div> );
    }

    function RockButton(props) {
      if (props.selected===1)  return (
        <div> <img  src={rock} className="App-button" alt="rock" /> 
         <h3>You picked a Rock!</h3> </div> )

      if (props.playing) return <button onClick={props.pressMe}> <img  src={rock} className="App-button" alt="rock" /> </button>
      return null 
    }

    function PaperButton(props) {
      if (props.selected===2)  return  (
        <div> <img  src={paper} className="App-button" alt="paper" /> 
          <h3>You picked a Paper!</h3> </div> )

      if (props.playing) return <button onClick={props.pressMe}> <img  src={paper} className="App-button" alt="paper" /> </button>
      return null 
    }

    function ScissorsButton(props) {
      if (props.selected===3) return (
        <div> <img  src={scissors} className="App-button" alt="scissors" />  
        <h3>You picked a Scissors!</h3> </div> )
      if (props.playing) return <button onClick={props.pressMe}> <img  src={scissors} className="App-button" alt="scissors" /> </button>
      return null 
    }
    


    function ShowResult(props) {
      //Game Logic if you pick Rock
      if (props.selected===1 && props.randNumber===3)  return <h2 className="Flash-button">You Win!</h2> // Rock beats Scissors
      if (props.selected===1 && props.randNumber===2)  return <h2 className="Flash-button">You Loose!</h2> // Rock Looses to Paper

      //Game Logic if you pick Paper
      if (props.selected===2 && props.randNumber===1)  return <h2 className="Flash-button">You Win!</h2> // Paper beats Scissors
      if (props.selected===2 && props.randNumber===3)  return <h2 className="Flash-button">You Loose!</h2> // Paper Looses to Paper

      //Game Logic if you pick Scissors
      if (props.selected===3 && props.randNumber===2)  return <h2 className="Flash-button">You Win!</h2> // Scissors beats Scissors
      if (props.selected===3 && props.randNumber===1)  return <h2 className="Flash-button">You Loose!</h2> // Scissors Looses to Paper

      // Selected the same - Draw
      if (props.selected === props.randNumber)  return <h2 className="Flash-button">Draw!</h2> 
      return null 
    }

    function PlayAgain(props) {
      if (props.madeBet === true) return <button onClick={props.pressMe} > <img src={playAgain} className="App-play-again" alt="Play Again"/> </button>

      return null;
    }


    return (
      <div className="App"> <header className="App-header">
        <img src={rockPaperScissors} className="App" alt="rockPaperScissors" />          
        </header>

        
        <div> <b className="App"> Current Contract Address : {this.state.currentContractAddress} </b> </div>
        <div> <b className="App"> Your Balance : {this.state.currentBalance} ether </b> </div>

        <div style={divStyle}>
            <label>
               <b>How much Ether do you want to bet? <input className="bet-input" ref="ether-bet" type="number" placeholder={this.state.minimumBet}/></b> ether
               <br/>
            </label>
          </div>
        
          <div style={divStyle}> <PlaySpinWheel randNumber={this.state.randNumber} selected={this.state.selected} madeBet={this.state.madeBet} playing={this.state.playing} pressMe={this.pressStartButton}/></div>
            
            <RockButton playing={this.state.playing} pressMe={this.clickRockButton} selected={this.state.selected}/>
            <PaperButton playing={this.state.playing} pressMe={this.clickPaperButton} selected={this.state.selected}/>
            <ScissorsButton playing={this.state.playing} pressMe={this.clickScissorsButton} selected={this.state.selected}/>

            <ShowResult randNumber={this.state.randNumber} selected={this.state.selected} madeBet={this.state.madeBet}/>
            
            <PlayAgain madeBet={this.state.madeBet} pressMe={this.ResetGame}/>

            <div style={divStyle}><i>Only working with the Ganache and Metafox Test Network</i></div>
            
      </div>
      
    );
  }
}

export default App;

