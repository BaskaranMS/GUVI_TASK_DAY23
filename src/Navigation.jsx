import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navigation() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">

                    <NavLink to='/' className="navbar-brand">MSB SHOPPING ZONE</NavLink>

                    <button className="navbar-toggler" type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id='navbarNav'>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to='/Product' className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/About' className="nav-link">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/MyCart' className="nav-link">My Cart</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/Login' className="nav-link">Login</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navigation