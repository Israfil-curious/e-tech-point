import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    const {name, image, author, price} = props.product;
    const handleAddProduct = props.handleAddProduct;
    return (
        <div className="product">
            <div className="product-img">
                <img src={image} alt=""/>
            </div>
            <div className="product-info">
                <h3>{name}</h3>
                <p><small>By: {author}</small></p>
                <big>Price: ${price}</big>
                <br/>
                <br/>
                <button onClick={() => handleAddProduct(props.product)}><FontAwesomeIcon icon={faCartPlus} /> Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;