import React, { Component } from 'react';
import './App.css';

class App extends Component {

	constructor(props){

		super(props);
		this.state={
			players: ['Nicolas', 'Solene', 'Loic','Helen'],
			game:[{name1: 'Nicolas',score1:0,name2:'Solene',score2:0}]
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
		<div>
			<div className="player">
				<p>{player1}</p>
				<p>{score1}</p>
			</div>
			<div className="player">
				<p>{player2}</p>
				<p>{score2}</p>
			</div>
		</div>
		);
	}

  render() {

	let playerTeam1 = this.createTeams('Solene', 'Nicolas');
	let playerTeam2 = this.finalScreen(this.state.game[0].name1, this.state.game[0].score1, this.state.game[0].name2, this.state.game[0].score2);
    return (
      <div className="App">
		  {playerTeam1}
		  {playerTeam2}
      </div>
    );
  }
}

export default App;
