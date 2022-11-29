import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal"
function Checkout() {
	const[{basket,user},dispatch]=useStateValue();
	return (
		<div className="checkout">
			<div className="checkout__left">
				<img
					className="checkout__ad"
					src="https://m.media-amazon.com/images/G/01/FireTV/Inline/IDB_RatingLabel_NA._TTW_.jpg"
					alt=""
				/>
				<div>
					<h2 className="checkout__title">Your Shopping Basket</h2>
					{basket.length===0&&<h2 className="empty_cart">Your Cart is Empty!</h2>}
					{basket.map(item=>
					<CheckoutProduct
						id={item.id}
						title={item.title}
						img={item.image}
						price={item.price}
						rating={item.rating}
					/>)}
				</div>
			</div>
			<div className="checkout__right">
				<Subtotal/>
			</div>
		</div>
	);
}

export default Checkout;
