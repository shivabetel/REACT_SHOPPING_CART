import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {  styles } from './style';

const Header = props => {

    const { classes } = props;
    return (
        <div className={classes.headerContainer}>
            <span>Shopping</span>
        </div>
    )
}

export default withStyles(styles)(Header);