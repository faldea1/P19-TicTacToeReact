import React from 'react';

const Box = ({value, onClick}) =>{
    const elementscolor = value === "X" ? 'box X' : 'box O';
    return (
        <button className={elementscolor} onClick={onClick}>{value}</button>
    );
};


export default Box;