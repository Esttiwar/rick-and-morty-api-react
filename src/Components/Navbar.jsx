import React from 'react'

const Navbar = ({brand}) => {
    return ( 
        <nav className="bg-gray-800 text-white text-transform: uppercase tex py-3 text-center">
            <div>
                <a href="/">{brand}</a>
            </div>
        </nav>      
    )
}

export default Navbar
