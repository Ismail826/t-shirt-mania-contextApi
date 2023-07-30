import React from 'react';
import CartDetails from '../CartDetails/CartDetails';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    // Conditional Rendering Options
    // 1.Element variable
    // 2.Ternary Operator condition ? true : false
    // 3. && Operator (Shorthand)
    // 4. ||
    let command;
    if(cart.length ===0){
        command =<p>Please Add At least one items</p>
    }
    else if(cart.length ===1){
        command =<p>Please Add more...</p>
    }
    else{
        command= <p><small>Thanks for Adding items</small> </p>
    }
    return (
        <div>
            <h2>Items Selected:{cart.length}</h2>
            

            {
                cart.map(tShirt => <CartDetails tShirt={tShirt} handleRemoveFromCart={handleRemoveFromCart} key={tShirt._id}></CartDetails>)
            }
            {cart.length ===0 || <p className='orange'>YaY! You are a Buying</p>}
            {cart.length === 3 && <div className='orange'>
                <h3>Triogonal</h3>
                <p>Tin jon ke ki gift deba</p>
                </div>}
            {command}
            {cart.length !== 4 ? <p>Keep Adding</p> : <button>Remove All</button>}
        </div>
    );
};

export default Cart;