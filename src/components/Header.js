import React from 'react';
import classes from './Header.module.css'

const Header = () => {
    return (
        <div className={classes.header}>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/order">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;