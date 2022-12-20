import React from 'react';


const Report = ({counter, Xplayer}) =>{
    const {XScore, OScore} = counter;
    return (
        <div className='marker'>
            <p className={`score x-score ${!Xplayer && "inactive"}`}>X - {XScore} </p>
            <p className={`score o-score ${Xplayer && "inactive"}`}>O - {OScore} </p>
        </div>




    );

};



export default Report;