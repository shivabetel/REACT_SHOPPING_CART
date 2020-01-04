import React from 'react';
import SortBy from '../sortby';

import './styles.scss';

const ShelfHeader = ({productCount}) => {

    return (
        <div className="header-container">
            <div className="first-container">
                <div>
                    <span>Sizes</span>
                </div>
            </div>
            <div className="second-container">
    <span>{`${productCount} Product(s) found`}</span>
            </div>
            <div className="third-container">
                <SortBy />
            </div>
        </div>
    )
}

export default ShelfHeader;