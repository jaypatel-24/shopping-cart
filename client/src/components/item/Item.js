import React from 'react'
import {useState} from 'react'

const UserItem = ({item, addToCart, removeFromCart }) =>  {

    const { price, description, image, _id , cartStatus } = item;
    const [count, setCount] = useState(cartStatus)
    
    const add = () => {
        setCount(1);
        addToCart(_id);
    }

    const remove = () => {
        setCount(0);
        removeFromCart(_id);
    }

    return (
        <div className="card text-center">
            <img src={image} 
                alt=""
                style={{ height: "40%", width: "40%", borderRadius:"5%"}} 
            />
            
            <h6>{description}</h6>
            <h2>Rs. {price}</h2>
            {/* <div> <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">more</Link> </div> */}
            
            
            {count === 0
              ? ( <button type="submit" className="btn btn-success" onClick={add}>Add to cart</button> )
                : (<button type="submit" className="btn btn-danger" onClick={remove}>Remove</button> )
            }
            
        </div>
    )
}


export default UserItem
