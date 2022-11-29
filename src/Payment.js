import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useNavigate } from "react-router-dom";
import Collapsible from "react-collapsible";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import indianNumberFormat from "indian-number-format";
import { basketValue } from "./reducer";
import axios from "./axios";
import { db } from "./firebase";
import Ordertotal from "./Ordertotal";

function Payment() {
	const [check, changeCheck] = useState(false);
	const navigate = useNavigate();
	const [{ basket, user }, dispatch] = useStateValue();
	const stripe = useStripe();
	const elements = useElements();
	const [succeeded, setSucceeded] = useState(false);
	const [processing, setProcessing] = useState("");
	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);
	const [clientSecret, setclientSecret] = useState(true);
	useEffect(() => {
		//generating stripe secret inorder to charge customer
		const getclientSecret = async () => {
			const response = await axios({
				method: "post",
				url: `/payments/create?total=${basketValue(basket) * 100}`,
			});
			setclientSecret(response.data.clientSecret);
		};
		getclientSecret();
	}, [basket]);
	// console.log(clientSecret)
	const [address, changeAddress] = useState({
		Rname: "",
		ad1: "",
		ad2: "",
		location: "",
	});
	const [final, changeFinal] = useState({
		Rname: "John Smith",
		ad1: "1234 React Colony",
		ad2: "4567 React Colony",
		location: "Bangalore,Karnataka",
	});
	const changeMain = (e) => {
		const { name, value } = e.target;
		changeAddress((address) => {
			return { ...address, [name]: value };
		});
	};
	function handleForm(e) {
		e.preventDefault();
		changeFinal(address);
	}
	const handleSubmit = async (e) => {
		e.preventDefault();
		setProcessing(true);
		const payload = await stripe
			.confirmCardPayment(clientSecret, {
				payment_method: {
					card: elements.getElement(CardElement),
				},
			})
			.then(({ paymentIntent }) => {
				//paymentconfirmation
				setSucceeded(true);
				setError(null);
				setProcessing(false);
				navigate("/success", { replace: true });

				dispatch({
					type: "EMPTY_BASKET",
				});
				db.collection("users")
					.doc(user?.uid)
					.collection("orders")
					.doc(paymentIntent.id)
					.set({
						basket: basket,
						amount: paymentIntent.amount,
						created: paymentIntent.created,
					});
			});
	};
	const handleChange = (e) => {
		setDisabled(e.empty);
		setError(e.error ? e.error.message : "");
	};

	function valueChange() {
		changeCheck(true);
	}
	return (
		<div className="payment">
			<div className="left_section">
				<div className="payment__container">
					<div className="address__section">
						<div className="address__title ">
							<h3>1</h3>
							<h3 className="Name">Delivery Address</h3>
						</div>
						<div className="payment__address">
							<p>{final.Rname}</p>
							<p>{final.ad1}</p>
							<p>{final.ad2}</p>
							<p>{final.location}</p>
						</div>
						<Collapsible
							trigger="Change"
							triggerWhenOpen="Add Address:"
							transitionTime={300}
						>
							<form className="address__form" onChange={changeMain}>
								<label>Recepient Name:</label>
								<input type="text" name="Rname" />
								<br />
								<label>Address Line 1 :</label>
								<input type="text" name="ad1" />
								<br />
								<label>Address Line 2 :</label>
								<input type="text" name="ad2" />
								<br />
								<label>Location :</label>
								<input type="text" name="location" />
								<br />
								<button className="address_submit" onClick={handleForm}>
									Submit
								</button>
							</form>
						</Collapsible>
					</div>
					<div className="payment__section">
						<div className="payment__title">
							<h3>2</h3>
							<h3 className="Name">Review Items and Delivery</h3>
						</div>
						<div className="payment__items">
							{basket.map((item) => (
								<CheckoutProduct
									id={item.id}
									title={item.title}
									img={item.image}
									price={item.price}
									rating={item.rating}
								/>
							))}
						</div>
					</div>
					<div className="payment__section">
						<div className="payment__title">
							<h3>3</h3>
							<h3 className="Name">Payment Method</h3>
						</div>
						<div className="payment__details">
							<form onSubmit={handleSubmit}>
								<div id="top" className="payment__info">
									<div className="section">
										<input type="radio" disabled />
										&nbsp;
										<h4 className="disabled-name">EMI Unavailable</h4>
									</div>
									<div className="section">
										<input type="radio" onChange={valueChange} />
										&nbsp;
										<h4>Pay with Debit/Credit/ATM Cards</h4>
									</div>
								</div>
								{check && (
									<CardElement
										className="card__container"
										onChange={handleChange}
									/>
								)}
								{error && <div>{error}</div>}
								<div className="payment__priceContainer">
									<button disabled={processing || disabled || succeeded}>
										<span>
											{processing ? <p>Processing</p> : "Place your order"}
										</span>
									</button>
									<div className="price">
										<h3>
											Order Total:&nbsp;
											<small>₹</small>
											{indianNumberFormat.format(basketValue(basket))}
										</h3>
										<p>
											By placing your order, you agree to Amazon Clone's privacy
											notice and conditions of use.
										</p>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
            <Ordertotal/>
		</div>
	);
}

export default Payment;
