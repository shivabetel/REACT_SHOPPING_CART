import React from 'react';
import { Button } from '@material-ui/core';

const Product = ({ product, onAddToCart }) => {
    product.quantity = 1;
    return (
        <div style={{ display: 'inline-block', width: '25%', marginBottom: '20px', textAlign: 'center' }}>
            <div>
                <img src={require(`../../../static/products/${product.sku}_1.jpg`)}
                    alt={product.title}
                    style={{ width: '80%', height: '60%' }}></img>
            </div>
            <div>
                <span>{product.title}</span>
            </div>
            <div>
    <span>{product.currencyFormat}{product.price}</span>
            </div>
            <div>
                <Button color="primary" variant="contained" onClick={() => onAddToCart(product)}>Add to Cart</Button>
            </div>
        </div>
    )
}

export default Product;