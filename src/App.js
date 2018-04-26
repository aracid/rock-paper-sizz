import React, { Component } from 'react';
import logo from './Rock-paper-scissors.svg';

import rock from './rock.jpg';
import paper from './paper.jpg';
import scissors from './scissors.jpg';

import pressStart from './press-start-2.png';
import rockPaperScissors from './rock-paper-scissors.png';

import playAgain from './Play_Again.png';


import './App.css';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
       currentBalance: 120,
       owner: null,
       selected: 0,
       playing : false,
       madeBet : false,
       minimumBet: 0.05,
       randNumber : 1
    }
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
      if (props.madeBet === true) return <button onClick={props.pressMe} > <img  src={playAgain} className="App-play-again" /> </button>

      return null;
    }


    return (
      <div className="App"> <header className="App-header">
        <img src={rockPaperScissors} className="App" alt="rockPaperScissors" />          
        </header>

        <div> <b className="App"> Your Account : {this.state.owner} </b> </div>
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

            <div style={divStyle}><i>Only working with the Ropsten Test Network</i></div>
            <div><i>Your vote will be reflected when the next block is mined</i></div>  
      </div>
      
    );
  }
}

export default App;

