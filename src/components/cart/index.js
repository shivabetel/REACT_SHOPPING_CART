import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './style'
import { Button } from '@material-ui/core';

const Cart  = ({classes}) => {

    return (
        <div className={classes.cartContainer}>
            <div className={classes.closeButton}>
                <span>X</span>
            </div>
           <div className={classes.content}>

           </div>
           <div className={classes.footer}>
             <div className={classes.footerContent}>
                 <div className={classes.sub}>
                     <span>SUBTOTAL</span>
                 </div>
                 <div className={classes.subPrice}>
                     <span>SUBTOTAL</span>
                 </div>
             </div>
             <div className={classes.footerButton}>
                <Button className={classes.checkoutButton} color="primary" varinat="contained" disableRipple>CHECKOUT</Button>
             </div>
           </div>
        </div>
    )
}

export default withStyles(styles)(Cart);