import React from 'react';

const CartDetails = ({ tShirt, handleRemoveFromCart }) => {
    const {name} = tShirt;

    return (
        <div>
            <p>{tShirt.name}
                <button onClick={() => handleRemoveFromCart(tShirt)} >X</button>
            </p>
        </div>
    );
};

export default CartDetails;