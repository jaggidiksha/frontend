import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Link to={'/'} >Eccom</Link>
            </div>
            <div className="menus">
                <Link to={'/'} >Home</Link>
                <Link to={'/all'} >All Products</Link>
                <Link to={'/add'} >Add Product</Link>
            </div>
        </nav>
    )
}

export default Navbar