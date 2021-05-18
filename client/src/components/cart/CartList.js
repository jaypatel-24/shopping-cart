import React, { Component } from 'react'
import axios from 'axios'
import CartItem from './CartItem'

class CartList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cartList : []
        }
    }

    componentDidMount() {
        axios.get('/cart')
        .then(response => {
            this.setState({
                cartList : response.data
            })
        })
        .catch(err => {
            console.log(err)
        }) 
    }

    increaseQuantity = (id) => {
        console.log(id)
        axios.put(`/cart/increase/${id}`).then(response => console.log()).catch(err => console.log(err))
    }

    decreaseQuantity = (id) => {
        console.log(id)
        axios.put(`/cart/decrease/${id}`).then(response => console.log()).catch(err => console.log(err))
    }

    render() {
        const { cartList } = this.state
        const text = "Cart is empty"

        return (
            
            <div style={itemStyle}>
               {cartList.length === 0 && <h3>{text}</h3>}
               {cartList.map(item => (
                     <CartItem 
                        key={item._id} 
                        item={item}
                        increase={this.increaseQuantity}
                        decrease={this.decreaseQuantity}
                    />                    
               ))}
      </div>
        )
    }
}

const itemStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap : '0.5rem'
}

export default CartList
