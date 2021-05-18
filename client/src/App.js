import Navbar from './components/layout/Navbar'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, { Component } from 'react'

import ItemList from './components/item/ItemList'
import CartList from './components/cart/CartList'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/' component={ItemList} />
                <Route exact path='/cart' component={CartList} />
            </Switch>
            
        </Router>
              
      </div>
    )
  }
}

export default App


// import { useState, useEffect } from 'react'

// function App() {

//   const [items, setItems] = useState([{
//     name: '',
//     price: null,
//     description: '',
//     image: ''
//   }])

//   useEffect( () => {
//     // fetch('/items').then(res => {
//     //     if(res.ok) {
//     //       return res.json();
//     //     } 
//     //   }).then(jsonRes => setItems(jsonRes));
//     // }
//     //const res = await axios.get(`some-url/todos`);

//     getResult();

//     async function getResult() {
//       const res = await axios.get(`/items`);
//       console.log(res);
//     }
//   });


//   return (
//     <div className="App">
//       <Navbar />

//       <div style={itemStyle}>
//                 {items.map(item => (
//                     // <Item key={item.id} item={item}/>                    
//                   console.log({item})
//                 ))}
//       </div>
      
//     </div>
//   );
// }

// const itemStyle = {
//   display: 'grid',
//   gridTemplateColumns: 'repeat(4, 1fr)',
//   gridGap : '0.5rem'
// }

// export default App;
