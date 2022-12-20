import React from 'react';


const ResetGame = ({resetgame}) =>{
    return (     
           <button className='reset' onClick={resetgame}>Restart</button>
    );

};

export default ResetGame;