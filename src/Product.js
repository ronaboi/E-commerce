import React from 'react'
import './Product.css'
import {useStateValue} from "./StateProvider"
import {Star,StarOutline,StarHalf} from '@mui/icons-material';
import indianNumberFormat from "indian-number-format";

function Product(props) {
    const[state,dispatch]=useStateValue();
    const addToBasket=()=>{
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id:props.id,
                title:props.title,
                image:props.img,
                price:props.price,
                rating:props.rating
            }
        })
}
  return (
    <div className='product'>
        <div className="product__info">
            <p>{props.title}</p>
        <div className="product__price">
            <small>₹</small>
            <strong>{indianNumberFormat.format(props.price)}</strong>
            <small><sup>00</sup></small>
        </div>
        <div className="product__rating">
            {Array.from({length:5},(elem,index)=>{
                let number=index+0.5;
                return(
                    <span>{props.rating>=index+1?<Star/>:props.rating>=number?<StarHalf/>:<StarOutline/>}</span>
                )
            })
                }
        </div>    
        </div>
        <img src={props.img} alt="product-img" />
        <button onClick={addToBasket}>Add to Cart</button>
    </div>
  )
}

export default Product