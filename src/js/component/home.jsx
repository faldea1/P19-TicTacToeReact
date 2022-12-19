import React from 'react';
import Report from './report.jsx';
import ResetGame from './resetgame.jsx';


//MAIN COMPONENT
const TicTacToe = () => {
	return (
		<div className="container">
			<div className="menu">
				<h1>TIC-TAC-TOE</h1>
				<Report />
				<ResetGame />
			</div>
		</div>
	);
};

export default TicTacToe;
