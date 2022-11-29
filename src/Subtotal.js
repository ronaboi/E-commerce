import React from "react";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import {basketValue} from "./reducer";
import {useNavigate} from "react-router-dom"
import indianNumberFormat from "indian-number-format";


function Subtotal() {
    const navigate=useNavigate()
    const[{basket},dispatch]=useStateValue();
	return <>
           <div className="subtotal">
            <p>
              Subtotal ({basket.length} items): &nbsp;
              <strong>
              <small>₹</small>
              { indianNumberFormat.format(basketValue(basket))}
              </strong>
            </p>
            <small className="subtotal__gift">
            <input type="checkbox" /> This order contains a gift
            </small>
             <button disabled={basketValue(basket)===0?true:false}onClick={e=>navigate('/payment')}>Proceed to Checkout</button>
          </div>
          </>
}

export default Subtotal;
