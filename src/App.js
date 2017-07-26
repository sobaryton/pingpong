import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

	addName(name){

	}

  render() {
    return (
      <div className="App">
        <form>
			<div className="player">
				<input type="text" className="name"/>
				<button onClick={()=>}>OK</button>
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
