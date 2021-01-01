import React from 'react';
import fakeData from '../../fakeData/fakeData.json';
import Product from '../Product/Product';

const Store = () => {
    
    const products = fakeData;
    return (
        <div>
            {
                products.map(product => <Product product={product}></Product>)
            }
        </div>
    );
};

export default Store;