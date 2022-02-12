import React from 'react';
import classes from './Cart.module.css'

const Cart = (props) => {
    const {cart} = props;

    const totalReducer=(previous,product)=>previous+product.price;
    const total=cart.reduce(totalReducer,0);

    // let total=0;
    // for(const product of cart){
    //     total=total+product.price;
    // }

    const shipping=25;
    const tex=(total*10)/100;
    const grandTotal=total+shipping+tex;

    return (
        <div className={classes.cart}>
            <h3>Order Summary</h3>
            <h5>Item Order{props.cart.length}</h5>
            <p>Total: {total.toFixed(2)}</p>
            <p>Shipping: {shipping}</p>
            <p>Tax: {tex.toFixed(2)}</p>
            <h5>Grand Total: {grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;