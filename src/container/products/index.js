import React from 'react';
import { connect } from 'react-redux';

import ProductList from '../../components/productlist';
import { addProduct } from '../../actions/products';


class Products extends React.Component {

    render() {
        const { products, addProduct } = this.props
        return (
            <ProductList products={products} addProduct = {addProduct}/>
        )
    }
}

export default connect(null, { addProduct })(Products);