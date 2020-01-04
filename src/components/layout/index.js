import React from 'react';
import ShelfHeader from '../shelf-header';
import Shelf from '../../container/shelf';
import Header from '../header';

const Layout = props => {

    return (
        <div>
            <Header/>
            <Shelf/>
        </div>
    )
}

export default Layout;