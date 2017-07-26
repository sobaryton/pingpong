import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

	constructor(props){

		super(props);
		this.state={
			players: ['Nicolas', 'Solene', 'Loic','Helen'],
		}

	}


  render() {
    return (
      <div className="App">
        <form>
			<div className="player">
				<input type="text" className="score"/>
				<button>OK</button>
				<button>X</button>
			</div>
			<div className="player">
          		<input type="text" className="name"/>
				<button>OK</button>
				<button>X</button>
			</div>
        </form>
      </div>
    );
  }
}

export default App;
