import React from 'react';
import Product from './product';

const ProductList = ({products = [], addProduct}) => {
   
    const addProductHandler = (product) => {
        addProduct(product)
    }

    return (
        <div style={{display: 'flex',
            'flex-wrap': 'wrap',
            'flex': '1 0 85%'}}>
           {
               products.map(product => <Product key={product.id} product={product} onAddToCart={addProductHandler}/>)
           }
        </div>
    )
}

export default ProductList;