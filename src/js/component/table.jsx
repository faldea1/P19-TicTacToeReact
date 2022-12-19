import React from 'react';
import Box from './box.jsx';

const Table = ({table, onClick}) =>{
    return(
        <div className='tablespaces'>
            {table.map((value, index) => {
                return <Box value={value} onClick={() => onClick(index)} />
            } )}
        </div>
    );
};

export default Table;