import React from 'react';
import classes from './Product.module.css'

const Product = (props) => {
    
    const{image,title,description,category,rating,price}=props.product;
    return (
        <div className={classes.product}>
            <div className={classes.image}><img style={{}} src={image} alt="" /></div>
            <h5>title: {title}</h5>
            {/* <p>Description: {description}</p> */}
            <p>category: {category}</p>
            <p>Rating: {rating.rate}</p>
            <h5>Price: {price}</h5>
            <button onClick={()=>props.handleAddToCart(props.product)}>Add To Cart</button>
        </div>
    );
};

export default Product;