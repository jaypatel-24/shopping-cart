import React from 'react'

import {Link}  from 'react-router-dom'

const Navbar = ({icon, title }) => {
    return (
        <div className="navbar bg-primary">
           <h1>
            <i className={icon}></i> {title}
           </h1> 
           <ul>
               <li>
                   <Link to='/'>Home</Link>
               </li>
               <li>
                   <Link to='/cart'>Cart</Link>
               </li>
           </ul>
        </div>
    )
}

Navbar.defaultProps = {
    title: "Shopping Cart",
    icon : "fas fa-shopping-cart"
}


export default Navbar