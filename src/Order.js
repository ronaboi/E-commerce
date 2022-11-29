import React from 'react'
import './Order.css'
import moment from "moment";
import CheckoutProduct from './CheckoutProduct';
import indianNumberFormat from 'indian-number-format';


function Order({order}) {
  return (
    <div className="order">
    <h2>Order</h2>
    <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mm:ss a')}</p>
    <p className="order__id">
        <small>{order.id}</small>
    </p>
    {order.data.basket?.map(item=>(
        <CheckoutProduct
						id={item.id}
						title={item.title}
						img={item.image}
						price={item.price}
						rating={item.rating}
            Button
					/>
    ))}
    <h3 className='order__ftotal'>Order Total:&nbsp;<small>₹</small>{indianNumberFormat.format(order.data.amount/100)}</h3>
    </div>
  )
}

export default Order