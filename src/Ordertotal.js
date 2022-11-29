import React from "react";
import "./Ordertotal.css";
import { basketValue } from "./reducer";
import indianNumberFormat from "indian-number-format";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
function Ordertotal() {
    const [{ basket, user }, dispatch] = useStateValue();
    const delivery=0;
	return (
		<div className="order__total">
			<h3>Order Summary</h3>
			<div className="final__items">
				<p>Items:</p>
                <p><small>₹</small>{indianNumberFormat.format(basketValue(basket))}</p>
			</div>
			<div className="final__delivery">
				<p>Delivery:</p>
                <p><small>₹</small>{delivery}</p>
			</div>
            <hr style={{border:"1px solid #dddddd"}}/>
            <div className="total__price">
                <h3>Order Total:</h3>
                <h3><small>₹</small>{indianNumberFormat.format(basketValue(basket)+delivery)}</h3>
            </div>
            <div className="payment__redirect">
            <a href="#top">
                <button>Choose a payment method</button>
            </a>
            </div>
            <div className="delivery__info">
                <h5>How are delivery costs calculated?</h5>
                <p>Express Delivery has been applied to the eligible items in your order.</p>
            </div>
		</div>
	);
}

export default Ordertotal;
