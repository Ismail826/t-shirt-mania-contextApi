import React from 'react';
import Special from '../Special/Special';

const MySelf = ({ house, ornament }) => {
    return (
        <div>
            <h2>MySelf</h2>
            <p>House:{house}</p>
            <Special ornament={ornament}></Special>
        </div>
    );
};

export default MySelf;