import React from 'react';


const Report = ({counter, Xplayer}) =>{
    const {XScore, OScore} = counter;
    return (
        <div className='marker'>
            <p className={'score x-score'}>X - {XScore} </p>
            <p className={'score o-score'}>O - {OScore} </p>
        </div>


    );

};



export default Report;