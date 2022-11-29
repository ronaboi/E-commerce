import React from 'react';
import './CheckoutProduct.css';
import {Star,StarOutline,StarHalf} from '@mui/icons-material';
import indianNumberFormat from 'indian-number-format';
import { useStateValue } from './StateProvider'; 
import FlipMove from "react-flip-move"; 
function CheckoutProduct(props) {
    const[{basket},dispatch]=useStateValue();
    const removeFromBasket=()=>{
        dispatch({
        type:'REMOVE_FROM_BASKET',
        id:props.id
    })
    }
  return (
    <FlipMove duration={300} appearAnimation="elevator" leaveAnimation="elevator">
    <div className='checkoutProduct'>
    <img className='checkoutProduct__image' src={props.img} alt="" />
    <div className="checkoutProduct__info">
    <p className="checkoutProduct__title">{props.title}</p>
    <div className="checkoutProduct__price">
            <p><small>₹</small>{indianNumberFormat.format(props.price)}.00</p>
    </div>
    <div className="checkoutProduct__rating">
         {Array.from({length:5},(elem,index)=>{
                let number=index+0.5;
                return(
                    <span>{props.rating>=index+1?<Star/>:props.rating>=number?<StarHalf/>:<StarOutline/>}</span>
                )
            })
                }
    </div>
    {!props.Button && <button onClick={removeFromBasket}>Remove from Basket</button>}
    </div>
    </div>
    </FlipMove>
  )
}

export default CheckoutProduct