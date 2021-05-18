import React, {useState} from 'react'
import axios from 'axios'


const UserItem = ({item, increase, decrease}) =>  {

    const { name, price, quantity, image, _id , itemId } = item
    const [newQuantity, setNewQuantity] = useState(quantity)

    const increaseQuantity = () => {
        setNewQuantity(prevQuantity => prevQuantity + 1)
        increase(_id);

    }
    const decreaseQuantity = () => {
        if(newQuantity > 1)
        {
            setNewQuantity(prevQuantity => prevQuantity - 1)
            decrease(_id)
        }
        
    }
    return (
        <div className="card text-center">
            <img src={image} 
                alt=""
                style={{ height: "40%", width: "40%", borderRadius:"5%"}} 
            />
            
            <h3>{name}</h3>
            <h2>Rs. {price}</h2>
            <h3>Qty: {newQuantity}</h3>
            <p>
                <button className='btn btn-success btn-sm' onClick={increaseQuantity}>quantity + </button>
                <button className='btn btn-danger btn-sm' onClick={decreaseQuantity}>Quantity - </button>
            </p>
        </div>
        )
}


export default UserItem
