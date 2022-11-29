import React, { useEffect, useState } from 'react'
import { db } from './firebase'
import './Orders.css'
import Order from './Order'
import { useStateValue } from './StateProvider'

function Orders() {
    const [orders,setOrders]=useState([])
    const [{basket,user},dispatch]=useStateValue();
    useEffect(()=>{
    if(user){
        db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created','desc')//data created in descending order ; access for firebase db
        .onSnapshot(snapshot=>{
            setOrders(snapshot.docs.map(doc=>({
                id: doc.id,
                data:doc.data()
            })))
        })
    }
    else{
        setOrders([])
    }
    },[user])
  return (
    <div className="orders">
        <h1>Your Orders</h1>
        <div className="orders__order">
            {orders?.map(order=>(
                <Order order={order}/>
            ))}
        </div>
    </div>
  )
}

export default Orders

// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if
//           request.time < timestamp.date(2022, 12, 3);
//     }
//   }
// }