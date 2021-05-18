import React, { Component } from 'react'
import axios from 'axios'
import Item from './Item'

class ItemList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            itemList : [],
            
        }

        this.addToCart = this.addToCart.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this)
    }

    addToCart(id) {
        axios.post(`/cart/${id}`).then(response => console.log()).catch(err => console.log(err))
    }
    removeFromCart(id) {
        axios.delete(`/cart/${id}`).then(response => console.log()).catch(err => console.log(err))
    }

    componentDidMount() {
        axios.get('/items')
        .then(response => {
            this.setState({
                itemList : response.data
            })
        })
        .catch(err => {
            console.log(err)
        }) 
    }
    render() {
        const { itemList } = this.state

        return (
            <div style={itemStyle}>
                {itemList.map(item => (
                     <Item 
                        key={item._id} 
                        item={item} 
                        addToCart={this.addToCart} 
                        removeFromCart={this.removeFromCart}
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

export default ItemList
