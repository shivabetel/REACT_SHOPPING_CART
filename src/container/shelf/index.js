import React, { Component } from 'react';
import ShelfHeader from '../../components/shelf-header';
import Filter from '../filter';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './style';
import Products from '../products';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/products'
import CartContainer from '../cart';

class Shelf extends Component {

    componentDidMount() {
        this.props.getProducts();

    }


    componentDidUpdate(prevProps) {
        const { filters: prevFilters } = prevProps;
        const { filters } = this.props;
        if (filters !== prevFilters) {
            this.props.getProducts(filters);
        }
    }

    render() {
        console.log("shelf container", this.props);
        const { classes, products = [] } = this.props
        return (
            <div className={classes.shelfContainer}>
                <div className={classes.shelfHeader}>
                    <ShelfHeader productCount={products.length} />
                </div>
                <div className={classes.mainContainer}>
                    <div className={classes.filter}>
                        <Filter />
                    </div>

                    <Products products={products} />
                    <CartContainer/>

                </div>

            </div>

        )
    }

}

const mapStatetoProps = (state) => {
    return {
        products: state['products']['data'],
        filters: state['filter']['items']
    };
}

export default withStyles(styles)(connect(mapStatetoProps, {
    getProducts
})(Shelf))