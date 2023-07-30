// import React, { useContext } from 'react';
// import { RingContext } from '../Grandpa/Grandpa';

// const Special = ({ ornament }) => {
//     const ring=useContext(RingContext)
//     return (
//         <div>
//             <h1>Special</h1>
//             <p>Gift:{ornament}</p>
//         </div>
//     );
// };

// export default Special;


import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const [ornament, house] = useContext(RingContext);
    return (
        <div>
            <h1>Special</h1>
            <p>Gift:{ornament}</p>
            <p>House:{house}</p>
        </div>
    );
};

export default Special;