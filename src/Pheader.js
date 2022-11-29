import React from 'react'
import "./Pheader.css"
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";

function Pheader() {
  return (
    <div className="payment__header">
					<Link to="/">
						<img
							className="payment__logo"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
							alt=""
						/>
					</Link>
					<h1>Checkout</h1>
					<LockIcon className="lock" />
				</div>
  )
}

export default Pheader