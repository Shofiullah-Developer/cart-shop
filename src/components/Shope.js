import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import Product from './Product';
import classes from './Shope.module.css'

const Shope = () => {
    const [products,setProduct]=useState([]);
    const [carts,setCarts]=useState([]);



    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
        
    const handleAddToCart=(product)=>{
        const newCart=[...carts,product];
        setCarts(newCart);
    }

    return (
        <div style={{}} className={classes.shop}>
            <div className={classes.product}>
                {
                    products.map(product=><Product
                     key={product.id}
                     product={product}
                     handleAddToCart={handleAddToCart}
                    >
                     </Product>)
                }
            </div>
            <div className={classes.cart}>
               <Cart cart={carts}></Cart>
            </div>
        </div>
    );
};

export default Shope;