import React from 'react'
import "./Success.css"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';

function Success() {
  return (
    <div className='success'> 
      <h2><i><CheckCircleIcon/></i>Thank you, your order has been confirmed!</h2>
      <p>Thank you for shopping with us. We'll send an e-mail once your order has been shipped, if you would like to check the status of your order(s) please press the link below.</p>
      <Link to="/orders">
      <button className="order__button">Go to Your Orders</button>
      </Link>
    </div>
  )
}

export default Success;