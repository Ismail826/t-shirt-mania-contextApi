import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import "./Grandpa.css"

/**
 * Context Api
 * 1.Call CreateContext with a default value
 * const RingContext = createContext('Diamond Ring')
 * 
 * 2.Set a variable of the context with uppercase
 * variable:RingContext
 * 
 * 3.Make sure you export the context to use it in other places
 * 4.wrap you child context using </RingContext.Provider>
 * 
 5.provide value
 6.to consume the context from child component
 7.useContext hook and you will you need to pass the contextName
 8.Make sure you take notes
 */

export const RingContext = createContext('Diamond Ring')

const Grandpa = () => {
    // const house=7;
    const [house, setHouse] = useState(1);
    const ornament = 'Diamond Ring';

    const handleHouseCount = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <RingContext.Provider value={[ornament,house]}>
            <div className='grandpa'>
                <h1>Grandpa</h1>
                <button onClick={handleHouseCount}>Buy A House</button>
                <p>House:{house}</p>
                <section style={{ display: 'flex' }}>
                    <Father house={house} ornament={ornament}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>

            </div>
        </RingContext.Provider>
            );
        
};

export default Grandpa;