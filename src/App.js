import React, { Component } from 'react';
import './App.css';

class App extends Component {

	constructor(props){

		super(props);
		this.state={
			players: ['Nicolas', 'Solene', 'Loic','Helen'],
			game:[{name1: 'Nicolas',score1:0,name2:'Solene',score2:0,game:'ongoing',winner:''},{name1: 'Loic',score1:11,name2:'Helen',score2:4, game:'finished',winner:'Loic'}]
		}

	}



	createTeams(player1,player2){
		return(
			<form>
				<div className="player">
					<p>{player1}</p>
					<input type="text" className="score"/>
				</div>
				<div className="player">
					<p>{player2}</p>
					<input type="text" className="name"/>
				</div>
				<button>OK</button>
			</form>

		);
	}

	finalScreen(player1,score1,player2,score2){
		return(
		      <ul>
		      	<li className="game game-top winner">{player1} <span>{score1} </span></li>
				  <li>&nbsp;</li>
				  <li className="game game-bottom">
				  {player2} <span> {score2} </span>
				  </li>
		      </ul>
		);
	}

	secondState(leftGame, leftWinner, rightGame, rightWinner) {
		return (
			<div>
				<div className="player">
					<p>{leftGame}</p>
					<p>{leftWinner}</p>
				</div>
				<div className="player">
					<p>{rightGame}</p>
					<p>{rightWinner}</p>
				</div>
			</div>
		);
	}

  render() {

	let playerTeam1 = this.createTeams('Solene', 'Nicolas');
	let playerTeam2 = this.finalScreen(this.state.game[1].name1, this.state.game[1].score1, this.state.game[1].name2, this.state.game[1].score2);
    const second = this.secondState(playerTeam1, '', playerTeam2, 'Loic');

	return (
      <div className="App">
		  {second}
      </div>
    );
  }
}

export default App;
