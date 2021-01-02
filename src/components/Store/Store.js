import React, { useState } from 'react';
import fakeData from '../../fakeData/fakeData.json';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Store.css';

const Store = () => {
    
    const products = fakeData;
    const [cart, setCart] = useState([]);
    
    const handleAddProduct = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    };
    return (
        <div className="store-container">
            <div className="product-container">
            {
                products.map(product => <Product product={product} handleAddProduct={handleAddProduct}></Product>)
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Store;