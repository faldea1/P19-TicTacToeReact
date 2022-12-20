import React, {useState} from 'react';
import Report from './report.jsx';
import ResetGame from './resetgame.jsx';
import Table from './table.jsx';


//MAIN COMPONENT
const TicTacToe = () => {

	


	const table = [ "X", "X", "X", "X", "X", "X", "X", "X", "X" ];

	return (
		<div className='container'>
			<div className='menu'>
				<h1>TIC TAC TOE</h1>
				<Report />
				<ResetGame />
			</div>
			<div>
				<Table table={table} onClick={null} />
			</div>
		</div>
	);
};

export default TicTacToe;
