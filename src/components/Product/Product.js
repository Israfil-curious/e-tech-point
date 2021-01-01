import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, image, author, price} = props.product;
    return (
        <div className="product">
            <div className="product-img">
                <img src={image} alt=""/>
            </div>
            <div className="product-info">
                <h3>{name}</h3>
                <p><small>By: {author}</small></p>
                <h5>Price: ${price}</h5>
            </div>
        </div>
    );
};

export default Product;