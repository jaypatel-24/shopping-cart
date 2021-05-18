import React from 'react'


const UserItem = ({item}) =>  {

    const { name, price, quantity, image } = item

    return (
        <div className="card text-center">
            <img src={image} 
                alt=""
                style={{ height: "40%", width: "40%", borderRadius:"5%"}} 
            />
            
            <h3>{name}</h3>
            <h2>Rs. {price}</h2>
            <h3>Qty: {quantity}</h3>
        </div>
        )
}


export default UserItem
