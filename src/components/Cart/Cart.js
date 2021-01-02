import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let totalPrice = 0;
    for(let i = 0; i < cart.length; i++) {
        totalPrice = totalPrice + cart[i].price;
    }
    return (
        <div className="cart">
            <h2>This is cart</h2>
            <p><big>Order summery:</big></p>
            <p>Items: {cart.length}</p>
            <h4>Total price: ${totalPrice}</h4>
        </div>
    );
};

export default Cart;