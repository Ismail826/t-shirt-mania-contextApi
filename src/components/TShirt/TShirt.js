import React from 'react';
import './TShirt.css'

const TShirt = ({handleAddToCart, tShirt}) => {

    const { name, picture, price } = tShirt;
   

    return (
        
<div className="details-container">
                <img src={picture} alt='' />
                <h1>{name}</h1>
                <p> <small>Price:${price}</small> </p>
                <button onClick={()=> handleAddToCart(tShirt)}>Add to Cart</button>
            </div>

    );
};

export default TShirt;