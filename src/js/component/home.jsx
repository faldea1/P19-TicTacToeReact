import { array } from 'prop-types';
import React, {useState} from 'react';
import Report from './report.jsx';
import ResetGame from './resetgame.jsx';
import Table from './table.jsx';


//MAIN COMPONENT
const TicTacToe = (props) => {

	//8 posibilidades de ganar (3 horizonatales, 3 verticales, 2 diagonales)
	const WINCHANCES = [
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[0,4,8],
		[2,4,6]
	]

	const [table, changetable] = useState(Array(9).fill(null));
	const [Xplayer, setXplayer] = useState(true);
	const [counter, setcounter] = useState({XScore:0, OScore:0})
	const [gameover, setgameover] = useState(false);
	
	

	const boxClick = (boxIndex) => {
		const updatetable = table.map((value, index) => {
			if (index === boxIndex) {
				return Xplayer === true ? "X" : "O";
			} else {
				return value;
			}
		})
 

		const winner = theWinner(updatetable);

		if(winner) {
			if (winner === "X"){
				let {XScore} = counter;
				XScore = XScore +1
				setcounter({...counter, XScore})
			} else {
				let {OScore} = counter;
				OScore = OScore +1
				setcounter({...counter, OScore})
			}
		}

		console.log(counter);


		changetable(updatetable);
		setXplayer(!Xplayer);

		}


		const theWinner = (table) => {
			for (let i=0; i<WINCHANCES.length; i=i+1){
				const [a,b,c] = WINCHANCES[i];
				
				if (table[a] && table[a] === table[b] && table[b] === table[c]){
					console.log (table[a]);
					setgameover(true)
					return table[a];
				}
			}
		}



		const resetgame = () =>{
			setgameover(false);
			changetable(Array(9).fill(null))
		}

		

	return (
		<div className='container'>
			<div className='menu'>
				<h1>TIC TAC TOE</h1>
				<h2>Match Scoreboard</h2>
				<Report counter={counter} Xplayer={Xplayer} />
				<ResetGame resetgame={resetgame} />
			</div>
			<div>
				<Table table={table} onClick={gameover ? resetgame: boxClick} />
			</div>
		</div>
	);
};

export default TicTacToe;
